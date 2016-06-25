//Factoria de entidades. Se encarga de crear las entidades. Otro singleton
var Logic = Logic || [];
Logic.MapGenerator = function()
{
    console.assert(Logic.MapGenerator._semaphore,"Constructor MapGenerator privado");
}

Logic.MapGenerator.init = function()
{
     if(!Logic.MapGenerator._instance)
    {
        Logic.MapGenerator._semaphore = 1;
        Logic.MapGenerator._instance = new Logic.MapGenerator();
        Logic.MapGenerator._semaphore = 0;
    }
    game.load.image('space','game/assets/images/space2.png');
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
        var sky = game.add.sprite(-70,-5,'space');
        sky.scale.setTo(1.9,1.9);
        
        sky.inputEnabled = true;
        
        sky.events.onInputOver.add(function(){
            game.canvas.style.cursor = 'url(game/assets/images/cursor.png),auto'

        }, this);
    },
    
    create:function()
    {
        
    },
    
    update:function()
    {
        
    },
    
    createAsteroids:function()
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
            Logic.EntityFactory.getinstance().createEntity("AsteroidLarge",new Phaser.Point(x,y));
        }
    }
};

Logic.MapGenerator.getinstance = function(){return Logic.MapGenerator._instance;}