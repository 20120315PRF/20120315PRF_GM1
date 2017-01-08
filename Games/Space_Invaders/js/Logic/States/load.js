var loadState={
    preload:function()
    {   
        this.game = game
        
        this.preloadBar = this.game.add.sprite(100, 300, 'loadBar');
        this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.image('bulletSprite',path+'/assets/images/bullets.png');
        this.game.load.image('playerSprite',path+'/assets/images/ship4.png');


        this.game.load.audio('snd_star',[path+'/assets/audio/shoot.wav']);
        //game.load.audio('snd_ambiental',[path+'/assets/audio/space2.ogg']);
        this.game.load.audio('snd_dead',[path+'/assets/audio/dead.wav']);
        this.game.load.audio('snd_selectMenu',[path+'/assets/audio/menu.wav']);
        this.game.load.image('startButton',path+'/assets/images/startButton.png');
        this.game.load.image('menu-bg',path+'/assets/images/menu.jpg' );
        
        this.game.load.image('heart',path+'/assets/images/heart.png' );
        
        this.game.load.spritesheet('explosionSprite', path+'/assets/images/explode.png', 25, 25, 18);
    },
    create:function()
    {
        this.preloadBar.cropEnabled = false;
        //sound_ambiental = game.add.audio('snd_ambiental',0.5);
        
        this.game.state.start('menu');
        
    }
};