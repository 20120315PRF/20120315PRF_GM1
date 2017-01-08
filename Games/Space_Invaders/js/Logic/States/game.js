
var gameState ={
    preload:function()
    {
        this.game = game;

        //El fondo de pantalla
        this.sky = this.game.add.tileSprite(0, 0, 750, 600, 'space');
        this.sky.inputEnabled = true;
        
        //Creamos las entidades
        this.player = new Player(this.game);
        this.HUD = new HUD(this.game);
        this.bulletPlayer = new bulletPlayer(this.game,this.HUD);
        this.enemiesDummy = new enemyDummy(this.game);
    },
    create:function()
    { 
        this.player.create();
        this.bulletPlayer.create();
        this.enemiesDummy.create();
        this.HUD.create();
    },
    update:function()
    {
        this.sky.tilePosition.y += 2;
        
        this.player.update(this.bulletPlayer);
        
        this.enemiesDummy.update();
        
        this.bulletPlayer.update(this.enemiesDummy);
    },
    
};
