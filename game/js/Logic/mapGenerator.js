//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

MapGenerator = function()
{
    console.assert(MapGenerator._semaphore,"Constructor MapGenerator privado");
}

MapGenerator.init = function()
{
     if(!MapGenerator._instance)
    {
        MapGenerator._semaphore = 1;
        MapGenerator._instance = new MapGenerator();
        MapGenerator._semaphore = 0;
    }
    game.load.image('space','game/assets/images/space2.png');
    return true;
}

MapGenerator.prototype.destroy = function()
{
    MapGenerator._instance = null;
}

MapGenerator.prototype.preload = function()
{
    var sky = game.add.sprite(-70,-5,'space');
    sky.scale.setTo(1.9,1.9);
}

MapGenerator.prototype.create = function()
{
    //game.add.tileSprite(0, 0, game.width, game.height, 'space');    
}

MapGenerator.prototype.update = function()
{

}

MapGenerator.prototype.createAsteroids = function()
{
    for(var i=0;i<globalVar.startingAsteroid;++i)
    {
        var side = Math.round(rand(0,100)*0.01);
       // console.log("side: "+side);
        var x;
        var y;
        
        if(side)
        {
            x = Math.round(rand(0,100)*0.01) * game.width;
            y = rand(0,100)*0.01 * game.height;
        }
        else
        {
            x = rand(0,100)*0.01 * game.width;
            y = Math.round(rand(0,100)*0.01) * game.height;
        }

        EntityFactory.getinstance().createEntity("AsteroidLarge",new Phaser.Point(x,y));
    }
    
}

MapGenerator.getinstance = function(){return MapGenerator._instance;}