var loadState={
    preload:function()
    {   
        this.game = game
        
        this.preloadBar = this.game.add.sprite(100, 300, 'loadBar');
        this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.image('bulletSprite',Sprites.bulletPlayer);
        this.game.load.image('bulletSpriteEnemy',Sprites.bulletEnemy);
        this.game.load.image('playerSprite',Sprites.player);
        
        this.game.load.image('enemy1Sprite',Sprites.enemy1);
        this.game.load.image('enemy2Sprite',Sprites.enemy2);


        this.game.load.audio('snd_star',[Audios.snd_shoot]);
        //game.load.audio('snd_ambiental',[path+'/assets/audio/space2.ogg']);
        this.game.load.audio('snd_dead',[Audios.snd_dead]);
        this.game.load.audio('snd_selectMenu',[Audios.snd_selectMenu]);
        this.game.load.image('menu-bg', Sprites.menu );
        
        this.game.load.image('heart',Sprites.heart );
        this.game.load.image('space',Sprites.space);
        this.game.load.spritesheet('explosionSprite', Sprites.explosion, 25, 25, 18);
    },
    create:function()
    {
        this.preloadBar.cropEnabled = false;
        //sound_ambiental = game.add.audio('snd_ambiental',0.5);
        
        this.game.state.start('menu');
        
    }
};