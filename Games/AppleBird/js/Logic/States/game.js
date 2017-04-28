
var gameState ={
    preload:function()
    {
        this.game = game;
        
        //El fondo de pantalla
        this.sky = this.game.add.tileSprite(0, 0, 750, 600, 'backgroundSprite');
        this.sky.inputEnabled = true;
        
        //Creamos las entidades
        this.entityFactory = new entityFactory(this.game);
        Managers = new ManagersClass(this.game, this.entityFactory);
    },
    create:function()
    { 
        Managers.create();
        this.entityFactory.create();
        
        
    },
    update:function()
    {
        this.sky.tilePosition.y += 1.5;
        Managers.update();
        this.entityFactory.update(Managers.getMapMgr().getPlataformas());
    },
    
};
