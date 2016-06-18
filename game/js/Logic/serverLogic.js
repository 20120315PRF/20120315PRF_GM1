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
    
    if(!Logic.EntityFactory.init() || !Logic.MapGenerator.init() || !Managers.GameManager.init())
        window.pause();
    
    
    return true;
}

Server.Logic.prototype = 
{
    destroy:function()
    {
        Server.Logic._instance = null;
    
        Logic.MapGenerator.getinstance().destroy();

        Logic.EntityFactory.getinstance().destroy();

        Managers.GameManager.getinstance().destroy();
    },
    
    preload:function()
    {
        Logic.MapGenerator.getinstance().preload();

        Logic.EntityFactory.getinstance().preload();

        Managers.GameManager.getinstance().preload();
    },
    
    create:function()
    {
        Logic.MapGenerator.getinstance().create();
    
        Logic.EntityFactory.getinstance().create();

        Managers.GameManager.getinstance().create();
    },
    
    update:function()
    {
        Managers.GameManager.getinstance().update();
    },   
};

Server.Logic.getinstance = function()
{
    return Server.Logic._instance;
}