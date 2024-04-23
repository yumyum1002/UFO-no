export function mainGameScene(gameData) {
  
  // HINT!! Uh oh! This mainGameScene is a string constant! How should we change it?
  scene("mainGameScene", (gameData) => {

    //console.log(JSON.stringify(gameData, null, 2));

    
    const player = add([
      sprite("shipcorrect"),
      scale(1.5),
      pos(80, height() * 0.75),
      area(),
      body(),
      health(3),
    ]);
    
    const endMusic = play("end music")
    endMusic.paused = true;

    const music = play("background song 2", {
      loop: true
    })

    player.on('death', () => { play("end music") })
    volume: 1.5

    player.on('death', () => { music.paused = true })

    const game = add([
      timer(),
    ])

    // const background = add([
    //   sprite('spaceBackground', {width: width(), height: height()}),
    // ])

    const rocketNoise = play("rocket noise", {
      volume: 0.01,
      loop: true
    })
    rocketNoise.paused = true
    rocketNoise.speed = 1.2

    const heartCounter = [] //store the hearts so we can delete all of them each time

    function drawLives(lives) {
      //delete all hearts and redraw them
      for (let i = 0; i < heartCounter.length; i++) {
        destroy(heartCounter[i])
      }
      for (let life = 1; life < lives + 1; life++) {
        const heartCount = add([
          sprite("heartCounter"),
          pos(life * 64, 0),
          scale(0.05),
        ])
        heartCounter.push(heartCount) //adds the heart to the list
      }
    }
    drawLives(3)

    player.on("hurt", () => {
      drawLives(player.hp())
    })
    player.on("heal", () => {
      drawLives(player.hp())
    })

    player.onCollide("pipe", (pipe) => {
      player.hurt(1)
      destroy(pipe)
      play("hurt")
    })

    player.onCollide("heart", (heart) => {
      debug.log("HEAL")
      player.heal(1)
      destroy(heart)
    })

    // triggers when hp reaches 0
    player.on("death", () => {
      rocketNoise.paused = true
      destroy(player)
      play("die sound")
      wait(3, go("gameover", gameData))
      go("gameover", gameData);
    })

    let radius = 50
    const shootButton = add([
      pos(width() - radius * 2, height() - radius * 2),
      circle(radius),
      color(255, 0, 0),
      area()
    ])


    shootButton.onClick((event) => {
      spawnBullet(player.pos)
    })

    let curTween = null
    onKeyPress("p", () => {
      game.paused = !game.paused
      if (curTween) curTween.cancel()
      curTween = tween(
        pauseMenu.pos,
        game.paused ? center() : center().add(0, 700),
        1,
        (p) => pauseMenu.pos = p,
        easings.easeOutElastic,
      )
      if (game.paused) {
        pauseMenu.hidden = false
        pauseMenu.paused = false
      } else {
        curTween.onEnd(() => {
          pauseMenu.hidden = true
          pauseMenu.paused = true
        })
      }
    })

    const pauseMenu = add([
      rect(300, 400),
      color(255, 255, 255),
      outline(4),
      anchor("center"),
      pos(center().add(0, 700)),
    ])
    pauseMenu.hidden = true
    pauseMenu.paused = true

    onKeyRelease("space", () => {
      rocketNoise.paused = true
    })
    onKeyDown("space", () => {
      player.jump(400);
    });
    onKeyPress("space", () => {
      rocketNoise.paused = false
    })
    onMousePress(() => {
      rocketNoise.paused = false;
    });
    onMouseRelease(() => {
      rocketNoise.paused = true;
    })
    onMouseDown((event) => {
      console.log(event)
      player.jump(500);
    })

    const BULLET_SPEED = 1500;

    onKeyPress("s", () => {
      spawnBullet(player.pos);
    });

    function spawnBullet(bulletpos) {

      bulletpos = bulletpos.add(10, 10);

      const bullet = add([
        rect(6, 2),
        pos(bulletpos),
        color(255, 255, 255),
        area(),
        "bullet",
        {
          bulletSpeed: BULLET_SPEED
        }
      ]);

      //added this so that the collideEnd is attached to the specific bullet const
      bullet.onCollideEnd("pipe", (pipe) => {
        console.log("collide")
        destroy(bullet);
        destroy(pipe);
        gameData.data.score += 1
        scoreText.text = gameData.data.score
        play("crash")
        const explosion = add([
          sprite("fire", { anim: "fire" }),
          scale(1.5),
          pos(pipe.pos),
          'explosion'

        ]);
        explosion.animSpeed = 5
        onUpdate('explosion', () => { explosion.move(-500, 0) })
      });

      play("laser", {
        volume: 0.3,
        detune: rand(-1200, 1200),

      });
    };

    onUpdate("bullet", (b) => {
      b.move(b.bulletSpeed, 0);
      if ((b.pos.x < 0) || (b.pos.x > width())) {
        destroy(b);
      }
    });

    onUpdate("pipe", (pipe) => {
      // spaceBackground.animSpeed = gameData.data.score * 0.5
      var stuff = -650 - gameData.data.score * 150
      pipe.move(stuff, 100);

      var currentAngle = pipe.angle
      pipe.angle = currentAngle + -5

      if (pipe.passed === false && pipe.pos.x < player.pos.x) {
        pipe.passed = true;
          gameData.data.score += 1;
        scoreText.text = gameData.data.score;
        if (gameData.data.score == 100) {
          spawnBossPedit()
        } else if (gameData.data.score == 1000) {
          spawnAstroidBad()
        }
      }
    });

    onUpdate("heart", (heart) => {
      heart.move(-650, 50);
      var currentAngle = heart.angle
      heart.angle = currentAngle + -5
    });

    speed = 2

    loop(1, () => {
      producePipes();
    })

    function producePipes() {
      add([
        sprite("pipe"),
        pos(width(), rand(height() * 0.6)),
        rotate(rand(360)),
        "pipe",
        area(scale, 0, 3),
        { passed: false },
        anchor('center')
      ]);
    }

    loop(20.6, () => {
      produceHearts();
    })

    function produceHearts() {
      add([
        sprite("heart"),
        pos(width(), rand(height())),
        rotate(rand(360)),
        "heart",
        scale(0.05),
        area()
      ]);
    }

    // todo.. add scene code here
    player.onUpdate(() => {
      if (player.pos.y > height() + 30 || player.pos.y < -30) {
        rocketNoise.paused = true
        music.paused = true
        play("end music")
        go("gameover", gameData);

      }
    });
    speed = 1.5
    let score = 0
    const scoreText = add([
      text(score, { size: 50 })

    ]);
  });

}