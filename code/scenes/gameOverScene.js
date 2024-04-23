export function gameOverScene(gameData) {
  scene("gameover", (gameData) => {

    if (gameData.data.score > gameData.data.highScore) {
      gameData.data.highScore = gameData.data.score;
      replit.setData("highscore", gameData.data.score)
    }
    onKeyPress("e", () => go("englishIntro"))

    add([
      sprite("gameover", { height: height(), width: width() })
    ])

    add([
      text(
        "score: " + gameData.data.score
        + "\nglobal high score: " + gameData.data.highScore,
        { size: 50, font: "sans-serif" }),
      color(15, 215, 238),
      width(width()),
      pos(10, 10)
    ]);

    const retryButton = add([
      sprite("RETRY"),
      area(),
      anchor("center"),
      scale(0.5),
      pos(width() / 2, height() / 2)
    ])

    retryButton.onClick(() => {
      gameData.data.score = 0;
      go("mainGameScene", gameData);
    });

    const homeIcon = add([
      sprite("home icon"),
      area(),
      anchor("botleft"),
      scale(0.15),
      pos(0, height())
    ])

    onKeyPress('space', () =>
      go("mainGameScene", gameData),
    );

    homeIcon.onClick(() => {
      go("englishIntro", gameData);
    });
    homeIcon.onHover(() => {
      homeIcon.opacity = 0.3
      // debug.log('hover on')
    })
    homeIcon.onHoverEnd(() => {
      homeIcon.opacity = 1
      //debug.log('hover off')
    })
  });

}