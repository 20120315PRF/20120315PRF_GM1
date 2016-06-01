var bootState=
{
    create:function()
    {
        game.physics.startSystem(Phaser.Physics.ARCADE);  
        
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
        
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        game.state.start('load');
    }
};