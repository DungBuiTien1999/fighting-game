const skills = {
  Fireball: {
    sprites: {
      Right: {
        imageSrc: "../img/fireWorm/FireBall/MoveRight.png",
        velocity: {
          x: 10,
          y: 0,
        },
        offset: {
          x: -40,
          y: 30,
        },
        offsetDamage: {
          x: -90,
          y: -15,
        },
      },
      Left: {
        imageSrc: "../img/fireWorm/FireBall/MoveLeft.png",
        velocity: {
          x: -10,
          y: 0,
        },
        offset: {
          x: 85,
          y: 30,
        },
        offsetDamage: {
          x: 45,
          y: -15,
        },
      },
    },
    frames: {
      max: 6,
      hold: 10,
    },
    scale: 2.5,
    width: 25,
    height: 25,
  },
  Bomb: {
    sprites: {
      Right: {
        imageSrc: "../img/Goblin/BombRight.png",
        frameGiveDamage: [12],
        velocity: {
          x: 5,
          y: -5,
        },
        offset: {
          x: 20,
          y: 75,
        },
        offsetDamage: {
          x: -65,
          y: 0,
        },
      },
      Left: {
        imageSrc: "../img/Goblin/BombLeft.png",
        frameGiveDamage: [6],
        velocity: {
          x: -5,
          y: -5,
        },
        offset: {
          x: 120,
          y: 75,
        },
        offsetDamage: {
          x: 45,
          y: 0,
        },
      },
    },
    frames: {
      max: 19,
      hold: 10,
    },
    scale: 2,
    width: 40,
    height: 40,
    isGravity: true,
  },
  BowArrow: {
    sprites: {
      Right: {
        imageSrc: "../img/Projectiles/Arrow/arrowRight.png",
        velocity: {
          x: 20,
          y: 0,
        },
        offset: {
          x: 120,
          y: 89,
        },
        offsetDamage: {
          x: -160,
          y: -35,
        },
      },
      Left: {
        imageSrc: "../img/Projectiles/Arrow/arrowLeft.png",
        frameGiveDamage: [6],
        velocity: {
          x: -20,
          y: 0,
        },
        offset: {
          x: 280,
          y: 89,
        },
        offsetDamage: {
          x: 55,
          y: -35,
        },
      },
    },
    frames: {
      max: 1,
      hold: 10,
    },
    scale: 2,
    width: 7,
    height: 5,
    effections: ["arrowHitEntangle", "arrowHitPoison"],
  },
  ShowerArrow: {
    sprites: {
      Right: {
        imageSrc: "../img/Projectiles/Arrow/arrow_shower_effectRight.png",
        frameGiveDamage: [3],
        velocity: {
          x: 0,
          y: 0,
        },
        offset: {
          x: 0,
          y: 130,
        },
        offsetDamage: {
          x: -200,
          y: 120,
        },
      },
      Left: {
        imageSrc: "../img/Projectiles/Arrow/arrow_shower_effectLeft.png",
        frameGiveDamage: [14],
        velocity: {
          x: 0,
          y: 0,
        },
        offset: {
          x: 450,
          y: 130,
        },
        offsetDamage: {
          x: 260,
          y: 120,
        },
      },
    },
    frames: {
      max: 18,
      hold: 10,
    },
    scale: 2,
    width: 120,
    height: 240,
    effections: ["arrowHitEntangle", "arrowHitPoison"],
  },
  ThrowSword: {
    sprites: {
      Right: {
        imageSrc: "../img/Skeleton/Sword_spriteRight.png",
        frameGiveDamage: [0, 1, 2],
        velocity: {
          x: 5,
          y: 0,
        },
        offset: {
          x: 20,
          y: 75,
        },
        offsetDamage: {
          x: -65,
          y: 0,
        },
      },
      Left: {
        imageSrc: "../img/Skeleton/Sword_spriteLeft.png",
        frameGiveDamage: [5, 6, 7],
        velocity: {
          x: -5,
          y: 0,
        },
        offset: {
          x: 120,
          y: 75,
        },
        offsetDamage: {
          x: 45,
          y: 0,
        },
      },
    },
    frames: {
      max: 8,
      hold: 10,
    },
    scale: 2,
    width: 40,
    height: 40,
  },
};
