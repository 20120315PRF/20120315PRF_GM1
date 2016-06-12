//Define las reglas del juego, cuando se pierde, y el que lleva la puntuación del juego. 
//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

var fontAssets = {
    counterFontStyle:{font: '20px Arial', fill: '#FFFFFF', align: 'center'},
};

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
    shipDestroyed = false;
    
    this._shipLives = getAttributeEntity("shipLives","Player");
    this._timeToReset = getAttributeEntity("timeToReset","Player");
    
    this.tf_lives = game.add.text(20, 10, this._shipLives, fontAssets.counterFontStyle);
    
    this._score = 0;
    this.tf_score = game.add.text(game.width - 30, 10, this._score, fontAssets.counterFontStyle);
    this.tf_score.align = 'right';
    this.tf_score.anchor.set(1, 0);
}

GameManager.prototype.update = function()
{

}

GameManager.prototype.resetShip = function()
{
    EntityFactory.getinstance().player.entityGraphic.reset(game.width/2,game.height/2);
    EntityFactory.getinstance().player.entityGraphic.angle = -90;
    shipDestroyed = false;
}
GameManager.prototype.destroyShip = function()
{
    --this._shipLives;
    this.tf_lives.text = this._shipLives;
    
    if (this._shipLives) 
    {
        game.time.events.add(Phaser.Timer.SECOND * this._timeToReset, this.resetShip, this);
    }
    shipDestroyed = true;
}

Object.defineProperty(GameManager.prototype,"addScore",{
        set : function(score){this._score += score; this.tf_score.text = this._score;}
});

GameManager.getinstance = function(){return GameManager._instance;}