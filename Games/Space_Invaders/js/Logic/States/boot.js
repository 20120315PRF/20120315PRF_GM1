var bootState=
{
    
    preload:function()
    {
        this.game=game;
        this.game.load.image('loadBar',Sprites.loadBar);
        this.game.stage.disableVisibilityChange = true;
        this.game.config.forceSetTimeOut = true;
    },
    create:function()
    {
        //  This will run in Canvas mode, so let's gain a little speed and display
        this.game.renderer.clearBeforeRender = false;
        this.game.renderer.roundPixels = true;
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);  
        
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT);
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT);
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.UP);
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.DOWN);
        
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        
        
        this.game.state.start('load');
        
        
        //Con esto hacemos que la música no se pare aunque ya no estemos en el navegador. 
        //game.stage.disableVisibilityChange = true;
    }
};