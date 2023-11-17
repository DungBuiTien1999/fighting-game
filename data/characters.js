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
    imageSrc: "../img/samuraiMack/Idle.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    health: 100,
    sprites: {
      idle: {
        imageSrc: "../img/samuraiMack/Idle.png",
        maxFrames: 8,
      },
      attack1: {
        imageSrc: "../img/samuraiMack/Attack1.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: 4,
      },
      attack2: {
        imageSrc: "../img/samuraiMack/Attack2.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: 4,
      },
      death: {
        imageSrc: "../img/samuraiMack/Death.png",
        maxFrames: 6,
      },
      fall: {
        imageSrc: "../img/samuraiMack/Fall.png",
        maxFrames: 2,
      },
      jump: {
        imageSrc: "../img/samuraiMack/Jump.png",
        maxFrames: 2,
      },
      run: {
        imageSrc: "../img/samuraiMack/Run.png",
        maxFrames: 8,
      },
      takeHitWhite: {
        imageSrc: "../img/samuraiMack/TakeHitWhiteSilhouette.png",
        maxFrames: 4,
      },
      takeHit: {
        imageSrc: "../img/samuraiMack/TakeHitWhiteSilhouette.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offset: {
        x: 100,
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
    imageSrc: "../img/kenji/Idle.png",
    frames: {
      max: 4,
      hold: 10,
    },
    scale: 2.5,
    opposite: true,
    health: 100,
    sprites: {
      idle: {
        imageSrc: "../img/kenji/Idle.png",
        maxFrames: 4,
      },
      attack1: {
        imageSrc: "../img/kenji/Attack1.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: 2,
      },
      attack2: {
        imageSrc: "../img/kenji/Attack2.png",
        maxFrames: 4,
        damage: 10,
        frameGiveDamage: 2,
      },
      death: {
        imageSrc: "../img/kenji/Death.png",
        maxFrames: 7,
      },
      fall: {
        imageSrc: "../img/kenji/Fall.png",
        maxFrames: 2,
      },
      jump: {
        imageSrc: "../img/kenji/Jump.png",
        maxFrames: 2,
      },
      run: {
        imageSrc: "../img/kenji/Run.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/kenji/TakeHit.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offset: {
        x: -170,
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
      x: 100,
      y: 50,
    },
    imageSrc: "../img/taczen/Idle.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    numberSkills: 3,
    health: 150,
    sprites: {
      idle: {
        imageSrc: "../img/taczen/Idle.png",
        maxFrames: 10,
      },
      attack1: {
        imageSrc: "../img/taczen/Attack1.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 4,
      },
      attack2: {
        imageSrc: "../img/taczen/Attack2.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: 3,
      },
      attack3: {
        imageSrc: "../img/taczen/Attack3.png",
        maxFrames: 9,
        damage: 15,
        frameGiveDamage: 6,
      },
      death: {
        imageSrc: "../img/taczen/Death.png",
        maxFrames: 11,
      },
      fall: {
        imageSrc: "../img/taczen/GoingDown.png",
        maxFrames: 3,
      },
      jump: {
        imageSrc: "../img/taczen/GoingUp.png",
        maxFrames: 3,
      },
      run: {
        imageSrc: "../img/taczen/Run.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/taczen/TakeHit.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offset: {
        x: 100,
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
      x: 215,
      y: 95,
    },
    imageSrc: "../img/wizardpack/Idle.png",
    frames: {
      max: 6,
      hold: 10,
    },
    scale: 1.75,
    opposite: true,
    health: 100,
    sprites: {
      idle: {
        imageSrc: "../img/wizardpack/Idle.png",
        maxFrames: 6,
      },
      attack1: {
        imageSrc: "../img/wizardpack/Attack1.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 6,
      },
      attack2: {
        imageSrc: "../img/wizardpack/Attack2.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 5,
      },
      death: {
        imageSrc: "../img/wizardpack/Death.png",
        maxFrames: 7,
      },
      fall: {
        imageSrc: "../img/wizardpack/Fall.png",
        maxFrames: 2,
      },
      jump: {
        imageSrc: "../img/wizardpack/Jump.png",
        maxFrames: 2,
      },
      run: {
        imageSrc: "../img/wizardpack/Run.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/wizardpack/Hit.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offset: {
        x: -270,
        y: 50,
      },
      width: 170,
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
      x: 215,
      y: 95,
    },
    imageSrc: "../img/fireWizard/Idle.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2.5,
    opposite: true,
    ableJump: false,
    health: 120,
    sprites: {
      idle: {
        imageSrc: "../img/fireWizard/Idle.png",
        maxFrames: 8,
      },
      attack1: {
        imageSrc: "../img/fireWizard/Attack.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 2,
      },
      attack2: {
        imageSrc: "../img/fireWizard/Attack.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 2,
      },
      death: {
        imageSrc: "../img/fireWizard/Death.png",
        maxFrames: 5,
      },
      run: {
        imageSrc: "../img/fireWizard/Move.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/fireWizard/TakeHit.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offset: {
        x: -270,
        y: 50,
      },
      width: 170,
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
        frameGiveDamage: 5,
      },
      attack1Right: {
        imageSrc: "../img/wizardDark/Attack1Right.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: 5,
      },
      attack2Left: {
        imageSrc: "../img/wizardDark/Attack2Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 5,
      },
      attack2Right: {
        imageSrc: "../img/wizardDark/Attack2Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 5,
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
    opposite: true,
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
        frameGiveDamage: 4,
      },
      attack1Right: {
        imageSrc: "../img/thunderWarrior/Attack1Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 4,
      },
      attack2Left: {
        imageSrc: "../img/thunderWarrior/Attack2Left.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 3,
      },
      attack2Right: {
        imageSrc: "../img/thunderWarrior/Attack2Right.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 3,
      },
      attack3Left: {
        imageSrc: "../img/thunderWarrior/Attack3Left.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 4,
      },
      attack3Right: {
        imageSrc: "../img/thunderWarrior/Attack3Right.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 4,
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
      x: 50,
      y: -30,
    },
    imageSrc: "../img/fireWorm/Worm/Idle.png",
    frames: {
      max: 9,
      hold: 10,
    },
    scale: 2,
    numberSkills: 2,
    health: 100,
    ableJump: false,
    canShot: true,
    sprites: {
      idle: {
        imageSrc: "../img/fireWorm/Worm/Idle.png",
        maxFrames: 9,
      },
      attack1: {
        imageSrc: "../img/fireWorm/Worm/Attack.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: 11,
        isShotSkill: true,
      },
      attack2: {
        imageSrc: "../img/fireWorm/Worm/Attack.png",
        maxFrames: 16,
        damage: 25,
        frameGiveDamage: 11,
        isShotSkill: true,
      },
      death: {
        imageSrc: "../img/fireWorm/Worm/Death.png",
        maxFrames: 8,
      },
      run: {
        imageSrc: "../img/fireWorm/Worm/Walk.png",
        maxFrames: 9,
      },
      takeHit: {
        imageSrc: "../img/fireWorm/Worm/TakeHit.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offset: {
        x: 0,
        y: 0,
      },
      width: 0,
      height: 0,
    },
  },
};
