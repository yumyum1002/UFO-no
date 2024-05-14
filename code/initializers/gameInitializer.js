import kaboom from "kaboom";
import "kaboom/global";

const gameInitializer = {
  initializeKaboom: function() {
    kaboom({ background: [0, 0.1, 0]});
  },
  initializeGravity: function(gravity) {
    setGravity(gravity);
  },
  initializeMusic: function(music) {
    // initialize all music here
  },
  initializeSounds: function(sounds) {
    // initialize all sounds here
  },
  initializeScore: function(score) {
    
  },
  initializeHealth: function(healthPoints) {
    
  },
};

export {gameInitializer};

