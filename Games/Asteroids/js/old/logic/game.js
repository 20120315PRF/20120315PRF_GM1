var gameState ={
    preload:function()
    {
        var keyR = game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.onPressR,this);
        
        //Esto, ya crea directamente la factoria de entidades
        serversManager = new ServersManager();
        serversManager.factoryEntity.createObjectsGame();
   
    },
    create:function()
    {
        serversManager.create();
    },
    update:function()
    {
        serversManager.update();
    },
    
    onPressR:function()
    {
        (game.scale.isFullScreen)? game.scale.stopFullScreen():game.scale.startFullScreen(false);
    }
};