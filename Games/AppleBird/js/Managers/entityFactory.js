
entityFactory = function(game){
    
    //Variables del juego
    this.game = game;

    this.player = new Player(this.game);
    this.HUD = new HUD(this.game);
    this.clouds = new Clouds(this.game);
}

entityFactory.prototype.create = function(){
    this.clouds.create();
    this.player.create();
    this.HUD.create();
}

entityFactory.prototype.update = function(plataformas,apples){
    this.clouds.update();
    this.player.update(plataformas,apples);   
};



