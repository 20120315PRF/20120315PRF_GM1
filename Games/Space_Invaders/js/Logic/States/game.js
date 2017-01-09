
var gameState ={
    preload:function()
    {
        this.game = game;

        //El fondo de pantalla
        this.sky = this.game.add.tileSprite(0, 0, 750, 600, 'space');
        this.sky.inputEnabled = true;
        
        //Creamos las entidades
        gameMgr = new GameManager(this.game);
    },
    create:function()
    { 
        gameMgr.create();
    },
    update:function()
    {
        gameMgr.update();
    },
    
};
