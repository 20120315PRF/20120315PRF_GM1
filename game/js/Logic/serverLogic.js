var Server = Server || {};

//Constructor
Server.Logic = function()
{
   console.assert(Server.Logic._semaphore,"Constructor ServerLogic privado");   
};

//Método estático, al no meterlo en su prototipo
Server.Logic.init = function()
{
    if(!Server.Logic._instance)
    {
        Server.Logic._semaphore = 1;
        Server.Logic._instance = new Server.Logic();
        Server.Logic._semaphore = 0;
    }
    
    if(!EntityFactory.init() || !MapGenerator.init() || !GameManager.init())
        window.pause();
    
    
    return true;
}

Server.Logic.prototype.create = function()
{
    MapGenerator.getinstance().create();
    
    EntityFactory.getinstance().create();
    
    GameManager.getinstance().create();
}

//Método de objeto
Server.Logic.prototype.update = function()
{
    EntityFactory.getinstance().update();
}


Server.Logic.getinstance = function(){return Server.Logic._instance;}
