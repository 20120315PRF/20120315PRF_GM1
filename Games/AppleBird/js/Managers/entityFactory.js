
entityFactory = function(game){
    
    //Variables del juego
    this.game = game;

    this.player = new Player(this.game);
    this.HUD = new HUD(this.game);
    
    //TODO Añadir las plataformas + manzana
}

entityFactory.prototype.create = function(){
    this.player.create();
    
    //TODO añadir las plataformas + manzanas
    this.HUD.create();
}

entityFactory.prototype.update = function(plataformas){
    this.player.update(plataformas);  
};



