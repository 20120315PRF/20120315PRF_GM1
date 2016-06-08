//Define las reglas del juego, cuando se pierde, y el que lleva la puntuación del juego. 
//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

GameManager = function()
{
    console.assert(GameManager._semaphore,"Constructor GameManager privado");
}

GameManager.init = function()
{
     if(!GameManager._instance)
    {
        GameManager._semaphore = 1;
        GameManager._instance = new GameManager();
        GameManager._semaphore = 0;
    }
    return true;
}

GameManager.prototype.create = function()
{
    EntityFactory.getinstance().createEntity("Player",new Phaser.Point(game.width/2,game.height/2));
    EntityFactory.getinstance().createEntity("Bullet",new Phaser.Point(32,450));
    MapGenerator.getinstance().createAsteroids();
}

GameManager.prototype.update = function()
{

}

GameManager.prototype.createAsteroids = function()
{

    
}

GameManager.getinstance = function(){return GameManager._instance;}