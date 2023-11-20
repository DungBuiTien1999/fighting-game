const characters = {
  Mack: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 215,
      y: 157,
    },
    imageSrc: "../img/samuraiMack/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    health: 100,
    currentDirection: "Right",
    sprites: {
      idleRight: {
        imageSrc: "../img/samuraiMack/IdleRight.png",
        maxFrames: 8,
      },
      attack1Right: {
        imageSrc: "../img/samuraiMack/Attack1Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Right: {
        imageSrc: "../img/samuraiMack/Attack2Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [4],
      },
      deathRight: {
        imageSrc: "../img/samuraiMack/DeathRight.png",
        maxFrames: 6,
      },
      fallRight: {
        imageSrc: "../img/samuraiMack/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/samuraiMack/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/samuraiMack/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/samuraiMack/TakeHitRight.png",
        maxFrames: 4,
      },
      idleLeft: {
        imageSrc: "../img/samuraiMack/IdleLeft.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/samuraiMack/Attack1Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [1],
      },
      attack2Left: {
        imageSrc: "../img/samuraiMack/Attack2Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [1],
      },
      deathLeft: {
        imageSrc: "../img/samuraiMack/DeathLeft.png",
        maxFrames: 6,
      },
      fallLeft: {
        imageSrc: "../img/samuraiMack/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/samuraiMack/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/samuraiMack/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/samuraiMack/TakeHitLeft.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetRight: {
        x: 100,
        y: 50,
      },
      offsetLeft: {
        x: -175,
        y: 50,
      },
      width: 160,
      height: 50,
    },
  },
  Kenji: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 215,
      y: 167,
    },
    imageSrc: "../img/kenji/IdleLeft.png",
    frames: {
      max: 4,
      hold: 10,
    },
    scale: 2.5,
    health: 100,
    currentDirection: "Left",
    sprites: {
      idleLeft: {
        imageSrc: "../img/kenji/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/kenji/Attack1Left.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [1],
      },
      attack2Left: {
        imageSrc: "../img/kenji/Attack2Left.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [1],
      },
      deathLeft: {
        imageSrc: "../img/kenji/DeathLeft.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/kenji/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/kenji/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/kenji/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/kenji/TakeHitLeft.png",
        maxFrames: 3,
      },
      idleRight: {
        imageSrc: "../img/kenji/IdleRight.png",
        maxFrames: 4,
      },
      attack1Right: {
        imageSrc: "../img/kenji/Attack1Right.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack2Right: {
        imageSrc: "../img/kenji/Attack2Right.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [2],
      },
      deathRight: {
        imageSrc: "../img/kenji/DeathRight.png",
        maxFrames: 7,
      },
      fallRight: {
        imageSrc: "../img/kenji/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/kenji/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/kenji/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/kenji/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -170,
        y: 50,
      },
      offsetRight: {
        x: 70,
        y: 50,
      },
      width: 170,
      height: 50,
    },
  },
  Taczen: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 125,
      y: 50,
    },
    imageSrc: "../img/taczen/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    numberSkills: 3,
    health: 150,
    currentDirection: "Right",
    sprites: {
      idleRight: {
        imageSrc: "../img/taczen/IdleRight.png",
        maxFrames: 10,
      },
      attack1Right: {
        imageSrc: "../img/taczen/Attack1Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Right: {
        imageSrc: "../img/taczen/Attack2Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack3Right: {
        imageSrc: "../img/taczen/Attack3Right.png",
        maxFrames: 9,
        damage: 15,
        frameGiveDamage: [6],
      },
      deathRight: {
        imageSrc: "../img/taczen/DeathRight.png",
        maxFrames: 11,
      },
      fallRight: {
        imageSrc: "../img/taczen/FallRight.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/taczen/JumpRight.png",
        maxFrames: 3,
      },
      runRight: {
        imageSrc: "../img/taczen/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/taczen/TakeHitRight.png",
        maxFrames: 3,
      },
      idleLeft: {
        imageSrc: "../img/taczen/IdleLeft.png",
        maxFrames: 10,
      },
      attack1Left: {
        imageSrc: "../img/taczen/Attack1Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack2Left: {
        imageSrc: "../img/taczen/Attack2Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack3Left: {
        imageSrc: "../img/taczen/Attack3Left.png",
        maxFrames: 9,
        damage: 15,
        frameGiveDamage: [2],
      },
      deathLeft: {
        imageSrc: "../img/taczen/DeathLeft.png",
        maxFrames: 11,
      },
      fallLeft: {
        imageSrc: "../img/taczen/FallLeft.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/taczen/JumpLeft.png",
        maxFrames: 3,
      },
      runLeft: {
        imageSrc: "../img/taczen/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/taczen/TakeHitLeft.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 30,
        y: 50,
      },
      offsetLeft: {
        x: -120,
        y: 50,
      },
      width: 160,
      height: 50,
    },
  },
  Wizard: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 185,
      y: 95,
    },
    imageSrc: "../img/wizardpack/IdleLeft.png",
    frames: {
      max: 6,
      hold: 10,
    },
    scale: 1.75,
    health: 100,
    currentDirection: "Left",
    sprites: {
      idleLeft: {
        imageSrc: "../img/wizardpack/IdleLeft.png",
        maxFrames: 6,
      },
      attack1Left: {
        imageSrc: "../img/wizardpack/Attack1Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [2],
      },
      attack2Left: {
        imageSrc: "../img/wizardpack/Attack2Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [2],
      },
      deathLeft: {
        imageSrc: "../img/wizardpack/DeathLeft.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/wizardpack/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/wizardpack/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/wizardpack/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/wizardpack/HitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/wizardpack/IdleRight.png",
        maxFrames: 6,
      },
      attack1Right: {
        imageSrc: "../img/wizardpack/Attack1Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      attack2Right: {
        imageSrc: "../img/wizardpack/Attack2Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      deathRight: {
        imageSrc: "../img/wizardpack/DeathRight.png",
        maxFrames: 7,
      },
      fallRight: {
        imageSrc: "../img/wizardpack/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/wizardpack/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/wizardpack/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/wizardpack/HitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -165,
        y: 50,
      },
      offsetRight: {
        x: 45,
        y: 50,
      },
      width: 150,
      height: 50,
    },
  },
  WizardFire: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 170,
      y: 95,
    },
    imageSrc: "../img/fireWizard/IdleLeft.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    opposite: true,
    ableJump: false,
    health: 120,
    currentDirection: "Left",
    sprites: {
      idleLeft: {
        imageSrc: "../img/fireWizard/IdleLeft.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/fireWizard/AttackLeft.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      attack2Left: {
        imageSrc: "../img/fireWizard/AttackLeft.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      deathLeft: {
        imageSrc: "../img/fireWizard/DeathLeft.png",
        maxFrames: 5,
      },
      runLeft: {
        imageSrc: "../img/fireWizard/MoveLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/fireWizard/TakeHitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/fireWizard/IdleRight.png",
        maxFrames: 8,
      },
      attack1Right: {
        imageSrc: "../img/fireWizard/AttackRight.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      attack2Right: {
        imageSrc: "../img/fireWizard/AttackRight.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      deathRight: {
        imageSrc: "../img/fireWizard/DeathRight.png",
        maxFrames: 5,
      },
      runRight: {
        imageSrc: "../img/fireWizard/MoveRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/fireWizard/TakeHitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -140,
        y: 60,
      },
      offsetRight: {
        x: 45,
        y: 60,
      },
      width: 130,
      height: 50,
    },
  },
  WizardDark: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 200,
      y: 185,
    },
    imageSrc: "../img/wizardDark/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2,
    numberSkills: 2,
    health: 100,
    currentDirection: "Right",
    sprites: {
      idleLeft: {
        imageSrc: "../img/wizardDark/IdleLeft.png",
        maxFrames: 8,
      },
      idleRight: {
        imageSrc: "../img/wizardDark/IdleRight.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/wizardDark/Attack1Left.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: [5],
      },
      attack1Right: {
        imageSrc: "../img/wizardDark/Attack1Right.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: [5],
      },
      attack2Left: {
        imageSrc: "../img/wizardDark/Attack2Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      attack2Right: {
        imageSrc: "../img/wizardDark/Attack2Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      deathLeft: {
        imageSrc: "../img/wizardDark/DeathLeft.png",
        maxFrames: 7,
      },
      deathRight: {
        imageSrc: "../img/wizardDark/DeathRight.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/wizardDark/FallLeft.png",
        maxFrames: 2,
      },
      fallRight: {
        imageSrc: "../img/wizardDark/FallRight.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/wizardDark/JumpLeft.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/wizardDark/JumpRight.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/wizardDark/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/wizardDark/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/wizardDark/TakeHitLeft.png",
        maxFrames: 3,
      },
      takeHitRight: {
        imageSrc: "../img/wizardDark/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 150,
        y: 50,
      },
      offsetLeft: {
        x: -150,
        y: 50,
      },
      width: 160,
      height: 50,
    },
  },
  ThunderWarrior: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 180,
      y: 95,
    },
    imageSrc: "../img/thunderWarrior/IdleLeft.png",
    frames: {
      max: 10,
      hold: 10,
    },
    scale: 2.5,
    currentDirection: "Left",
    numberSkills: 3,
    health: 150,
    sprites: {
      idleLeft: {
        imageSrc: "../img/thunderWarrior/IdleLeft.png",
        maxFrames: 10,
      },
      idleRight: {
        imageSrc: "../img/thunderWarrior/IdleRight.png",
        maxFrames: 10,
      },
      attack1Left: {
        imageSrc: "../img/thunderWarrior/Attack1Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack1Right: {
        imageSrc: "../img/thunderWarrior/Attack1Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Left: {
        imageSrc: "../img/thunderWarrior/Attack2Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack2Right: {
        imageSrc: "../img/thunderWarrior/Attack2Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack3Left: {
        imageSrc: "../img/thunderWarrior/Attack3Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [4],
      },
      attack3Right: {
        imageSrc: "../img/thunderWarrior/Attack3Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [4],
      },
      fallLeft: {
        imageSrc: "../img/thunderWarrior/FallLeft.png",
        maxFrames: 3,
      },
      fallRight: {
        imageSrc: "../img/thunderWarrior/FallRight.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/thunderWarrior/JumpLeft.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/thunderWarrior/JumpRight.png",
        maxFrames: 3,
      },
      deathLeft: {
        imageSrc: "../img/thunderWarrior/DeathLeft.png",
        maxFrames: 7,
      },
      deathRight: {
        imageSrc: "../img/thunderWarrior/DeathRight.png",
        maxFrames: 7,
      },
      runLeft: {
        imageSrc: "../img/thunderWarrior/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/thunderWarrior/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/thunderWarrior/TakehitLeft.png",
        maxFrames: 3,
      },
      takeHitRight: {
        imageSrc: "../img/thunderWarrior/TakehitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 25,
        y: 50,
      },
      offsetLeft: {
        x: -130,
        y: 50,
      },
      width: 170,
      height: 50,
    },
  },
  FireWorm: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 55,
      y: 45,
    },
    width: 75,
    height: 70,
    imageSrc: "../img/fireWorm/Worm/IdleRight.png",
    frames: {
      max: 9,
      hold: 10,
    },
    scale: 2,
    numberSkills: 2,
    health: 100,
    ableJump: false,
    canShot: true,
    currentDirection: "Right",
    sprites: {
      idleLeft: {
        imageSrc: "../img/fireWorm/Worm/IdleLeft.png",
        maxFrames: 9,
      },
      attack1Left: {
        imageSrc: "../img/fireWorm/Worm/AttackLeft.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [4],
        isShotSkill: true,
      },
      attack2Left: {
        imageSrc: "../img/fireWorm/Worm/AttackLeft.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [4],
        isShotSkill: true,
      },
      deathLeft: {
        imageSrc: "../img/fireWorm/Worm/DeathLeft.png",
        maxFrames: 8,
      },
      runLeft: {
        imageSrc: "../img/fireWorm/Worm/WalkLeft.png",
        maxFrames: 9,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/fireWorm/Worm/TakeHitLeft.png",
        maxFrames: 3,
      },

      idleRight: {
        imageSrc: "../img/fireWorm/Worm/IdleRight.png",
        maxFrames: 9,
      },
      attack1Right: {
        imageSrc: "../img/fireWorm/Worm/AttackRight.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [11],
        isShotSkill: true,
      },
      attack2Right: {
        imageSrc: "../img/fireWorm/Worm/AttackRight.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [11],
        isShotSkill: true,
      },
      deathRight: {
        imageSrc: "../img/fireWorm/Worm/DeathRight.png",
        maxFrames: 8,
      },
      runRight: {
        imageSrc: "../img/fireWorm/Worm/WalkRight.png",
        maxFrames: 9,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/fireWorm/Worm/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 0,
        y: 0,
      },
      offsetLeft: {
        x: 0,
        y: 0,
      },
      width: 0,
      height: 0,
    },
  },
};

