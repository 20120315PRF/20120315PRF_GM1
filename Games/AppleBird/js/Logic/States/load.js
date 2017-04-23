var loadState={
    preload:function()
    {   
        this.game = game
        
        this.preloadBar = this.game.add.sprite(100, 300, 'loadBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.game.load.spritesheet('bird', Sprites.player, 60, 40, 3);
        this.game.load.image('backgroundSprite',Sprites.background);
        this.game.load.image('appleSprite',Sprites.apple);
        
        this.game.load.image('platformSprite',Sprites.platform);
        
        this.game.load.audio('snd_apple',[Audios.snd_apple]);
        
        this.game.load.audio('snd_death',[Audios.snd_death]);
        this.game.load.audio('snd_ambiental',[Audios.snd_ambiental]);
        
//        this.game.load.spritesheet('cloudsSpriteSheet',Sprites.clouds,179,50,7);
        console.log(this.game.load.atlas('cloudsSprites',Sprites.clouds_png, Sprites.clouds_json));
        
    },
    create:function()
    {
        this.preloadBar.cropEnabled = false;
        //sound_ambiental = game.add.audio('snd_ambiental',0.5);
        
        this.game.state.start('menu');
        
    }
};