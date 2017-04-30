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
    game.load.image('space',path+'/assets/images/space30.png');
    game.load.image('Saturno',path+'/assets/images/Saturno.png');
    game.load.image('planeta1',path+'/assets/images/planeta1.png');
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
        var sky = game.add.sprite(0,0,'space');
        game.add.sprite(120,50,'Saturno');
        game.add.sprite(690,2,'planeta1');
        //sky.scale.setTo(1.9,1.9);
        
        sky.inputEnabled = true;
        
//        sky.events.onInputOver.add(function(){
//            game.canvas.style.cursor = 'url(Games/Asteroids/assets/images/cursor.png),auto'
//
//        }, this);
    },
    
    create:function()
    {
        
    },
    
    update:function()
    {
        
    },
};

Logic.MapGenerator.getinstance = function(){return Logic.MapGenerator._instance;};