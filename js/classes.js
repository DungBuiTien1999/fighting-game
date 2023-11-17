const gravity = 0.7;

class Sprite {
  constructor({
    position,
    imageSrc,
    frames = { max: 1, hold: 10 },
    scale = 1,
    offset = { x: 0, y: 0 },
    currentDirection = "Right",
  }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.currentDirection = currentDirection;
    this.frames = { ...frames, currentFrame: 0, elapsed: 0 };
    if (this.currentDirection === "Left")
      this.frames.currentFrame = this.frames.max - 1;
    this.scale = scale;
    this.offset = offset;
  }

  draw() {
    c.drawImage(
      this.image,
      this.frames.currentFrame * (this.image.width / this.frames.max),
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.frames.max) * this.scale,
      this.image.height * this.scale
    );
    // c.fillRect(this.position.x, this.position.y, 150, 50)
  }

  animateFrames() {
    if (this.frames.max > 1) this.frames.elapsed++;
    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.currentDirection === "Left") {
        if (this.frames.currentFrame > 0) {
          this.frames.currentFrame--;
          this.frames.elapsed = 0;
        } else this.frames.currentFrame = this.frames.max - 1;
      } else {
        if (this.frames.currentFrame < this.frames.max - 1) {
          this.frames.currentFrame++;
          this.frames.elapsed = 0;
        } else this.frames.currentFrame = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();
  }
}

class Projectile extends Sprite {
  constructor({
    position,
    imageSrc,
    frames = { max: 1, hold: 10 },
    scale = 1,
    offset,
    velocity,
    width,
    height,
    offsetDamage = { x: 0, y: 0 },
  }) {
    super({ position, imageSrc, frames, scale, offset });
    this.velocity = velocity;
    this.width = width;
    this.height = height;
    this.offsetDamage = offsetDamage;
  }

  update() {
    this.draw();
    this.animateFrames();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    imageSrc,
    frames = { max: 1, hold: 10 },
    scale = 1,
    offset,
    sprites,
    attackBox = {
      offsetLeft,
      width: undefined,
      height: undefined,
      offsetRight,
    },
    currentDirection = "Right",
    numberSkills = 2,
    ableJump = true,
    damage = 10,
    frameGiveDamage = 4,
    health = 100,
    isShotSkill = false,
  }) {
    super({ position, imageSrc, frames, scale, offset, currentDirection });
    this.velocity = velocity;
    this.height = 150;
    this.width = 50;
    this.lastKey = "";
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offsetLeft: attackBox.offsetLeft,
      offsetRight: attackBox.offsetRight,
      currentOffset:
        currentDirection === "Right"
          ? attackBox.offsetRight
          : attackBox.offsetLeft,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.isAttacking = false;
    this.maxHealth = health;
    this.health = health;
    this.sprites = sprites;
    this.dead = false;
    this.canJump = true;
    this.ableJump = ableJump;
    this.numberSkills = numberSkills;
    this.damage = damage;
    this.frameGiveDamage = frameGiveDamage;
    this.isShotSkill = isShotSkill;
    for (const sprite in this.sprites) {
      this.sprites[sprite].image = new Image();
      this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrames();

    // c.fillStyle = "#e11d48";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // Prevent move out screen
    if (
      this.position.x + this.velocity.x <= 0 ||
      this.position.x + this.width + this.velocity.x >= canvas.width
    ) {
      this.velocity.x = 0;
    }

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity function
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0;
      this.position.y = canvas.height - 96 - this.height;
      this.canJump = true;
    } else this.velocity.y += gravity;

    // attack boxes
    this.attackBox.position.x =
      this.position.x + this.attackBox.currentOffset.x;
    this.attackBox.position.y =
      this.position.y + this.attackBox.currentOffset.y;

    // c.fillStyle =
    //   this.currentDirection === "Left"
    //     ? "rgba(0, 255, 0, 0.64)"
    //     : "rgba(0, 0, 255, 0.5)";
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );
  }

  attack() {
    this.isAttacking = true;
    this.switchSprite(
      `attack${Math.floor(Math.random() * this.numberSkills + 1)}${this.currentDirection}`
    );
  }

  takeHit(damage = 10) {
    this.health -= damage;
    if (this.health <= 0) this.switchSprite(`death${this.currentDirection}`);
    else this.switchSprite(`takeHit${this.currentDirection}`);
  }

  switchSprite(sprite) {
    if (this.image === this.sprites.deathLeft.image || this.image === this.sprites.deathRight.image) {
      if (
        (this.frames.currentFrame === this.frames.max - 1 &&
          this.currentDirection === "Right") ||
        (this.frames.currentFrame === 0 && this.currentDirection === "Left")
      ) {
        this.dead = true;
      }
      return;
    }
    if (
      (this.image === this.sprites.attack1Left.image ||
        this.image === this.sprites.attack2Left.image ||
        this.image === this.sprites?.attack3Left?.image ||
        this.image === this.sprites.takeHitLeft.image ||
        this.image === this.sprites.attack1Right.image ||
        this.image === this.sprites.attack2Right.image ||
        this.image === this.sprites?.attack3Right?.image ||
        this.image === this.sprites.takeHitRight.image) &&
      ((this.frames.currentFrame < this.frames.max - 1 &&
        this.currentDirection === "Right") ||
        (this.frames.currentFrame > 0 && this.currentDirection === "Left"))
    ) {
      return;
    }

    if (this.sprites[sprite] && this.image !== this.sprites[sprite].image) {
      this.image = this.sprites[sprite].image;
      this.frames.max = this.sprites[sprite].maxFrames;
      this.frames.currentFrame =
        this.currentDirection === "Left" ? this.frames.max - 1 : 0;
      this.damage = this.sprites[sprite].damage || 10;
      this.frameGiveDamage = this.sprites[sprite].frameGiveDamage || 4;
      this.isShotSkill = !!this.sprites[sprite].isShotSkill;
      if (this.sprites[sprite].shouldCheckDirection) {
        this.attackBox.currentOffset =
          this.currentDirection === "Left"
            ? this.attackBox.offsetLeft
            : this.attackBox.offsetRight;
      }
    }
  }
}
