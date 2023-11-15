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
    imageSrc: "../img/wizardDark/Idle.png",
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2,
    numberSkills: 2,
    health: 100,
    sprites: {
      idle: {
        imageSrc: "../img/wizardDark/Idle.png",
        maxFrames: 8,
      },
      attack1: {
        imageSrc: "../img/wizardDark/Attack1.png",
        maxFrames: 8,
        damage: 10,
        frameGiveDamage: 5
      },
      attack2: {
        imageSrc: "../img/wizardDark/Attack2.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 5
      },
      death: {
        imageSrc: "../img/wizardDark/Death.png",
        maxFrames: 7,
      },
      fall: {
        imageSrc: "../img/wizardDark/Fall.png",
        maxFrames: 2,
      },
      jump: {
        imageSrc: "../img/wizardDark/Jump.png",
        maxFrames: 2,
      },
      run: {
        imageSrc: "../img/wizardDark/Run.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/wizardDark/TakeHit.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offset: {
        x: 150,
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
    imageSrc: "../img/thunderWarrior/Idle.png",
    frames: {
      max: 10,
      hold: 10,
    },
    scale: 2.5,
    opposite: true,
    numberSkills: 3,
    health: 150,
    sprites: {
      idle: {
        imageSrc: "../img/thunderWarrior/Idle.png",
        maxFrames: 10,
      },
      attack1: {
        imageSrc: "../img/thunderWarrior/Attack1.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 4,
      },
      attack2: {
        imageSrc: "../img/thunderWarrior/Attack2.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: 3,
      },
      attack3: {
        imageSrc: "../img/thunderWarrior/Attack3.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: 4,
      },
      fall: {
        imageSrc: "../img/thunderWarrior/Fall.png",
        maxFrames: 3,
      },
      jump: {
        imageSrc: "../img/thunderWarrior/Jump.png",
        maxFrames: 3,
      },
      death: {
        imageSrc: "../img/thunderWarrior/Death.png",
        maxFrames: 7,
      },
      run: {
        imageSrc: "../img/thunderWarrior/Run.png",
        maxFrames: 8,
      },
      takeHit: {
        imageSrc: "../img/thunderWarrior/Takehit.png",
        maxFrames: 3,
      },
    },
    attackBox: {
      offset: {
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