const players = {
  Mack: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 215,
      y: 187,
    },
    imageSrc: "../img/samuraiMack/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    width: 60,
    height: 120,
    scale: 2.5,
    health: 100,
    currentDirection: "Right",
    sprites: {
      idleRight: {
        imageSrc: "../img/samuraiMack/IdleRight.png",
        maxFrames: 8,
      },
      attack1Right: {
        imageSrc: "../img/samuraiMack/Attack1Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Right: {
        imageSrc: "../img/samuraiMack/Attack2Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [4],
      },
      deathRight: {
        imageSrc: "../img/samuraiMack/DeathRight.png",
        maxFrames: 6,
      },
      fallRight: {
        imageSrc: "../img/samuraiMack/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/samuraiMack/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/samuraiMack/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/samuraiMack/TakeHitRight.png",
        maxFrames: 4,
      },
      idleLeft: {
        imageSrc: "../img/samuraiMack/IdleLeft.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/samuraiMack/Attack1Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [1],
      },
      attack2Left: {
        imageSrc: "../img/samuraiMack/Attack2Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [1],
      },
      deathLeft: {
        imageSrc: "../img/samuraiMack/DeathLeft.png",
        maxFrames: 6,
      },
      fallLeft: {
        imageSrc: "../img/samuraiMack/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/samuraiMack/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/samuraiMack/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/samuraiMack/TakeHitLeft.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetRight: {
        x: 100,
        y: 40,
      },
      offsetLeft: {
        x: -175,
        y: 40,
      },
      width: 160,
      height: 50,
    },
  },
  Taczen: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 125,
      y: 90,
    },
    imageSrc: "../img/taczen/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    width: 60,
    height: 110,
    scale: 2.5,
    numberSkills: 3,
    health: 150,
    currentDirection: "Right",
    sprites: {
      idleRight: {
        imageSrc: "../img/taczen/IdleRight.png",
        maxFrames: 10,
      },
      attack1Right: {
        imageSrc: "../img/taczen/Attack1Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Right: {
        imageSrc: "../img/taczen/Attack2Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack3Right: {
        imageSrc: "../img/taczen/Attack3Right.png",
        maxFrames: 9,
        damage: 15,
        frameGiveDamage: [6],
      },
      deathRight: {
        imageSrc: "../img/taczen/DeathRight.png",
        maxFrames: 11,
      },
      fallRight: {
        imageSrc: "../img/taczen/FallRight.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/taczen/JumpRight.png",
        maxFrames: 3,
      },
      runRight: {
        imageSrc: "../img/taczen/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/taczen/TakeHitRight.png",
        maxFrames: 3,
      },
      idleLeft: {
        imageSrc: "../img/taczen/IdleLeft.png",
        maxFrames: 10,
      },
      attack1Left: {
        imageSrc: "../img/taczen/Attack1Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack2Left: {
        imageSrc: "../img/taczen/Attack2Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack3Left: {
        imageSrc: "../img/taczen/Attack3Left.png",
        maxFrames: 9,
        damage: 15,
        frameGiveDamage: [2],
      },
      deathLeft: {
        imageSrc: "../img/taczen/DeathLeft.png",
        maxFrames: 11,
      },
      fallLeft: {
        imageSrc: "../img/taczen/FallLeft.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/taczen/JumpLeft.png",
        maxFrames: 3,
      },
      runLeft: {
        imageSrc: "../img/taczen/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/taczen/TakeHitLeft.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 30,
        y: 35,
      },
      offsetLeft: {
        x: -120,
        y: 35,
      },
      width: 160,
      height: 50,
    },
  },
  WizardDark: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 200,
      y: 215,
    },
    imageSrc: "../img/wizardDark/IdleRight.png",
    frames: {
      max: 8,
      hold: 10,
    },
    width: 60,
    height: 120,
    scale: 2,
    numberSkills: 2,
    health: 100,
    currentDirection: "Right",
    sprites: {
      idleLeft: {
        imageSrc: "../img/wizardDark/IdleLeft.png",
        maxFrames: 8,
      },
      idleRight: {
        imageSrc: "../img/wizardDark/IdleRight.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/wizardDark/Attack1Left.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: [5],
      },
      attack1Right: {
        imageSrc: "../img/wizardDark/Attack1Right.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: [5],
      },
      attack2Left: {
        imageSrc: "../img/wizardDark/Attack2Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      attack2Right: {
        imageSrc: "../img/wizardDark/Attack2Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      deathLeft: {
        imageSrc: "../img/wizardDark/DeathLeft.png",
        maxFrames: 7,
      },
      deathRight: {
        imageSrc: "../img/wizardDark/DeathRight.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/wizardDark/FallLeft.png",
        maxFrames: 2,
      },
      fallRight: {
        imageSrc: "../img/wizardDark/FallRight.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/wizardDark/JumpLeft.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/wizardDark/JumpRight.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/wizardDark/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/wizardDark/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/wizardDark/TakeHitLeft.png",
        maxFrames: 3,
      },
      takeHitRight: {
        imageSrc: "../img/wizardDark/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 100,
        y: 35,
      },
      offsetLeft: {
        x: -170,
        y: 35,
      },
      width: 160,
      height: 50,
    },
  },
  FireWorm: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 55,
      y: 45,
    },
    width: 75,
    height: 70,
    imageSrc: "../img/fireWorm/Worm/IdleRight.png",
    frames: {
      max: 9,
      hold: 10,
    },
    scale: 2,
    numberSkills: 2,
    health: 100,
    ableJump: false,
    canShot: true,
    currentDirection: "Right",
    sprites: {
      idleLeft: {
        imageSrc: "../img/fireWorm/Worm/IdleLeft.png",
        maxFrames: 9,
      },
      attack1Left: {
        imageSrc: "../img/fireWorm/Worm/AttackLeft.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [4],
        isShotSkill: true,
      },
      attack2Left: {
        imageSrc: "../img/fireWorm/Worm/AttackLeft.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [4],
        isShotSkill: true,
      },
      deathLeft: {
        imageSrc: "../img/fireWorm/Worm/DeathLeft.png",
        maxFrames: 8,
      },
      runLeft: {
        imageSrc: "../img/fireWorm/Worm/WalkLeft.png",
        maxFrames: 9,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/fireWorm/Worm/TakeHitLeft.png",
        maxFrames: 3,
      },

      idleRight: {
        imageSrc: "../img/fireWorm/Worm/IdleRight.png",
        maxFrames: 9,
      },
      attack1Right: {
        imageSrc: "../img/fireWorm/Worm/AttackRight.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [11],
        isShotSkill: true,
      },
      attack2Right: {
        imageSrc: "../img/fireWorm/Worm/AttackRight.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: [11],
        isShotSkill: true,
      },
      deathRight: {
        imageSrc: "../img/fireWorm/Worm/DeathRight.png",
        maxFrames: 8,
      },
      runRight: {
        imageSrc: "../img/fireWorm/Worm/WalkRight.png",
        maxFrames: 9,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/fireWorm/Worm/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 0,
        y: 0,
      },
      offsetLeft: {
        x: 0,
        y: 0,
      },
      width: 0,
      height: 0,
    },
  },
}

