const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};
let lastKey = "";

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "img/background.png",
});

const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imageSrc: "./img/shop.png",
  scale: 2.75,
  frames: {
    max: 6,
    hold: 10,
  },
});

const player = new Fighter({
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
  imageSrc: "./img/samuraiMack/Idle.png",
  frames: {
    max: 8,
    hold: 10,
  },
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: "./img/samuraiMack/Idle.png",
      maxFrames: 8,
    },
    attack1: {
      imageSrc: "./img/samuraiMack/Attack1.png",
      maxFrames: 6,
    },
    attack2: {
      imageSrc: "./img/samuraiMack/Attack2.png",
      maxFrames: 6,
    },
    death: {
      imageSrc: "./img/samuraiMack/Death.png",
      maxFrames: 6,
    },
    fall: {
      imageSrc: "./img/samuraiMack/Fall.png",
      maxFrames: 2,
    },
    jump: {
      imageSrc: "./img/samuraiMack/Jump.png",
      maxFrames: 2,
    },
    run: {
      imageSrc: "./img/samuraiMack/Run.png",
      maxFrames: 8,
    },
    takeHitWhite: {
      imageSrc: "./img/samuraiMack/TakeHitWhiteSilhouette.png",
      maxFrames: 4,
    },
    takeHit: {
      imageSrc: "./img/samuraiMack/TakeHitWhiteSilhouette.png",
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
});

const enemy = new Fighter({
  position: { x: 400, y: 100 },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 215,
    y: 167,
  },
  imageSrc: "./img/kenji/Idle.png",
  frames: {
    max: 4,
    hold: 10,
  },
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: "./img/kenji/Idle.png",
      maxFrames: 4,
    },
    attack1: {
      imageSrc: "./img/kenji/Attack1.png",
      maxFrames: 4,
    },
    attack2: {
      imageSrc: "./img/kenji/Attack2.png",
      maxFrames: 4,
    },
    death: {
      imageSrc: "./img/kenji/Death.png",
      maxFrames: 7,
    },
    fall: {
      imageSrc: "./img/kenji/Fall.png",
      maxFrames: 2,
    },
    jump: {
      imageSrc: "./img/kenji/Jump.png",
      maxFrames: 2,
    },
    run: {
      imageSrc: "./img/kenji/Run.png",
      maxFrames: 8,
    },
    takeHit: {
      imageSrc: "./img/kenji/TakeHit.png",
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
});

decreaseTimer();

function animation() {
  requestAnimationFrame(animation);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  background.update();
  shop.update();
  c.fillStyle = "rgba(255, 255, 255, 0.15)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // Player Movement
  if (!player.dead)
    if (keys.w.pressed && player.lastKey === "w" && player.canJump) {
      player.velocity.y = -15;
      player.canJump = false;
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.switchSprite("run");
    } else if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.switchSprite("run");
    } else {
      player.switchSprite("idle");
    }

  // jump
  if (player.velocity.y < 0) {
    player.switchSprite("jump");
  }
  // fall
  if (player.velocity.y > 0) {
    player.switchSprite("fall");
  }

  // Enemy Movement
  if (!enemy.dead)
    if (keys.ArrowUp.pressed && enemy.lastKey === "ArrowUp" && enemy.canJump) {
      enemy.velocity.y = -15;
      enemy.canJump = false;
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
      enemy.switchSprite("run");
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
      enemy.switchSprite("run");
    } else {
      enemy.switchSprite("idle");
    }

  // jump
  if (enemy.velocity.y < 0) {
    enemy.switchSprite("jump");
  }
  // fall
  if (enemy.velocity.y > 0) {
    enemy.switchSprite("fall");
  }

  // Player detect for collision
  if (
    rectangularCollision({ rectangle1: player.attackBox, rectangle2: enemy }) &&
    player.isAttacking &&
    player.frames.currentFrame === 4
  ) {
    player.isAttacking = false;
    enemy.takeHit();
    gsap.to("#enemyHealthBar", {
      width: enemy.health + "%",
    });
  }
  if (player.isAttacking && player.frames.currentFrame === 4)
    player.isAttacking = false;

  // Enemy detect for collision
  if (
    rectangularCollision({ rectangle1: enemy.attackBox, rectangle2: player }) &&
    enemy.isAttacking &&
    enemy.frames.currentFrame === 2
  ) {
    enemy.isAttacking = false;
    player.takeHit();
    gsap.to("#playerHealthBar", {
      width: player.health + "%",
    });
  }
  if (enemy.isAttacking && enemy.frames.currentFrame === 2)
    enemy.isAttacking = false;

  // End game base on health
  if (enemy.health <= 0 || player.health <= 0)
    determineWinner({ player, enemy, timerId });
}

animation();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = true;
      player.lastKey = "a";
      break;
    case "d":
      keys.d.pressed = true;
      player.lastKey = "d";
      break;
    case "w":
      keys.w.pressed = true;
      player.lastKey = "w";
      break;
    case " ":
      player.attack();
      break;

    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";
      break;
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      enemy.lastKey = "ArrowUp";
      break;
    case "ArrowDown":
      enemy.attack();
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "w":
      keys.w.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
  }
});
