var gameOverState = {

    preload:function()
    {

    },
    create:function()
    {
        //sound_ambiental.mute = 1;
        
        var sky = game.add.sprite(-70,-5,'space');
        sky.scale.setTo(1.9,1.9);
        
        if(globalVar.training)
        {
            this.gameOverText = game.add.text(game.world.width *0.5 , game.world.height *0.5, 'SCORE: ' + globalVar.score +' \nGAME OVER\nPress SPACE to restart',{ font: '22px Lucida Console', fill: '#fff', align: 'center'});
            this.gameOverText.fixedToCamera = true;
        }
        //Add time to list of webpage
        addTime(globalVar.score);
        
    },
    startGame:function()
    {
        Server.Logic.getinstance().destroy();
        
        //sound_ambiental.mute = 0;
        game.state.start('play');
    },
    update:function()
    {
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && globalVar.training)
        {
            this.startGame();
        }        
    },   
};
