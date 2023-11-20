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
        }
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
        }
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
};
