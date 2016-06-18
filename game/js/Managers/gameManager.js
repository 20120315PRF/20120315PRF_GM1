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

GameManager.prototype.preload = function()
{
    EntityFactory.getinstance().createEntity("Player",new Phaser.Point(game.width/2,game.height/2));
}
GameManager.prototype.create = function()
{
    
    EntityFactory.getinstance().createEntity("Bullet",new Phaser.Point(32,450));
    MapGenerator.getinstance().createAsteroids();
    shipDestroyed = false;
    
    shipIsVulnerable = false;
    
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
    EntityFactory.getinstance().update();
}

GameManager.prototype.nextLevel = function()
{
    game.time.events.add(Phaser.Timer.SECOND * this._timeToReset, this.nextLevel2, this);
}

GameManager.prototype.nextLevel2 = function()
{
    asteroidGroup.removeAll(true);
    Arquetipo.get("Map").set("startingAteroids",Arquetipo.get("Map").get("startingAteroids") + Arquetipo.get("Map").get("incrementAteroids"));
    MapGenerator.getinstance().createAsteroids();
}

GameManager.prototype.resetShip = function()
{
    EntityFactory.getinstance().player.entityGraphic.reset(game.width/2,game.height/2);
    EntityFactory.getinstance().player.entityGraphic.angle = -90;
    shipDestroyed = false;
    shipIsVulnerable = true;
    game.time.events.add(Phaser.Timer.SECOND * this._timeToReset, this.shipReady, this);
    game.time.events.repeat(Phaser.Timer.SECOND * 0.2, this._timeToReset*0.9 / 0.2, this.shipBlink, this);
}

GameManager.prototype.shipReady = function()
{
    shipIsVulnerable = false;
    EntityFactory.getinstance().player.entityGraphic.visible = true;
}

GameManager.prototype.shipBlink = function()
{
    EntityFactory.getinstance().player.entityGraphic.visible = !EntityFactory.getinstance().player.entityGraphic.visible;
}
GameManager.prototype.destroyShip = function()
{
    --this._shipLives;
    this.tf_lives.text = this._shipLives;
    
    if (this._shipLives) 
    {
        game.time.events.add(Phaser.Timer.SECOND * this._timeToReset*0.25, this.resetShip, this);
    }
    shipDestroyed = true;
}

Object.defineProperty(GameManager.prototype,"addScore",{
        set : function(score){this._score += score; this.tf_score.text = this._score;}
});

GameManager.getinstance = function(){return GameManager._instance;}