const enemies = {
  Kenji: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 215,
      y: 197,
    },
    imageSrc: "../img/kenji/IdleLeft.png",
    frames: {
      max: 4,
      hold: 10,
    },
    width: 60,
    height: 120,
    scale: 2.5,
    health: 100,
    currentDirection: "Left",
    sprites: {
      idleLeft: {
        imageSrc: "../img/kenji/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/kenji/Attack1Left.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [1],
      },
      attack2Left: {
        imageSrc: "../img/kenji/Attack2Left.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [1],
      },
      deathLeft: {
        imageSrc: "../img/kenji/DeathLeft.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/kenji/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/kenji/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/kenji/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/kenji/TakeHitLeft.png",
        maxFrames: 3,
      },
      idleRight: {
        imageSrc: "../img/kenji/IdleRight.png",
        maxFrames: 4,
      },
      attack1Right: {
        imageSrc: "../img/kenji/Attack1Right.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [2],
      },
      attack2Right: {
        imageSrc: "../img/kenji/Attack2Right.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: [2],
      },
      deathRight: {
        imageSrc: "../img/kenji/DeathRight.png",
        maxFrames: 7,
      },
      fallRight: {
        imageSrc: "../img/kenji/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/kenji/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/kenji/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/kenji/TakeHitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -170,
        y: 35,
      },
      offsetRight: {
        x: 70,
        y: 35,
      },
      width: 170,
      height: 50,
    },
  },
  Wizard: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 185,
      y: 95,
    },
    imageSrc: "../img/wizardpack/IdleLeft.png",
    frames: {
      max: 6,
      hold: 10,
    },
    width: 50,
    height: 150,
    scale: 1.75,
    health: 100,
    currentDirection: "Left",
    sprites: {
      idleLeft: {
        imageSrc: "../img/wizardpack/IdleLeft.png",
        maxFrames: 6,
      },
      attack1Left: {
        imageSrc: "../img/wizardpack/Attack1Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [2],
      },
      attack2Left: {
        imageSrc: "../img/wizardpack/Attack2Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [2],
      },
      deathLeft: {
        imageSrc: "../img/wizardpack/DeathLeft.png",
        maxFrames: 7,
      },
      fallLeft: {
        imageSrc: "../img/wizardpack/FallLeft.png",
        maxFrames: 2,
      },
      jumpLeft: {
        imageSrc: "../img/wizardpack/JumpLeft.png",
        maxFrames: 2,
      },
      runLeft: {
        imageSrc: "../img/wizardpack/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/wizardpack/HitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/wizardpack/IdleRight.png",
        maxFrames: 6,
      },
      attack1Right: {
        imageSrc: "../img/wizardpack/Attack1Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      attack2Right: {
        imageSrc: "../img/wizardpack/Attack2Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [5],
      },
      deathRight: {
        imageSrc: "../img/wizardpack/DeathRight.png",
        maxFrames: 7,
      },
      fallRight: {
        imageSrc: "../img/wizardpack/FallRight.png",
        maxFrames: 2,
      },
      jumpRight: {
        imageSrc: "../img/wizardpack/JumpRight.png",
        maxFrames: 2,
      },
      runRight: {
        imageSrc: "../img/wizardpack/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/wizardpack/HitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -165,
        y: 50,
      },
      offsetRight: {
        x: 45,
        y: 50,
      },
      width: 150,
      height: 50,
    },
  },
  WizardFire: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 170,
      y: 115,
    },
    imageSrc: "../img/fireWizard/IdleLeft.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    opposite: true,
    ableJump: false,
    health: 120,
    currentDirection: "Left",
    width: 50,
    height: 130,
    sprites: {
      idleLeft: {
        imageSrc: "../img/fireWizard/IdleLeft.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/fireWizard/AttackLeft.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      attack2Left: {
        imageSrc: "../img/fireWizard/AttackLeft.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      deathLeft: {
        imageSrc: "../img/fireWizard/DeathLeft.png",
        maxFrames: 5,
      },
      runLeft: {
        imageSrc: "../img/fireWizard/MoveLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/fireWizard/TakeHitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/fireWizard/IdleRight.png",
        maxFrames: 8,
      },
      attack1Right: {
        imageSrc: "../img/fireWizard/AttackRight.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      attack2Right: {
        imageSrc: "../img/fireWizard/AttackRight.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [1, 2, 3, 4, 5, 6],
      },
      deathRight: {
        imageSrc: "../img/fireWizard/DeathRight.png",
        maxFrames: 5,
      },
      runRight: {
        imageSrc: "../img/fireWizard/MoveRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/fireWizard/TakeHitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -140,
        y: 60,
      },
      offsetRight: {
        x: 45,
        y: 60,
      },
      width: 130,
      height: 50,
    },
  },
  ThunderWarrior: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 180,
      y: 145,
    },
    imageSrc: "../img/thunderWarrior/IdleLeft.png",
    frames: {
      max: 10,
      hold: 10,
    },
    width: 50,
    height: 100,
    scale: 2.5,
    currentDirection: "Left",
    numberSkills: 3,
    health: 150,
    sprites: {
      idleLeft: {
        imageSrc: "../img/thunderWarrior/IdleLeft.png",
        maxFrames: 10,
      },
      idleRight: {
        imageSrc: "../img/thunderWarrior/IdleRight.png",
        maxFrames: 10,
      },
      attack1Left: {
        imageSrc: "../img/thunderWarrior/Attack1Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack1Right: {
        imageSrc: "../img/thunderWarrior/Attack1Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [4],
      },
      attack2Left: {
        imageSrc: "../img/thunderWarrior/Attack2Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack2Right: {
        imageSrc: "../img/thunderWarrior/Attack2Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
      },
      attack3Left: {
        imageSrc: "../img/thunderWarrior/Attack3Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [4],
      },
      attack3Right: {
        imageSrc: "../img/thunderWarrior/Attack3Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [4],
      },
      fallLeft: {
        imageSrc: "../img/thunderWarrior/FallLeft.png",
        maxFrames: 3,
      },
      fallRight: {
        imageSrc: "../img/thunderWarrior/FallRight.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/thunderWarrior/JumpLeft.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/thunderWarrior/JumpRight.png",
        maxFrames: 3,
      },
      deathLeft: {
        imageSrc: "../img/thunderWarrior/DeathLeft.png",
        maxFrames: 7,
      },
      deathRight: {
        imageSrc: "../img/thunderWarrior/DeathRight.png",
        maxFrames: 7,
      },
      runLeft: {
        imageSrc: "../img/thunderWarrior/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/thunderWarrior/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/thunderWarrior/TakehitLeft.png",
        maxFrames: 3,
      },
      takeHitRight: {
        imageSrc: "../img/thunderWarrior/TakehitRight.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offsetRight: {
        x: 5,
        y: 20,
      },
      offsetLeft: {
        x: -110,
        y: 20,
      },
      width: 150,
      height: 50,
    },
  },
}
