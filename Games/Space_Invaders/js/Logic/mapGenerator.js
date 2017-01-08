//Factoria de entidades. Se encarga de crear las entidades. Otro singleton
var Logic = Logic || [];
Logic.MapGenerator = function()
{
    console.assert(Logic.MapGenerator._semaphore,"Constructor MapGenerator privado");
};

Logic.MapGenerator.init = function()
{
     if(!Logic.MapGenerator._instance)
    {
        Logic.MapGenerator._semaphore = 1;
        Logic.MapGenerator._instance = new Logic.MapGenerator();
        Logic.MapGenerator._semaphore = 0;
    }
    
    game.load.image('space',path+'/assets/images/space.png');
    return true;
}

Logic.MapGenerator.prototype = 
{
    destroy:function()
    {
        Logic.MapGenerator._instance = null;
    },
    
    preload:function()
    {
        sky = game.add.tileSprite(0, 0, 800, 600, 'space');

        sky.inputEnabled = true;
    },
    
    create:function()
    {
        
    },
    
    update:function()
    {
        sky.tilePosition.y += 2;
    },
};

Logic.MapGenerator.getinstance = function(){return Logic.MapGenerator._instance;};