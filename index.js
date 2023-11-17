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

const player = new Fighter(characters.WizardDark);
const enemy = new Fighter(characters.ThunderWarrior);
const projectiles = [];
const particles = [];

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

  projectiles.forEach((projectile, idx) => {
    if (projectile.position.x >= canvas.width) {
      setTimeout(() => {
        projectiles.splice(idx, 1);
      }, []);
    } else projectile.update();
  });

  particles.forEach((particle, idx) => {
    if (particle.frames.currentFrame === particle.frames.max - 1) {
      particles.splice(idx, 1);
    } else particle.update();
  });

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // player shot
  if (
    player.isShotSkill &&
    player.frames.currentFrame === player.frameGiveDamage &&
    player.isAttacking
  ) {
    projectiles.push(
      new Projectile({
        position: {
          x: player.position.x,
          y: player.position.y,
        },
        offset: {
          x: -50,
          y: -50,
        },
        offsetDamage: {
          x: -100,
          y: -100,
        },
        ...skills.Fireball,
      })
    );
  }

  // Projectile hit enemy
  projectiles.forEach((projectile, idx) => {
    if (
      rectangularCollision({
        rectangle1: {
          ...projectile,
          position: {
            x: projectile.position.x - projectile.offsetDamage.x,
            y: projectile.position.y - projectile.offsetDamage.y,
          },
        },
        rectangle2: enemy,
      })
    ) {
      setTimeout(() => {
        projectiles.splice(idx, 1);
      }, []);
      particles.push(
        new Sprite({
          position: {
            x: projectile.position.x - projectile.offset.x + projectile.width,
            y: projectile.position.y - projectile.offset.y,
          },
          imageSrc: "./img/fireWorm/FireBall/Explosion.png",
          scale: 2,
          frames: {
            max: 7,
            hold: 10,
          },
        })
      );
      enemy.takeHit(player.damage);
      gsap.to("#enemyHealthBar", {
        width: (enemy.health / enemy.maxHealth) * 100 + "%",
      });
    }
  });

  // Player Movement
  if (!player.dead || player.health > 0)
    if (
      keys.w.pressed &&
      player.lastKey === "w" &&
      player.canJump &&
      player.ableJump
    ) {
      player.velocity.y = -15;
      player.canJump = false;
    } else if (keys.a.pressed && player.lastKey === "a") {
      player.velocity.x = -5;
      player.currentDirection = "Left";
      player.switchSprite("runLeft");
    } else if (keys.d.pressed && player.lastKey === "d") {
      player.velocity.x = 5;
      player.currentDirection = "Right";
      player.switchSprite("runRight");
    } else {
      player.switchSprite(`idle${player.currentDirection}`);
    }

  // jump
  if (player.velocity.y < 0) {
    player.switchSprite(`jump${player.currentDirection}`);
  }
  // fall
  if (player.velocity.y > 0) {
    player.switchSprite(`fall${player.currentDirection}`);
  }

  // Enemy Movement
  if (!enemy.dead || enemy.health > 0)
    if (
      keys.ArrowUp.pressed &&
      enemy.lastKey === "ArrowUp" &&
      enemy.canJump &&
      enemy.ableJump
    ) {
      enemy.velocity.y = -15;
      enemy.canJump = false;
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
      enemy.velocity.x = -5;
      enemy.currentDirection = "Left";
      enemy.switchSprite("runLeft");
    } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
      enemy.velocity.x = 5;
      enemy.currentDirection = "Right";
      enemy.switchSprite("runRight");
    } else {
      enemy.switchSprite(`idle${enemy.currentDirection}`);
    }

  // jump
  if (enemy.velocity.y < 0) {
    enemy.switchSprite(`jump${enemy.currentDirection}`);
  }
  // fall
  if (enemy.velocity.y > 0) {
    enemy.switchSprite(`fall${enemy.currentDirection}`);
  }

  // Player detect for collision
  if (
    rectangularCollision({ rectangle1: player.attackBox, rectangle2: enemy }) &&
    player.isAttacking &&
    player.frames.currentFrame === player.frameGiveDamage
  ) {
    player.isAttacking = false;
    enemy.takeHit(player.damage);
    gsap.to("#enemyHealthBar", {
      width: (enemy.health / enemy.maxHealth) * 100 + "%",
    });
  }
  // attack miss
  if (
    player.isAttacking &&
    player.frames.currentFrame === player.frameGiveDamage
  )
    player.isAttacking = false;

  // Enemy detect for collision
  if (
    rectangularCollision({ rectangle1: enemy.attackBox, rectangle2: player }) &&
    enemy.isAttacking &&
    enemy.frames.currentFrame === enemy.frameGiveDamage
  ) {
    enemy.isAttacking = false;
    player.takeHit(enemy.damage);
    gsap.to("#playerHealthBar", {
      width: (player.health / player.maxHealth) * 100 + "%",
    });
  }
  // attack miss
  if (enemy.isAttacking && enemy.frames.currentFrame === enemy.frameGiveDamage)
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
