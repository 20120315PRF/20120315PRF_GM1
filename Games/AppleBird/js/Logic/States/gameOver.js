var gameOverState = {

    preload:function()
    {
        this.game = game;
    },
    create:function()
    {
        //sound_ambiental.mute = 1;
        
        this.game.add.tileSprite(0, 0, 750, 600, 'backgroundSprite');
        
        this.gameOverText = this.game.add.text(this.game.world.width *0.5 , this.game.world.height *0.5, 'SCORE: ' + 0/*this.score*/ +' \nGAME OVER\nPress SPACE to restart',{ font: '22px Lucida Console', fill: '#fff', align: 'center'});
        this.gameOverText.fixedToCamera = true;

        //Add time to list of webpage
        //addTime(this.score);
        
    },
    startGame:function()
    {
        //sound_ambiental.mute = 0;
        this.game.state.start('play');
    },
    update:function()
    {
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            this.startGame();
        }        
    },   
};
