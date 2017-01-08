//Define las reglas del juego, cuando se pierde, y el que lleva la puntuación del juego. 
//Factoria de entidades. Se encarga de crear las entidades. Otro singleton
var Managers = Managers || [];

Managers.GameManager = function()
{
    console.assert(Managers.GameManager._semaphore,"Constructor GameManager privado");
};

Managers.GameManager.init = function()
{
     if(!Managers.GameManager._instance)
    {
        Managers.GameManager._semaphore = 1;
        Managers.GameManager._instance = new Managers.GameManager();
        Managers.GameManager._semaphore = 0;
    }
    
    return true;
};

Managers.GameManager.prototype = 
{
    destroy:function()
    {
        Managers.GameManager._instance = null;
    },
    
    preload:function()
    {
        Logic.EntityFactory.getinstance().createEntity("Player",new Phaser.Point(game.width*0.5,game.height*0.5));
    },
    
    create:function()
    {
        globalVar.shipDestroyed = false;
        globalVar.shipIsVulnerable = false;

        this._shipLives = getAttributeEntity("shipLives","Player");
        this._timeToReset = getAttributeEntity("timeToReset","Player");

        game.add.sprite(20,10,"heart");
        this.tf_lives = game.add.text(53, 10, this._shipLives, globalVar.fontStyle);

        globalVar.score = 0;
        this.tf_score = game.add.text(game.width*0.5, 10, globalVar.score, {font: '25px Arial', fill: '#FFFFFF', align: 'center'});

        Logic.EntityFactory.getinstance().createEntity("Bullet",new Phaser.Point(32,450));
        
        //TODO 1. Aqui instanciaremos a los enemigos
    },
    
    update:function()
    {
        Logic.EntityFactory.getinstance().update();

        //Esto es para cambiar el cursor cuando se sale de la pestaña del juego
        if( game.canvas.style.cursor == 'inherit')
        {
            game.canvas.style.cursor = 'url(Games/Space_Invaders/assets/images/cursor.png),auto';
            console.log("Cambio de cursor");
        }
    },

    resetShip:function()
    {  
        globalVar.player.entityGraphic.reset(game.width*0.5,game.height*0.5);
        globalVar.player.entityGraphic.angle = -90;

        globalVar.shipDestroyed = false;
        globalVar.shipIsVulnerable = true;

        game.time.events.add(Phaser.Timer.SECOND * this._timeToReset, this.shipReady, this);
        game.time.events.repeat(Phaser.Timer.SECOND * 0.2, this._timeToReset*0.9/0.2, this.shipBlink, this);
    },
    
    shipReady:function()
    {
        globalVar.shipIsVulnerable = false;
        globalVar.player.entityGraphic.visible = true;
    },
    
    shipBlink:function()
    {
        globalVar.player.entityGraphic.visible = !globalVar.player.entityGraphic.visible;
    },
    
    destroyShip:function()
    {
        --this._shipLives;
        this.tf_lives.text = this._shipLives;

        if (this._shipLives) 
        {
            game.time.events.add(Phaser.Timer.SECOND * this._timeToReset*0.25, this.resetShip, this);
        }
        else{
            globalVar.shipDestroyed = true;

            game.state.start('over');
        }
        globalVar.shipDestroyed = true;
    },
    
    resetEnemies:function()
    {
        
    },
    createEnemies:function()
    {
        //-- TODO 1 -- Crear los enemigos en filas y columnas

        Logic.EntityFactory.getinstance().createEntity("EnemyShip",new Phaser.Point(x,y));
    },
    
    incrementalDificulty:function()
    {      
        
    },
};

Object.defineProperty(Managers.GameManager.prototype,"addScore",{
        set : function(score){globalVar.score += score; this.tf_score.text = globalVar.score;}
});

Managers.GameManager.getinstance = function(){return Managers.GameManager._instance;};