
const assetLoader = {

  loadSprites: function() {
    loadSprite("space intro", "sprites/Background_space.png");
    loadSprite("glitch", "sprites/glitch.jpg");
    loadSprite("chineseflag", "sprites/chineseflag.png");
    loadSprite("heart", "https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png");
    loadSprite("heartCounter", "https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png");
    loadSprite("englishflag", "sprites/englishflag.png");
    loadSprite("ufo no", "sprites/ufo no.png");
    loadSprite("gameover", "sprites/gameover.png");
    loadSprite("englishhome", "sprites/englishhome.png");
    loadSprite("englishHomeMobile", "sprites/englishHomeMobile.png");
    loadSprite("chinesehome", "sprites/chinesehome.png");
    loadSprite("chineseHomeMobile", "sprites/chineseHomeMobile.png");
    loadSprite("space", "sprites/Background_space.png");
    loadSprite("pipe", "sprites/pipe3.png");
    loadSprite("explode", "sprites/shipcorrect.png");
    loadSprite("RETRY", "sprites/RETRY.png");
    loadSprite("PLAY", "sprites/PLAY.png");
    loadSprite("chinesePLAY", "sprites/Vector.png");
    loadSprite("home icon", "sprites/home icon.png");
    loadSprite("Group 17", "sprites/Group 17.png");
  },

  loadAseprites: function() {
    // Load all asperites
    //loadAseprite("spaceBackground", "sprites/background.png", "sprites/background.json");
    loadAseprite("kirby", "sprites/kirby ufo cut out.png", "sprites/kirby ufo cut out.json");
  },

  loadSounds: function() {
    // Load all sounds
    loadSound("laser", "sounds/blaster-2-81267-[AudioTrimmer.com].mp3");
    loadSound("wooosh", "sounds/space.mp3");
    loadSound("punch", "sounds/punch.mp3");
    loadSound("die sound", "sounds/die sound.mp3");
    loadSound("crash", "sounds/blaster-2-81267-[AudioTrimmer.com].mp3");
    loadSound("hurt", "sounds/Minecraft Damage Oof Sound Effect (mp3cut.net).mp3");
    loadSound("rocket noise", "sounds/rocket noise.wav");
    loadSound("background song 2", "sounds/background song 2.wav");
    loadSound("end music", "sounds/end music.wav");
  },

  loadPedits: function() {
    // Load all pedits
    loadPedit("heart alien", "sprites/spritesheet ufo life.pedit");
    loadPedit("shipcorrect", "sprites/spritesheet ufo.pedit");
    loadPedit("fire", "sprites/Explosion.pedit");
    loadPedit("boss pedit", "sprites/boss pedit.pedit");
    loadPedit("astroid bad", "sprites/astroid bad.pedit.pedit");
    loadPedit("alien", "sprites/spritesheet ufo.pedit");
    loadPedit("alienhurt", "sprites/spritesheet ufo copy.pedit");
  },
};

export { assetLoader };
