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
      currentDirection = "Right",
      isGravity,
      frameGiveDamage = [4],
      damage = 0,
      hitted = false,
      effections = [],
    }) {
      super({ position, imageSrc, frames, scale, offset, currentDirection });
      this.velocity = velocity;
      this.width = width;
      this.height = height;
      this.offsetDamage = offsetDamage;
      this.isGravity = isGravity;
      this.frameGiveDamage = frameGiveDamage;
      this.damage = damage;
      this.hitted = hitted;
      this.effections = effections;
    }
  
    update() {
      this.draw();
      this.animateFrames();
  
      // gravity function
      if (this.isGravity)
        if (
          this.position.y + this.height + this.velocity.y >=
          canvas.height - 96
        ) {
          this.velocity.y = 0;
          this.velocity.x = 0;
          this.position.y = canvas.height - 96 - this.height;
        } else this.velocity.y += gravity;
  
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      // c.fillStyle = "rgba(255, 0, 0, 0.4)";
      // c.fillRect(
      //   this.position.x - this.offsetDamage.x,
      //   this.position.y - this.offsetDamage.y,
      //   this.width,
      //   this.height
      // );
    }
  }