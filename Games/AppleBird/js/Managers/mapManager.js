
MapManager = function(game, entityFactory){
    
    //Variables del juego
    this.game = game;
}

MapManager.prototype.create = function(){
    this.plataformas1 = this.game.add.group();
    this.plataformas1.enableBody = true;
    this.plataformas1.physicsBodyType = Phaser.Physics.ARCADE;
    this.plataformas1.createMultiple(30,'platform1Sprite');

    this.apples = this.game.add.group();
    this.apples.enableBody = true;
    this.apples.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.apples.createMultiple(7, 'appleSprite');
    
    
    this.generarPlataforma(250,2);
    this.generarPlataforma(0,1);
    this.generarPlataforma(-250,4);

}

MapManager.prototype.update = function(){
    var kill = 0;
    this.plataformas1.forEachAlive(function(plataforma){
        plataforma.body.velocity.y = Configuracion.Game.velocityDescendingCurrent;
        if (plataforma.position.y > 625)
        {
            kill = 1;
            plataforma.kill();       
        }
    });
    
    this.apples.forEachAlive(function(apple){
        apple.body.velocity.y = Configuracion.Game.velocityDescendingCurrent;
        if (apple.position.y > 625)
        {
            kill = 1;
            apple.kill();       
        }
    });
    
    if (kill)
    {
        this.generarPlataforma(-120);
    }
}


MapManager.prototype.generarPlataforma = function(posY,rand_b=undefined){
    var pos = rand_b || rand(0,Plataformas.length);

    var len = Plataformas[pos].length;
    for (i=0;i<len;++i)
    {
        var platform1 = this.plataformas1.getFirstExists(false);
        
        if (platform1)
        {
            platform1.reset(Plataformas[pos][i],posY);
            platform1.body.immovable = true;
            platform1.scale.setTo(1,0.75);
        }
    }
    
    var apple = this.apples.getFirstExists(false);
    if (apple)
    {
        var posApple = Manzanas[pos][0];
        if (Manzanas[pos].length == 2)
        {
            posApple = Manzanas[pos][rand(0,2)];
        }
        apple.reset(posApple,posY);
        apple.anchor.set(0.5);
    }
}

MapManager.prototype.getPlataformas = function()
{
    return this.plataformas1;
}


MapManager.prototype.getApples = function()
{
    return this.apples;
};