class Monster extends Fighter {
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
    width = 50,
    height = 150,
    skill = "",
  }) {
    super({
      position,
      velocity,
      imageSrc,
      frames,
      scale,
      offset,
      sprites,
      attackBox,
      currentDirection,
      numberSkills,
      ableJump,
      damage,
      frameGiveDamage,
      health,
      isShotSkill,
      width,
      height,
      skill,
    });
    this.shotted = false;
    this.futureAtkSkill = Math.ceil(Math.random() * numberSkills);
    this.attackBox.currentOffset =
      this.sprites[
        `attack${this.futureAtkSkill}${this.currentDirection}`
      ].attackBox.offset;
    this.attackBox.width =
      this.sprites[
        `attack${this.futureAtkSkill}${this.currentDirection}`
      ].attackBox.width;
    this.attackBox.height =
      this.sprites[
        `attack${this.futureAtkSkill}${this.currentDirection}`
      ].attackBox.height;
  }

  attack() {
    if (this.health <= 0) return;
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
    this.isAttacking = true;
    this.switchSprite(`attack${this.futureAtkSkill}${this.currentDirection}`);
    this.futureAtkSkill = Math.ceil(Math.random() * this.numberSkills);
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
      this.attackBox.currentOffset =
        this.sprites[
          `attack${this.futureAtkSkill}${this.currentDirection}`
        ].attackBox.offset;
      this.attackBox.width =
        this.sprites[
          `attack${this.futureAtkSkill}${this.currentDirection}`
        ].attackBox.width;
      this.attackBox.height =
        this.sprites[
          `attack${this.futureAtkSkill}${this.currentDirection}`
        ].attackBox.height;
    }
  }
}
