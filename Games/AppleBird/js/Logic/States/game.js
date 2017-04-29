
var gameState ={
    preload:function()
    {
        this.game = game;
        
        //El fondo de pantalla
        this.sky = this.game.add.tileSprite(0, 0, 900, 550, 'backgroundSprite');
        this.sky.inputEnabled = true;
        
        //Creamos las entidades
        this.entityFactory = new entityFactory(this.game);
        Managers = new ManagersClass(this.game,this.entityFactory);
        
        
    },
    create:function()
    { 
        Configuracion.Game.velocityDescendingCurrent = Configuracion.Game.velocityDescendingInitial;
        this.entityFactory.create();
        Managers.create();  
    },
    update:function()
    {
        this.sky.tilePosition.y += 1.5;
        this.entityFactory.update(Managers.getMapMgr().getPlataformas(),Managers.getMapMgr().getApples());
        Managers.update();
        
    },
    
};
