const players = {
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
        imageSrc: "../img/LeafRanger/idleLeft.png",
        maxFrames: 12,
      },
      idleRight: {
        imageSrc: "../img/LeafRanger/idleRight.png",
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
      airAttackLeft: {
        imageSrc: "../img/LeafRanger/airAtkLeft.png",
        maxFrames: 10,
        damage: 15,
        frameGiveDamage: [4],
        skill: "DiagonalArrow",
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
      airAttackRight: {
        imageSrc: "../img/LeafRanger/airAtkRight.png",
        maxFrames: 10,
        damage: 15,
        frameGiveDamage: [5],
        skill: "DiagonalArrow",
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
      spAttackLeft: {
        imageSrc: "../img/LeafRanger/specialAtkLeft.png",
        maxFrames: 17,
        damage: 25,
        frameGiveDamage: [7],
        attackBox: {
          offset: {
            x: -320,
            y: 40,
          },
          width: 345,
          height: 40,
        },
      },
      spAttackRight: {
        imageSrc: "../img/LeafRanger/specialAtkRight.png",
        maxFrames: 17,
        damage: 25,
        frameGiveDamage: [9],
        attackBox: {
          offset: {
            x: 50,
            y: 40,
          },
          width: 345,
          height: 40,
        },
      },
      deathLeft: {
        imageSrc: "../img/LeafRanger/deathLeft.png",
        maxFrames: 19,
      },
      deathRight: {
        imageSrc: "../img/LeafRanger/deathRight.png",
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
        imageSrc: "../img/LeafRanger/runLeft.png",
        maxFrames: 10,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/LeafRanger/runRight.png",
        maxFrames: 10,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/LeafRanger/takeHitLeft.png",
        maxFrames: 6,
      },
      takeHitRight: {
        imageSrc: "../img/LeafRanger/takeHitRight.png",
        maxFrames: 6,
      },
      defendLeft: {
        imageSrc: "../img/LeafRanger/defendLeft.png",
        maxFrames: 19,
        ableDefendFrames: [6, 7, 8, 9, 10, 11],
      },
      defendRight: {
        imageSrc: "../img/LeafRanger/defendRight.png",
        maxFrames: 19,
        ableDefendFrames: [7, 8, 9, 10, 11, 12],
      },
      rollLeft: {
        imageSrc: "../img/LeafRanger/rollLeft.png",
        maxFrames: 8,
        stepMove: 50,
        moveFrames: [3, 4, 5, 6],
      },
      rollRight: {
        imageSrc: "../img/LeafRanger/rollRight.png",
        maxFrames: 8,
        stepMove: 50,
        moveFrames: [1, 2, 3, 4],
      },
    },
  },
  CrystalMauler: {
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
    imageSrc: "../img/CrystalMauler/idleRight.png",
    frames: {
      max: 8,
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
        imageSrc: "../img/CrystalMauler/idleLeft.png",
        maxFrames: 8,
      },
      idleRight: {
        imageSrc: "../img/CrystalMauler/idleRight.png",
        maxFrames: 8,
      },
      attack1Left: {
        imageSrc: "../img/CrystalMauler/1_atkLeft.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
        attackBox: {
          offset: {
            x: -60,
            y: 35,
          },
          width: 150,
          height: 80,
        },
      },
      attack1Right: {
        imageSrc: "../img/CrystalMauler/1_atkRight.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
        attackBox: {
          offset: {
            x: -20,
            y: 35,
          },
          width: 150,
          height: 80,
        },
      },
      attack2Left: {
        imageSrc: "../img/CrystalMauler/2_atkLeft.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
        attackBox: {
          offset: {
            x: -40,
            y: 0,
          },
          width: 80,
          height: 100,
        },
      },
      attack2Right: {
        imageSrc: "../img/CrystalMauler/2_atkRight.png",
        maxFrames: 7,
        damage: 10,
        frameGiveDamage: [3],
        attackBox: {
          offset: {
            x: 30,
            y: 0,
          },
          width: 80,
          height: 100,
        },
      },
      attack3Left: {
        imageSrc: "../img/CrystalMauler/3_atkLeft.png",
        maxFrames: 17,
        damage: 15,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: -290,
            y: -20,
          },
          width: 170,
          height: 135,
        },
      },
      attack3Right: {
        imageSrc: "../img/CrystalMauler/3_atkRight.png",
        maxFrames: 17,
        damage: 15,
        frameGiveDamage: [10],
        attackBox: {
          offset: {
            x: 195,
            y: -20,
          },
          width: 170,
          height: 135,
        },
      },
      airAttackLeft: {
        imageSrc: "../img/CrystalMauler/airAtkLeft.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [4],
        attackBox: {
          offset: {
            x: -70,
            y: 0,
          },
          width: 80,
          height: 120,
        },
      },
      airAttackRight: {
        imageSrc: "../img/CrystalMauler/airAtkRight.png",
        maxFrames: 8,
        damage: 15,
        frameGiveDamage: [3],
        attackBox: {
          offset: {
            x: 60,
            y: 0,
          },
          width: 80,
          height: 120,
        },
      },
      spAttackLeft: {
        imageSrc: "../img/CrystalMauler/sp_atkLeft.png",
        maxFrames: 15,
        damage: 25,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: -290,
            y: -40,
          },
          width: 250,
          height: 150,
        },
      },
      spAttackRight: {
        imageSrc: "../img/CrystalMauler/sp_atkRight.png",
        maxFrames: 15,
        damage: 25,
        frameGiveDamage: [8],
        attackBox: {
          offset: {
            x: 120,
            y: -40,
          },
          width: 250,
          height: 150,
        },
      },
      deathLeft: {
        imageSrc: "../img/CrystalMauler/deathLeft.png",
        maxFrames: 15,
      },
      deathRight: {
        imageSrc: "../img/CrystalMauler/deathRight.png",
        maxFrames: 15,
      },
      fallLeft: {
        imageSrc: "../img/CrystalMauler/fallLeft.png",
        maxFrames: 3,
      },
      fallRight: {
        imageSrc: "../img/CrystalMauler/fallRight.png",
        maxFrames: 3,
      },
      jumpLeft: {
        imageSrc: "../img/CrystalMauler/jumpLeft.png",
        maxFrames: 3,
      },
      jumpRight: {
        imageSrc: "../img/CrystalMauler/jumpRight.png",
        maxFrames: 3,
      },
      runLeft: {
        imageSrc: "../img/CrystalMauler/runLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      runRight: {
        imageSrc: "../img/CrystalMauler/runRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/CrystalMauler/take_hitLeft.png",
        maxFrames: 6,
      },
      takeHitRight: {
        imageSrc: "../img/CrystalMauler/take_hitRight.png",
        maxFrames: 6,
      },
      defendLeft: {
        imageSrc: "../img/CrystalMauler/defendLeft.png",
        maxFrames: 9,
        ableDefendFrames: [3, 4, 5, 6, 7, 8],
      },
      defendRight: {
        imageSrc: "../img/CrystalMauler/defendRight.png",
        maxFrames: 9,
        ableDefendFrames: [0, 1, 2, 3, 4, 5],
      },
      rollLeft: {
        imageSrc: "../img/CrystalMauler/rollLeft.png",
        maxFrames: 8,
        stepMove: 40,
        moveFrames: [3, 4, 5, 6, 7],
      },
      rollRight: {
        imageSrc: "../img/CrystalMauler/rollRight.png",
        maxFrames: 8,
        stepMove: 40,
        moveFrames: [0, 1, 2, 3, 4],
      },
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
    health: 30,
    currentDirection: "Left",
    width: 50,
    height: 90,
    numberSkills: 3,
    offsetHealthBar: {
      Left: 20,
      Right: 0,
    },
    sprites: {
      idleLeft: {
        imageSrc: "../img/Goblin/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/Goblin/Attack1Left.png",
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
        imageSrc: "../img/Goblin/Attack1Right.png",
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
        imageSrc: "../img/Goblin/Attack2Left.png",
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
        imageSrc: "../img/Goblin/Attack2Right.png",
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
        imageSrc: "../img/Goblin/Attack3Left.png",
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
        imageSrc: "../img/Goblin/Attack3Right.png",
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
    percentDefense: 0.25,
    constantVelocity: 1,
    scale: 2,
    ableJump: false,
    health: 25,
    currentDirection: "Left",
    width: 50,
    height: 100,
    numberSkills: 3,
    offsetHealthBar: {
      Left: 30,
      Right: -10,
    },
    sprites: {
      idleLeft: {
        imageSrc: "../img/Skeleton/IdleLeft.png",
        maxFrames: 4,
      },
      attack1Left: {
        imageSrc: "../img/Skeleton/Attack1Left.png",
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
        imageSrc: "../img/Skeleton/Attack1Right.png",
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
        imageSrc: "../img/Skeleton/Attack2Left.png",
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
        imageSrc: "../img/Skeleton/Attack2Right.png",
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
        imageSrc: "../img/Skeleton/Attack3Left.png",
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
        imageSrc: "../img/Skeleton/Attack3Right.png",
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
      defendLeft: {
        imageSrc: "../img/Skeleton/ShieldLeft.png",
        maxFrames: 4,
        ableDefendFrames: [1, 2, 3, 4],
      },
      defendRight: {
        imageSrc: "../img/Skeleton/ShieldRight.png",
        maxFrames: 4,
        ableDefendFrames: [1, 2, 3, 4],
      },
    },
  },
  FlyingEye: {
    position: { x: 400, y: 100 },
    velocity: {
      x: 0,
      y: 0,
    },
    offset: {
      x: 105,
      y: 130,
    },
    imageSrc: "../img/FlyingEye/FlightLeft.png",
    frames: {
      max: 8,
      hold: 10,
    },
    percentDefense: 0,
    constantVelocity: 2,
    scale: 2,
    ableJump: false,
    health: 20,
    currentDirection: "Left",
    width: 80,
    height: 50,
    numberSkills: 2,
    ground: 150,
    offsetHealthBar: {
      Left: 0,
      Right: -10,
    },
    sprites: {
      attack1Left: {
        imageSrc: "../img/FlyingEye/AttackLeft.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [1],
        attackBox: {
          offset: {
            x: 20,
            y: 0,
          },
          width: 80,
          height: 50,
        },
      },
      attack1Right: {
        imageSrc: "../img/FlyingEye/AttackRight.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [6],
        attackBox: {
          offset: {
            x: -20,
            y: 0,
          },
          width: 80,
          height: 50,
        },
      },
      attack2Left: {
        imageSrc: "../img/FlyingEye/Attack2Left.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [2],
        attackBox: {
          offset: {
            x: 10,
            y: 0,
          },
          width: 80,
          height: 50,
        },
      },
      attack2Right: {
        imageSrc: "../img/FlyingEye/Attack2Right.png",
        maxFrames: 8,
        damage: 5,
        frameGiveDamage: [5],
        attackBox: {
          offset: {
            x: -10,
            y: 0,
          },
          width: 80,
          height: 50,
        },
      },
      // attack3Left: {
      //   imageSrc: "../img/FlyingEye/Attack3Left.png",
      //   maxFrames: 6,
      //   damage: 10,
      //   frameGiveDamage: [2],
      //   isShotSkill: true,
      //   shotted: false,
      //   skill: "ThrowSword",
      //   attackBox: {
      //     offset: {
      //       x: -180,
      //       y: -70,
      //     },
      //     width: 100,
      //     height: 150,
      //   },
      // },
      // attack3Right: {
      //   imageSrc: "../img/FlyingEye/attack3Right.png",
      //   maxFrames: 6,
      //   damage: 10,
      //   frameGiveDamage: [3],
      //   isShotSkill: true,
      //   shotted: false,
      //   skill: "ThrowSword",
      //   attackBox: {
      //     offset: {
      //       x: 130,
      //       y: -70,
      //     },
      //     width: 100,
      //     height: 150,
      //   },
      // },
      deathLeft: {
        imageSrc: "../img/FlyingEye/DeathLeft.png",
        maxFrames: 4,
      },
      runLeft: {
        imageSrc: "../img/FlyingEye/FlightLeft.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitLeft: {
        imageSrc: "../img/FlyingEye/TakeHitLeft.png",
        maxFrames: 4,
      },
      deathRight: {
        imageSrc: "../img/FlyingEye/DeathRight.png",
        maxFrames: 4,
      },
      runRight: {
        imageSrc: "../img/FlyingEye/FlightRight.png",
        maxFrames: 8,
        shouldCheckDirection: true,
      },
      takeHitRight: {
        imageSrc: "../img/FlyingEye/TakeHitRight.png",
        maxFrames: 4,
      },
    },
  },
};
