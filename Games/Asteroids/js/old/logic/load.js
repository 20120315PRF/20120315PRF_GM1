var loadState={
    preload:function()
    {
        game.load.image('sky','game/assets/images/sky.png');
        game.load.image('startButton','game/assets/images/startButton.png');
        game.load.image('sky2','game/assets/images/sky2.png');
        game.load.image('ground','game/assets/images/grassLongPlatform.png');
        game.load.image('sun_shiny','game/assets/images/sun_shiny.png');
        game.load.audio('snd_game', ['game/assets/audio/Ambiental.ogg']); 
        game.load.image('star','game/assets/images/star.png');
        game.load.audio('snd_star',['game/assets/audio/hit_head.ogg']);
        game.load.spritesheet('playerImage','game/assets/images/dude.png',32,48);
    },
    create:function()
    {
        game.state.start('menu');
    }
};