class Fighter extends Sprite {
  static spritesNeedComplete = [
    "attack1Left",
    "attack2Left",
    "attack3Left",
    "takeHitLeft",
    "attack1Right",
    "attack2Right",
    "attack3Right",
    "takeHitRight",
    "defendLeft",
    "defendRight",
    "airAttackRight",
    "airAttackLeft",
  ];
  static spriteDefenses = ["defendLeft", "defendRight"];
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
    frameGiveDamage = [4],
    health = 100,
    isShotSkill = false,
    farSkill = false,
    width = 50,
    height = 150,
    hasHealthBar = false,
  }) {
    super({ position, imageSrc, frames, scale, offset, currentDirection });
    this.velocity = velocity;
    this.height = height;
    this.width = width;
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
    this.defaultHealth = health;
    this.health = health;
    this.sprites = sprites;
    this.dead = false;
    this.canJump = true;
    this.ableJump = ableJump;
    this.numberSkills = numberSkills;
    this.damage = damage;
    this.frameGiveDamage = frameGiveDamage;
    this.isShotSkill = isShotSkill;
    this.farSkill = farSkill;
    this.skill = "";
    this.currentSpriteName = "";
    this.canMove = true;
    this.hasHealthBar = hasHealthBar;
    for (const sprite in this.sprites) {
      this.sprites[sprite].image = new Image();
      this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
      this.sprites[sprite].name = sprite;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrames();

    //   c.fillStyle = "rgba(255, 0, 0, 0.4)";
    //   c.fillRect(this.position.x, this.position.y, this.width, this.height);

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
    if (this.currentSpriteName.includes("airAttack") && this.velocity.y >= 0) {
      this.velocity.y = 0;
    } else {
      if (
        this.position.y + this.height + this.velocity.y >=
        canvas.height - 96
      ) {
        this.velocity.y = 0;
        this.position.y = canvas.height - 96 - this.height;
        this.canJump = true;
      } else this.velocity.y += gravity;
    }

    // attack boxes
    this.attackBox.position.x =
      this.position.x + this.attackBox.currentOffset.x;
    this.attackBox.position.y =
      this.position.y + this.attackBox.currentOffset.y;

    // show health bar
    if (this.hasHealthBar) {
      c.fillStyle = "red";
      c.fillRect(this.position.x - 20, this.position.y - 10, 70, 5);

      if (this.health > 0) {
        c.fillStyle = "green";
        c.fillRect(
          this.position.x - 20,
          this.position.y - 10,
          70 * (this.health / this.defaultHealth),
          5
        );
      }
    }

    //   c.fillStyle =
    //     this.currentDirection === "Left"
    //       ? "rgba(0, 255, 0, 0.64)"
    //       : "rgba(0, 100, 150, 0.5)";
    //   c.fillRect(
    //     this.attackBox.position.x,
    //     this.attackBox.position.y,
    //     this.attackBox.width,
    //     this.attackBox.height
    //   );
  }

  attack(skill = "") {
    if (this.health <= 0) return;
    this.isAttacking = true;
    if (skill) this.switchSprite(skill);
    else
      this.switchSprite(
        `attack${Math.floor(Math.random() * this.numberSkills + 1)}${
          this.currentDirection
        }`
      );
  }

  takeHit(damage = 10, damageDirection = "Left") {
    if (
      Fighter.spriteDefenses.includes(this.currentSpriteName) &&
      this.sprites[this.currentSpriteName].ableDefendFrames.includes(
        this.frames.currentFrame
      ) &&
      this.currentDirection !== damageDirection
    ) {
      return;
    }
    this.health -= damage;
    if (this.health <= 0) this.switchSprite(`death${this.currentDirection}`);
    else this.switchSprite(`takeHit${this.currentDirection}`);
  }

  switchSprite(sprite) {
    if (
      this.image === this.sprites.deathLeft.image ||
      this.image === this.sprites.deathRight.image
    ) {
      if (
        (this.frames.currentFrame === this.frames.max - 1 &&
          this.currentDirection === "Right") ||
        (this.frames.currentFrame === 0 && this.currentDirection === "Left")
      ) {
        this.dead = true;
      }
      this.canMove = false;
      return;
    }
    if (
      Fighter.spritesNeedComplete.includes(this.currentSpriteName) &&
      ((this.frames.currentFrame < this.frames.max - 1 &&
        this.currentDirection === "Right") ||
        (this.frames.currentFrame > 0 && this.currentDirection === "Left"))
    ) {
      this.canMove = false;
      return;
    }

    if (this.sprites[sprite] && this.image !== this.sprites[sprite].image) {
      this.canMove = true;
      this.currentSpriteName = sprite;
      this.image = this.sprites[sprite].image;
      this.frames.max = this.sprites[sprite].maxFrames;
      this.frames.currentFrame =
        this.currentDirection === "Left" ? this.frames.max - 1 : 0;
      this.damage = this.sprites[sprite].damage || 10;
      this.frameGiveDamage = this.sprites[sprite].frameGiveDamage || [4];
      this.isShotSkill = !!this.sprites[sprite].isShotSkill;
      this.farSkill = !!this.sprites[sprite].farSkill;
      this.skill = this.sprites[sprite].skill || "";
      if (this.sprites[sprite].attackBox) {
        this.attackBox.currentOffset = this.sprites[sprite].attackBox.offset;
        this.attackBox.width = this.sprites[sprite].attackBox.width;
        this.attackBox.height = this.sprites[sprite].attackBox.height;
      }
    }
  }
}
