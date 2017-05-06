var bootState=
{
    preload:function()
    {
        game.load.image('loadBar',path+'/assets/images/loadBar.png');
        //game.stage.disableVisibilityChange = true;
    },
    create:function()
    {
        //  This will run in Canvas mode, so let's gain a little speed and display
        game.renderer.clearBeforeRender = false;
        game.renderer.roundPixels = true;
        
        game.physics.startSystem(Phaser.Physics.ARCADE);  
        
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT);
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT);
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.UP);
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.DOWN);
        
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        
        
        game.state.start('load');
        
        
        //Con esto hacemos que la música no se pare aunque ya no estemos en el navegador. 
        //game.stage.disableVisibilityChange = true;
    }
};