const gravity = 0.7;

class Sprite {
  constructor({
    position,
    imageSrc,
    frames = { max: 1, hold: 10 },
    scale = 1,
    offset = { x: 0, y: 0 },
  }) {
    this.position = position;
    // this.height = 200;
    // this.width = 50;
    this.image = new Image();
    this.image.src = imageSrc;
    // this.image.onload = () => {
    //   this.width = this.image.width / this.frames.max;
    //   this.height = this.image.height;
    // };
    this.frames = { ...frames, currentFrame: 0, elapsed: 0 };
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
      if (this.frames.currentFrame < this.frames.max - 1) {
        this.frames.currentFrame++;
        this.frames.elapsed = 0;
      } else this.frames.currentFrame = 0;
    }
  }

  update() {
    this.draw();
    this.animateFrames();
  }
}

const overidePrites = ["attack1", "attack2", "takeHit"];
class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    imageSrc,
    frames = { max: 1, hold: 10 },
    scale = 1,
    offset,
    sprites,
    attackBox = { offset, width: undefined, height: undefined },
  }) {
    super({ position, imageSrc, frames, scale, offset });
    this.velocity = velocity;
    this.height = 150;
    this.width = 50;
    this.lastKey = "";
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.isAttacking = false;
    this.health = 100;
    this.sprites = sprites;
    this.dead = false;
    this.canJump = true;
    for (const sprite in this.sprites) {
      this.sprites[sprite].image = new Image();
      this.sprites[sprite].image.src = this.sprites[sprite].imageSrc;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateFrames();

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
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );
  }

  attack() {
    this.isAttacking = true;
    this.switchSprite(Math.random() < 0.5 ? "attack1" : "attack2");
  }

  takeHit() {
    this.health -= 10;
    if (this.health <= 0) this.switchSprite("death");
    else this.switchSprite("takeHit");
  }

  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.frames.currentFrame === this.sprites.death.maxFrames - 1) {
        this.dead = true;
      }
      return;
    }
    if (
      (this.image === this.sprites.attack1.image ||
        this.image === this.sprites.attack2.image) &&
      this.frames.currentFrame < this.frames.max - 1
    )
      return;
    if (
      this.image === this.sprites.takeHit.image &&
      this.frames.currentFrame < this.frames.max - 1
    )
      return;

    if (this.sprites[sprite] && this.image !== this.sprites[sprite].image) {
      this.image = this.sprites[sprite].image;
      this.frames.max = this.sprites[sprite].maxFrames;
      this.frames.currentFrame = 0;
    }
    // switch (sprite) {
    //   case "idle":
    //     if (this.image !== this.sprites.idle.image) {
    //       this.image = this.sprites.idle.image;
    //       this.frames.max = this.sprites.idle.maxFrames;
    //       this.frames.currentFrame = 0;
    //     }
    //     break;
    //   case "run":
    //     if (this.image !== this.sprites.run.image) {
    //       this.image = this.sprites.run.image;
    //       this.frames.max = this.sprites.run.maxFrames;
    //       this.frames.currentFrame = 0;
    //     }
    //     break;
    //   case "jump":
    //     if (this.image !== this.sprites.jump.image) {
    //       this.image = this.sprites.jump.image;
    //       this.frames.max = this.sprites.jump.maxFrames;
    //       this.frames.currentFrame = 0;
    //     }
    //     break;
    //   case "fall":
    //     if (this.image !== this.sprites.fall.image) {
    //       this.image = this.sprites.fall.image;
    //       this.frames.max = this.sprites.fall.maxFrames;
    //       this.frames.currentFrame = 0;
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }
}
