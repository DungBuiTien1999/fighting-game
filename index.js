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
  f: {
    pressed: false,
  },
  r: {
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

const player = new Fighter(structuredClone(players.LeafRanger));
const projectiles = [];
const particles = [];
const monsters = [];
let coins = 0;
let enemyCount = 1;

function spawnEnemies(enemyAmount) {
  for (let i = 0; i < enemyAmount; i++) {
    monsters.push(
      new Monster(
        structuredClone({
          ...randomProperty(characMonsters),
          position: {
            x: Math.random() * (canvas.width - 20),
            y: 100,
          },
        })
      )
    );
  }
}
spawnEnemies(enemyCount);

const monsterProjectiles = [];
const playerFarSkills = [];

function animation() {
  const animationId = requestAnimationFrame(animation);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  background.update();
  shop.update();
  c.fillStyle = "rgba(255, 255, 255, 0.15)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (monsters.length === 0) {
    enemyCount ++;
    spawnEnemies(enemyCount);
  }

  // handle for monster behavior
  monsters.forEach((monster, idx) => {
    monster.update();
    if (monster.dead) {
      monster.velocity.x = 0;
      coins += 100;
      document.querySelector("#coins").innerHTML = coins;
      setTimeout(() => {
        monsters.splice(idx, 1);
      }, 0);
      return;
    }

    // check player hit monster
    if (
      rectangularCollision({
        rectangle1: player.attackBox,
        rectangle2: monster,
      }) &&
      player.frames.elapsed % player.frames.hold === 0 &&
      player.frameGiveDamage.includes(player.frames.currentFrame)
    ) {
      player.isAttacking = false;
      monster.takeHit(player.damage, player.currentDirection);
    }

    // monster shot
    if (
      monster.isShotSkill &&
      monster.frameGiveDamage.includes(monster.frames.currentFrame) &&
      monster.isAttacking &&
      !monster.shotted &&
      monster.skill
    ) {
      monster.shotted = true;
      monsterProjectiles.push(
        new Projectile({
          position: {
            x: monster.position.x,
            y: monster.position.y,
          },
          currentDirection: monster.currentDirection,
          ...skills[monster.skill].sprites[monster.currentDirection],
          ...skills[monster.skill],
          velocity: {
            x: skills[monster.skill].sprites[monster.currentDirection].velocity
              .x,
            y: skills[monster.skill].sprites[monster.currentDirection].velocity
              .y,
          },
          damage: monster.damage,
        })
      );
    }

    // check monster hit player
    if (
      rectangularCollision({
        rectangle1: monster.attackBox,
        rectangle2: player,
      }) &&
      monster.isAttacking &&
      monster.frameGiveDamage.includes(monster.frames.currentFrame) &&
      !monster.isShotSkill
    ) {
      monster.isAttacking = false;
      player.takeHit(monster.damage, monster.currentDirection);
      document.querySelector("#health").innerHTML = Math.floor(
        (player.health / player.maxHealth) * 100 || 0
      );
    }

    // monster attack miss
    if (
      monster.isAttacking &&
      monster.frameGiveDamage.includes(monster.frames.currentFrame)
    ) {
      monster.isAttacking = false;
    }

    // check if player collsion with attackbox of enemy
    if (
      rectangularCollision({
        rectangle1: monster.attackBox,
        rectangle2: player,
      })
    ) {
      // monster.velocity.x = 0;
      monster.attack();
      return;
    }
    // check movement of monster
    if (monster.position.x + 5 > player.position.x) {
      monster.velocity.x = -monster.constantVelocity;
      monster.currentDirection = "Left";
      monster.switchSprite("runLeft");
    } else if (monster.position.x < player.position.x + 5) {
      monster.velocity.x = monster.constantVelocity;
      monster.currentDirection = "Right";
      monster.switchSprite("runRight");
    } else {
      monster.velocity.x = 0;
      monster.switchSprite(`idle${player.currentDirection}`);
    }
  });

  // render player far skills
  playerFarSkills.forEach((playerFarSkill, idx) => {
    if (
      (playerFarSkill.currentDirection === "Right" &&
        playerFarSkill.frames.currentFrame === playerFarSkill.frames.max - 1) ||
      (playerFarSkill.currentDirection === "Left" &&
        playerFarSkill.frames.currentFrame === 0)
    ) {
      setTimeout(() => {
        playerFarSkills.splice(idx, 1);
      }, 0);
    } else {
      playerFarSkill.update();

      // playerFarSkill hit enemy
      monsters.forEach((monster) => {
        if (
          !playerFarSkill.hitted &&
          playerFarSkill.frameGiveDamage.includes(
            playerFarSkill.frames.currentFrame
          ) &&
          rectangularCollision({
            rectangle1: {
              ...playerFarSkill,
              position: {
                x: playerFarSkill.position.x - playerFarSkill.offsetDamage.x,
                y: playerFarSkill.position.y - playerFarSkill.offsetDamage.y,
              },
            },
            rectangle2: monster,
          })
        ) {
          playerFarSkill.hitted = true;
          monster.takeHit(
            playerFarSkill.damage,
            playerFarSkill.currentDirection
          );
        }
      });
    }
  });

  // render player projectiles
  projectiles.forEach((projectile, idx) => {
    if (
      projectile.position.x >= canvas.width ||
      projectile.position.x + projectile.width < 0
    ) {
      setTimeout(() => {
        projectiles.splice(idx, 1);
      }, 0);
    } else {
      projectile.update();

      // if arrow pinned to the ground
      // if (
      //   projectile.pinGround &&
      //   projectile.position.y - projectile.offsetDamage.y + projectile.height >=
      //     canvas.height + 96
      // ) {
      //   projectile.velocity.x = 0;
      //   projectile.velocity.y = 0;
      //   const effection = randomValueFromArray(projectile.effections);
      //   setTimeout(() => {
      //     projectiles.splice(idx, 1);
      //   }, 0);
      //   // add effection when projectile hit enemy
      //   if (effection)
      //     particles.push(
      //       new Sprite({
      //         position: {
      //           x:
      //             projectile.velocity.x < 0
      //               ? projectile.position.x -
      //                 projectile.offset.x -
      //                 projectile.width
      //               : projectile.position.x -
      //                 projectile.offset.x +
      //                 projectile.width,
      //           y: projectile.position.y - projectile.offset.y,
      //         },
      //         imageSrc:
      //           effections[effection].sprites[projectile.currentDirection]
      //             .imageSrc,
      //         currentDirection: projectile.currentDirection,
      //         ...effections[effection],
      //       })
      //     );
      //   return;
      // }

      // Projectile hit enemy
      monsters.forEach((monster) => {
        if (
          rectangularCollision({
            rectangle1: {
              ...projectile,
              position: {
                x: projectile.position.x - projectile.offsetDamage.x,
                y: projectile.position.y - projectile.offsetDamage.y,
              },
            },
            rectangle2: monster,
          })
        ) {
          const effection = randomValueFromArray(projectile.effections);
          setTimeout(() => {
            projectiles.splice(idx, 1);
          }, 0);
          // add effection when projectile hit enemy
          if (effection)
            particles.push(
              new Sprite({
                position: {
                  x:
                    projectile.velocity.x < 0
                      ? projectile.position.x -
                        projectile.offset.x -
                        projectile.width
                      : projectile.position.x -
                        projectile.offset.x +
                        projectile.width,
                  y: projectile.position.y - projectile.offset.y,
                },
                imageSrc:
                  effections[effection].sprites[projectile.currentDirection]
                    .imageSrc,
                currentDirection: projectile.currentDirection,
                ...effections[effection],
              })
            );
          monster.takeHit(player.damage, projectile.currentDirection);
        }
      });
    }
  });

  // render monster projectiles
  monsterProjectiles.forEach((monsterProjectile, idx) => {
    if (
      (monsterProjectile.currentDirection === "Right" &&
        monsterProjectile.frames.currentFrame ===
          monsterProjectile.frames.max - 1) ||
      (monsterProjectile.currentDirection === "Left" &&
        monsterProjectile.frames.currentFrame === 0)
    ) {
      setTimeout(() => {
        monsterProjectiles.splice(idx, 1);
      }, 0);
    } else {
      monsterProjectile.update();
      // check if monster projectile explore at player
      if (
        !monsterProjectile.hitted &&
        monsterProjectile.frameGiveDamage.includes(
          monsterProjectile.frames.currentFrame
        ) &&
        rectangularCollision({
          rectangle1: {
            ...monsterProjectile,
            position: {
              x:
                monsterProjectile.position.x - monsterProjectile.offsetDamage.x,
              y:
                monsterProjectile.position.y - monsterProjectile.offsetDamage.y,
            },
          },
          rectangle2: player,
        })
      ) {
        player.takeHit(
          monsterProjectile.damage,
          monsterProjectile.currentDirection
        );
        monsterProjectile.hitted = true;
        document.querySelector("#health").innerHTML = Math.floor(
          (player.health / player.maxHealth) * 100 || 0
        );
      }
    }
  });

  // render particle effects
  particles.forEach((particle, idx) => {
    if (
      (particle.frames.currentFrame === particle.frames.max - 1 &&
        particle.currentDirection === "Right") ||
      (particle.frames.currentFrame === 0 &&
        particle.currentDirection === "Left")
    ) {
      particles.splice(idx, 1);
    } else particle.update();
  });

  player.velocity.x = 0;

  // player shot
  if (
    player.frameGiveDamage.includes(player.frames.currentFrame) &&
    player.isAttacking &&
    player.skill
  ) {
    if (player.isShotSkill) {
      projectiles.push(
        new Projectile(
          structuredClone({
            position: {
              x: player.position.x,
              y: player.position.y,
            },
            currentDirection: player.currentDirection,
            damage: player.damage,
            ...skills[player.skill].sprites[player.currentDirection],
            ...skills[player.skill],
          })
        )
      );
    } else if (player.farSkill) {
      playerFarSkills.push(
        new Projectile(
          structuredClone({
            position: {
              x: player.position.x,
              y: player.position.y,
            },
            currentDirection: player.currentDirection,
            damage: player.damage,
            ...skills[player.skill].sprites[player.currentDirection],
            ...skills[player.skill],
          })
        )
      );
    }
  }

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
    } else if (keys.f.pressed && player.lastKey === "f") {
      player.switchSprite(`defend${player.currentDirection}`);
    } else if (keys.r.pressed && player.lastKey === "r" && player.canJump) {
      player.velocity.y = -15;
      player.canJump = false;
      player.attack(`airAttack${player.currentDirection}`);
      // player.switchSprite(`airAttack${player.currentDirection}`);
    } else {
      player.switchSprite(`idle${player.currentDirection}`);
    }

  // jump
  if (
    player.velocity.y < 0 &&
    !player.currentSpriteName.includes("airAttack")
  ) {
    player.switchSprite(`jump${player.currentDirection}`);
  }
  // fall
  if (player.velocity.y > 0) {
    player.switchSprite(`fall${player.currentDirection}`);
  }

  // attack miss
  if (
    player.isAttacking &&
    player.frameGiveDamage.includes(player.frames.currentFrame)
  )
    player.isAttacking = false;

  // End game base on health
  if (player.dead) {
    cancelAnimationFrame(animationId);
    document.querySelector("#gameover").style.display = "flex";
  }
}

animation();

addEventListener("keydown", ({ key }) => {
  if (!player.canMove) return;
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
    case "f":
      keys.f.pressed = true;
      player.lastKey = "f";
      break;
    case "r":
      keys.r.pressed = true;
      player.lastKey = "r";
      break;
    case "m":
      player.attack(`spAttack${player.currentDirection}`);
      break;
    case "s":
      player.switchSprite(`roll${player.currentDirection}`);
      break;
    case " ":
      player.attack();
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
    case "f":
      keys.f.pressed = false;
      break;
    case "r":
      keys.r.pressed = false;
      break;
  }
});
