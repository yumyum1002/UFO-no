import { mainGameScene } from "../../scenes/mainGameScene.js";
import { gameOverScene} from "../../scenes/gameOverScene.js";
const gameSceneLoader = {
  loadMainGameScene: function(gameData) {
    mainGameScene(gameData);
  },
  displayGameScene: function(gameData) {
    go(gameData.sceneNames.gameScene, gameData);
  },
  loadGameOverScene: function(gameData) {
    gameOverScene(gameData);
  },
  displayGameOverScene: function(gameData) {
    go(gameData.sceneNames.gameOverScene, gameData);
  }
}

export {gameSceneLoader};