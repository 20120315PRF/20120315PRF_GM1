var loadState={
    preload:function()
    {
        this.preloadBar = this.game.add.sprite(100, 300, 'loadBar');
        this.load.setPreloadSprite(this.preloadBar);
        
        game.load.image(getAttributeEntity("nombreSprite","Bullet"), getAttributeEntity("sprite","Bullet"));
        game.load.image(getAttributeEntity("nombreSprite","Player"), getAttributeEntity("sprite","Player"));
        game.load.image(getAttributeEntity("nombreSprite","AsteroidSmall"), getAttributeEntity("sprite","AsteroidSmall"));
        game.load.image(getAttributeEntity("nombreSprite","AsteroidMedium"), getAttributeEntity("sprite","AsteroidMedium"));
        game.load.image(getAttributeEntity("nombreSprite","AsteroidLarge"), getAttributeEntity("sprite","AsteroidLarge"));

        game.load.audio('snd_star',['game/assets/audio/shoot.wav']);
        game.load.audio('snd_ambiental',['game/assets/audio/space2.ogg']);
        game.load.audio('snd_dead',['game/assets/audio/dead.wav']);
        game.load.audio('snd_selectMenu',['game/assets/audio/menu.wav']);
    
        game.load.spritesheet('explosionSmall', 'game/assets/images/explode.png', 25, 25, 18);
        
        game.load.image('startButton','game/assets/images/startButton.png');
        game.load.image('menu-bg','game/assets/images/menu.jpg' );
        
        game.load.image('cursor','game/assets/images/cursor.png' );
        
        game.load.image('smokeAsteroids','game/assets/images/Smoke10.png' );
    },
    create:function()
    {
        this.preloadBar.cropEnabled = false;
        sound_ambiental = game.add.audio('snd_ambiental',0.5);
        
        game.state.start('menu');
        
    }
};