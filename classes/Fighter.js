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
      frameGiveDamage = [4],
      health = 100,
      isShotSkill = false,
      farSkill = false,
      width = 50,
      height = 150,
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
      this.shotted = false;
      for (const sprite in this.sprites) {
        this.sprites[sprite].image = new Image();
        this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
      }
    }
  
    update() {
      this.draw();
      if (!this.dead) this.animateFrames();
  
    //   c.fillStyle = "rgba(0, 255, 0, 0.4)";
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
  
    //   c.fillStyle =
    //     this.currentDirection === "Left"
    //       ? "rgba(0, 0, 0, 0.64)"
    //       : "rgba(0, 0, 255, 0.5)";
    //   c.fillRect(
    //     this.attackBox.position.x,
    //     this.attackBox.position.y,
    //     this.attackBox.width,
    //     this.attackBox.height
    //   );
    }
  
    attack() {
      if (this.health <= 0) return;
      this.isAttacking = true;
      this.switchSprite(
        `attack${Math.floor(Math.random() * this.numberSkills + 1)}${
          this.currentDirection
        }`
      );
    }
  
    takeHit(damage = 10) {
      this.health -= damage;
    //   console.log(this.health)
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
        this.frameGiveDamage = this.sprites[sprite].frameGiveDamage || [4];
        this.isShotSkill = !!this.sprites[sprite].isShotSkill;
        this.farSkill = !!this.sprites[sprite].farSkill;
        this.shotted = !!this.sprites[sprite].shotted;
        this.skill = this.sprites[sprite].skill || "";
        if (this.sprites[sprite].shouldCheckDirection) {
          this.attackBox.currentOffset =
            this.currentDirection === "Left"
              ? this.attackBox.offsetLeft
              : this.attackBox.offsetRight;
        }
        if (this.sprites[sprite].attackBox) {
            this.attackBox.currentOffset = this.sprites[sprite].attackBox.offset;
            this.attackBox.width = this.sprites[sprite].attackBox.width;
            this.attackBox.height = this.sprites[sprite].attackBox.height;
        }
      }
    }
  }