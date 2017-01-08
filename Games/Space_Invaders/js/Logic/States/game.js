
var gameState ={
    preload:function()
    {
        this.game = game;
        
        //El fondo de pantalla
        this.sky = this.game.add.tileSprite(0, 0, 750, 600, 'space');
        this.sky.inputEnabled = true;
        
        this.player = new Player(game);
        
    },
    create:function()
    { 
        this.player.create();
        
    },
    update:function()
    {
        this.sky.tilePosition.y += 2;
        this.player.update();
    },
    
};
