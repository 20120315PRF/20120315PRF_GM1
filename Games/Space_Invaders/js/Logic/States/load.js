var loadState={
    preload:function()
    {
        this.preloadBar = this.game.add.sprite(100, 300, 'loadBar');
        this.load.setPreloadSprite(this.preloadBar);
        
        game.load.image('bulletSprite',path+'/assets/images/bullets.png');
        game.load.image('playerSprite',path+'/assets/images/ship4.png');


        game.load.audio('snd_star',[path+'/assets/audio/shoot.wav']);
        //game.load.audio('snd_ambiental',[path+'/assets/audio/space2.ogg']);
        game.load.audio('snd_dead',[path+'/assets/audio/dead.wav']);
        game.load.audio('snd_selectMenu',[path+'/assets/audio/menu.wav']);
        game.load.image('startButton',path+'/assets/images/startButton.png');
        game.load.image('menu-bg',path+'/assets/images/menu.jpg' );
        
        game.load.image('heart',path+'/assets/images/heart.png' );
        
        game.load.spritesheet('explosionSprite', path+'/assets/images/explode.png', 25, 25, 18);
    },
    create:function()
    {
        this.preloadBar.cropEnabled = false;
        //sound_ambiental = game.add.audio('snd_ambiental',0.5);
        
        game.state.start('menu');
        
    }
};