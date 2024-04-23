export function englishMenuScene(gameData) {

  // HINT!! Uh oh! This englishIntro is a string constant! How should we change it?
  scene("englishIntro", (gameData) => {

    if (width() < 600) {
      home = add([
        sprite("englishHomeMobile", { height: height(), width: width(), }),
        area()
      ])
    } else {
      home = add([
        sprite("englishhome", { height: height(), width: width(), }),
        area()
      ])
    }
    const playButton = add([
      sprite("PLAY"),
      area(),
      anchor("center"),
      scale(0.2),
      pos(width() / 2, height() / 2)
    ])

    playButton.onClick(() => {
      // HINT!! Uh oh! This mainGameScene is a string constant! How should we change it?
      go("mainGameScene", gameData)
    })


    const flag = add([
      sprite("chineseflag"),
      area(),
      pos(width() * 0.5, height() - 150),
      scale(0.5),
      anchor("top")
    ])
    flag.onHover(() => {
      flag.opacity = 0.3
    })
    flag.onHoverEnd(() => {
      flag.opacity = 1
    })


    flag.onClick(() => {
      // HINT!! Uh oh! This chineseIntro is a string constant! How should we change it?
      go("chineseIntro")
    })

    onKeyPress("space", () => {
      // HINT!! Uh oh! This mainGameScene is a string constant! How should we change it?
      go("mainGameScene", gameData);
    });
  });

}