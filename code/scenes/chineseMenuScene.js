export function chineseMenuScene() {

  scene("chineseIntro", () => {

    if (width() < 600) {
      add([
        sprite("chineseHomeMobile", { height: height(), width: width(), })
      ])
    } else {
      add([
        sprite("chinesehome", { height: height(), width: width(), })
      ])
    }

    const playButton = add([
      sprite("chinesePLAY"),
      area(),
      anchor("center"),
      scale(0.5),
      pos(width() / 2, height() / 2)
    ])

    playButton.onClick(() => {
      go("game")
    })

    const Englishflag = add([
      sprite("englishflag"),
      area(),
      pos(width() * 0.5, height() - 150),
      scale(0.5),
      anchor("top")
    ])
    Englishflag.onHover(() => {
      Englishflag.opacity = 0.3
    })
    Englishflag.onHoverEnd(() => {
      Englishflag.opacity = 1
    })
    Englishflag.onClick(() => {
      Englishflag.opacity = 1
    })

    Englishflag.onClick(() => {
      go("englishIntro")
    })

    onKeyPress("space", () => {
      go("game");
    });

  });

}