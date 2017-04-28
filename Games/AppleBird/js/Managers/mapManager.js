
MapManager = function(game, entityFactory){
    
    //Variables del juego
    this.game = game;
}

MapManager.prototype.create = function(){
    cloud1 = this.game.add.sprite(450,100,'cloudsSprites','cloud1');
    cloud2 = this.game.add.sprite(450,500,'cloudsSprites','cloud2');
    cloud3 = this.game.add.sprite(50,300,'cloudsSprites','cloud3');
    cloud4 = this.game.add.sprite(50,-100,'cloudsSprites','cloud4');
    cloud5 = this.game.add.sprite(450,-300,'cloudsSprites','cloud5');
    cloud6 = this.game.add.sprite(50,-500,'cloudsSprites','cloud6');
    
    this.clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6];
    
    this.platforms_kill = 0;
    
    for (i = 0; i < this.clouds.length; i++) { 
        this.clouds[i].scale.setTo(1.5,1.5);
    };
    
    this.plataformas1 = game.add.group();
    this.plataformas1.enableBody = true;
    this.plataformas1.physicsBodyType = Phaser.Physics.ARCADE;
    this.plataformas1.createMultiple(30,'platform1Sprite');

    this.generarPlataforma(350);
    this.generarPlataforma(125);
    this.generarPlataforma(-100);
    this.generarPlataforma(-325);

}

MapManager.prototype.update = function(){
    for (i = 0; i < this.clouds.length; i++) { 
        this.clouds[i].position.y += 5;
        
        if (this.clouds[i].position.y > 700)
        {
            this.clouds[i].position.y = -500
        }
    }; 

    var kill = 0;
    this.plataformas1.forEachAlive(function(plataforma){
        if (plataforma.position.y > 700)
        {
            kill = 1;
            plataforma.kill();       
        }
    });
    if (kill)
    {
        this.generarPlataforma(-180);
        this.platforms_kill = 0;
    }
};


MapManager.prototype.generarPlataforma = function(posY){
    pos = rand(0,Plataformas.length);
    
    positionX=Plataformas[pos].slice();
    
    len = positionX.length;
    for (i=0;i<len;++i)
    {
        var platform1 = this.plataformas1.getFirstExists(false);
        if (platform1)
        {
            rnd = rand(0,positionX.length)
            platform1.reset(positionX[rnd],posY);
            platform1.body.immovable = true;
            platform1.scale.setTo(1,0.75);
            platform1.body.velocity.y = 100;
            positionX.splice(rnd, 1);
        }
    }
}

MapManager.prototype.getPlataformas = function()
{
    return this.plataformas1
}