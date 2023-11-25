const players = {
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
  LeafRanger: {
    position: {
      x: 0,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 325,
      y: 195,
    },
    imageSrc: "../img/LeafRanger/idleRight.png",
    frames: {
      max: 12,
      hold: 10,
    },
    width: 60,
    height: 120,
    scale: 2.5,
    numberSkills: 3,
    health: 100,
    currentDirection: "Right",
    sprites: {
      idleLeft: {
        imageSrc: "../img/LeafRanger/IdleLeft.png",
        maxFrames: 12,
      },
      idleRight: {
        imageSrc: "../img/LeafRanger/IdleRight.png",
        maxFrames: 12,
      },
      attack1Left: {
        imageSrc: "../img/LeafRanger/1_atkLeft.png",
        maxFrames: 10,
        damage: 10,
        frameGiveDamage: [5],
        attackBox: {
          offset: {
            x: -170,
            y: 35,
          },
          width: 160,
          height: 50,
        },
      },
      attack1Right: {
        imageSrc: "../img/LeafRanger/1_atkRight.png",
        maxFrames: 10,
        damage: 10,
        frameGiveDamage: [4],
        attackBox: {
          offset: {
            x: 80,
            y: 35,
          },
          width: 160,
          height: 50,
        },
      },
      attack2Left: {
        imageSrc: "../img/LeafRanger/2_atkLeft.png",
        maxFrames: 15,
        damage: 15,
        frameGiveDamage: [7],
        skill: "BowArrow",
        isShotSkill: true,
        attackBox: {
          offset: {
            x: -170,
            y: 35,
          },
          width: 0,
          height: 0,
        },
      },
      attack2Right: {
        imageSrc: "../img/LeafRanger/2_atkRight.png",
        maxFrames: 15,
        damage: 15,
        frameGiveDamage: [8],
        skill: "BowArrow",
        isShotSkill: true,
        attackBox: {
          offset: {
            x: 100,
            y: 35,
          },
          width: 0,
          height: 0,
        },
      },
      attack3Left: {
        imageSrc: "../img/LeafRanger/3_atkLeft.png",
        maxFrames: 12,
        damage: 15,
        frameGiveDamage: [0],
        skill: "ShowerArrow",
        farSkill: true,
        attackBox: {
          offset: {
            x: 100,
            y: 35,
          },
          width: 0,
          height: 0,
        },
      },
      attack3Right: {
        imageSrc: "../img/LeafRanger/3_atkRight.png",
        maxFrames: 12,
        damage: 15,
        frameGiveDamage: [11],
        skill: "ShowerArrow",
        farSkill: true,
        attackBox: {
          offset: {
            x: 100,
            y: 35,
          },
          width: 0,
          height: 0,
        },
      },
      deathLeft: {
        imageSrc: "../img/LeafRanger/DeathLeft.png",
        maxFrames: 19,
      },
      deathRight: {
        imageSrc: "../img/LeafRanger/DeathRight.png",
        maxFrames: 19,
      },
      fallLeft: {
        imageSrc: "../img/LeafRanger/jumpDownLeft.png",
        maxFrames: 3,
      },
      fallRight: {
        imageSrc: "../img/LeafRanger/jumpDownRight.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/LeafRanger/jumpUpLeft.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/LeafRanger/jumpUpRight.png",
        maxFrames: 3,
      },
      runLeft: {
        imageSrc: "../img/LeafRanger/RunLeft.png",
        maxFrames: 10,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/LeafRanger/RunRight.png",
        maxFrames: 10,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/LeafRanger/TakeHitLeft.png",
        maxFrames: 6,
      },
      takeHitRight: {
        imageSrc: "../img/LeafRanger/TakeHitRight.png",
        maxFrames: 6,
      },
    },
    attackBox: {
      offsetRight: {
        x: 80,
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
};

const characMonsters = {
  Goblin: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 160,
      y: 160,
    },
    imageSrc: "../img/Goblin/IdleLeft.png",
    frames: {
      max: 4,
      hold: 10,
    },
    constantVelocity: 2,
    scale: 2.5,
    ableJump: false,
    health: 50,
    currentDirection: "Left",
    width: 50,
    height: 90,
    numberSkills: 3,
    sprites: {
      idleLeft: {
        imageSrc: "../img/Goblin/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/Goblin/attack1Left.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [1],
        attackBox: {
          offset: {
            x: -60,
            y: 20,
          },
          width: 120,
          height: 50,
        },
      },
      attack1Right: {
        imageSrc: "../img/Goblin/attack1Right.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: -10,
            y: 20,
          },
          width: 120,
          height: 50,
        },
      },
      attack2Left: {
        imageSrc: "../img/Goblin/attack2Left.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [1],
        attackBox: {
          offset: {
            x: -110,
            y: 20,
          },
          width: 50,
          height: 70,
        },
      },
      attack2Right: {
        imageSrc: "../img/Goblin/attack2Right.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: 120,
            y: 20,
          },
          width: 50,
          height: 70,
        },
      },
      attack3Left: {
        imageSrc: "../img/Goblin/attack3Left.png",
        maxFrames: 12,
        damage: 10,
        frameGiveDamage: [1],
        isShotSkill: true,
        shotted: false,
        skill: "Bomb",
        attackBox: {
          offset: {
            x: -180,
            y: -70,
          },
          width: 100,
          height: 150,
        },
      },
      attack3Right: {
        imageSrc: "../img/Goblin/attack3Right.png",
        maxFrames: 12,
        damage: 10,
        frameGiveDamage: [10],
        isShotSkill: true,
        shotted: false,
        skill: "Bomb",
        attackBox: {
          offset: {
            x: 130,
            y: -70,
          },
          width: 100,
          height: 150,
        },
      },
      deathLeft: {
        imageSrc: "../img/Goblin/DeathLeft.png",
        maxFrames: 4,
      },
      runLeft: {
        imageSrc: "../img/Goblin/RunLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/Goblin/TakeHitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/Goblin/IdleRight.png",
        maxFrames: 4,
      },
      deathRight: {
        imageSrc: "../img/Goblin/DeathRight.png",
        maxFrames: 4,
      },
      runRight: {
        imageSrc: "../img/Goblin/RunRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/Goblin/TakeHitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -100,
        y: -50,
      },
      offsetRight: {
        x: 45,
        y: -50,
      },
      width: 0,
      height: 0,
    },
  },
  Skeleton: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 125,
      y: 100,
    },
    imageSrc: "../img/Skeleton/IdleLeft.png",
    frames: {
      max: 4,
      hold: 10,
    },
    constantVelocity: 1,
    scale: 2,
    ableJump: false,
    health: 50,
    currentDirection: "Left",
    width: 50,
    height: 100,
    numberSkills: 3,
    sprites: {
      idleLeft: {
        imageSrc: "../img/Skeleton/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/Skeleton/attack1Left.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [1],
        attackBox: {
          offset: {
            x: -90,
            y: 0,
          },
          width: 70,
          height: 70,
        },
      },
      attack1Right: {
        imageSrc: "../img/Skeleton/attack1Right.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: 70,
            y: 0,
          },
          width: 70,
          height: 70,
        },
      },
      attack2Left: {
        imageSrc: "../img/Skeleton/attack2Left.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [1],
        attackBox: {
          offset: {
            x: -100,
            y: -20,
          },
          width: 50,
          height: 100,
        },
      },
      attack2Right: {
        imageSrc: "../img/Skeleton/attack2Right.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: 100,
            y: -20,
          },
          width: 50,
          height: 100,
        },
      },
      attack3Left: {
        imageSrc: "../img/Skeleton/attack3Left.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [2],
        isShotSkill: true,
        shotted: false,
        skill: "ThrowSword",
        attackBox: {
          offset: {
            x: -180,
            y: -70,
          },
          width: 100,
          height: 150,
        },
      },
      attack3Right: {
        imageSrc: "../img/Skeleton/attack3Right.png",
        maxFrames: 6,
        damage: 10,
        frameGiveDamage: [3],
        isShotSkill: true,
        shotted: false,
        skill: "ThrowSword",
        attackBox: {
          offset: {
            x: 130,
            y: -70,
          },
          width: 100,
          height: 150,
        },
      },
      deathLeft: {
        imageSrc: "../img/Skeleton/DeathLeft.png",
        maxFrames: 4,
      },
      runLeft: {
        imageSrc: "../img/Skeleton/WalkLeft.png",
        maxFrames: 4,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/Skeleton/TakeHitLeft.png",
        maxFrames: 4,
      },
      idleRight: {
        imageSrc: "../img/Skeleton/IdleRight.png",
        maxFrames: 4,
      },
      deathRight: {
        imageSrc: "../img/Skeleton/DeathRight.png",
        maxFrames: 4,
      },
      runRight: {
        imageSrc: "../img/Skeleton/WalkRight.png",
        maxFrames: 4,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/Skeleton/TakeHitRight.png",
        maxFrames: 4,
      },
    },
    attackBox: {
      offsetLeft: {
        x: -100,
        y: -50,
      },
      offsetRight: {
        x: 45,
        y: -50,
      },
      width: 0,
      height: 0,
    },
  },
};
