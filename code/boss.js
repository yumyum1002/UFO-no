import kaboom from "kaboom"
import "kaboom/global"




export function spawnBossPedit() {

  const bossPedit = add([
    sprite("boss pedit", { anim: "boss anim", animSpeed: 30 }),
    scale(10),
    area(),
    pos(width() - 100, 300),
    anchor('center'),
    health(2)
  ]);




  //bullet shoot code here



  let maxLeft = width() * 0.6
  let position = pos(rand(maxLeft, width()), rand(0, height()))
  let bossSpeed = 200

  bossPedit.onUpdate(() => {
    bossPedit.moveTo(position.pos, bossSpeed)
    if (bossPedit.pos.x == position.pos.x && bossPedit.pos.y == position.pos.y) {
      position = pos(rand(maxLeft, width()), rand(0, height()))
    }
  })

  const levelAlert = add([
    text(
      "Boss Alert!\n",
      { size: 75, font: "sans-serif" }),
    color(15, 215, 238),
    pos(10, 10),
    width(width()),
  ]);
}

export function spawnAstroidBad() {

const astroidBad = add([
  sprite("astroid bad", { anim: "bad astroid", animSpeed: 30 }),
  scale(10),
  area(),
  pos(width() - 100, 300),
  anchor('center'),
  health(2)
]);

}
  