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
    constantVelocity = 0,
    currentSpriteName = "",
    percentDefense = 0,
    hasHealthBar = true,
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
      currentSpriteName,
      hasHealthBar,
    });
    this.shotted = false;
    this.percentDefense = percentDefense;
    this.constantVelocity = constantVelocity;
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

  takeHit(damage = 10, damageDirection = "Left") {
    if (
      this.currentDirection !== damageDirection &&
      Math.random() > this.percentDefense
    ) {
      this.switchSprite(`defend${this.currentDirection}`);
      return;
    }
    this.health -= damage;
    if (this.health <= 0) this.switchSprite(`death${this.currentDirection}`);
    else this.switchSprite(`takeHit${this.currentDirection}`);
  }

  attack() {
    if (this.health <= 0) return;
    if (
      Fighter.spritesNeedComplete.includes(this.currentSpriteName) &&
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
      this.velocity.x = 0;
      return;
    }

    if (
      Fighter.spritesNeedComplete.includes(this.currentSpriteName) &&
      ((this.frames.currentFrame < this.frames.max - 1 &&
        this.currentDirection === "Right") ||
        (this.frames.currentFrame > 0 && this.currentDirection === "Left"))
    ) {
      this.velocity.x = 0;
      return;
    }

    if (this.sprites[sprite] && this.image !== this.sprites[sprite].image) {
      this.currentSpriteName = sprite;
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
