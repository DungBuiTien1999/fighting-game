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