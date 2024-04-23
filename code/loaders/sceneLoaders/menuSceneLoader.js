import { englishMenuScene } from "../../scenes/englishMenuScene.js";
import { chineseMenuScene } from "../../scenes/chineseMenuScene.js";

const menuSceneLoader = {
  loadEnglishScene: function(gameData) {
    englishMenuScene(gameData);
  },
  loadChineseScene: function(gameData) {
    chineseMenuScene(gameData);
  },
  displayEnglishScene: function(gameData) {
    go(gameData.sceneNames.englishIntro, gameData);
  },
  displayChineeseScene: function(gameData) {
    go(gameData.sceneNames.chineseIntro, gameData);
  }
}

export {menuSceneLoader};