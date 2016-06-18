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

GameManager.prototype.destroy = function()
{
    GameManager._instance = null;

}

GameManager.prototype.preload = function()
{
    EntityFactory.getinstance().createEntity("Player",new Phaser.Point(game.width*0.5,game.height*0.5));
}
GameManager.prototype.create = function()
{
    globalVar.shipDestroyed = false;
    globalVar.shipIsVulnerable = false;
    
    this._shipLives = getAttributeEntity("shipLives","Player");
    this._timeToReset = getAttributeEntity("timeToReset","Player");
    
    this.tf_lives = game.add.text(20, 10, this._shipLives, globalVar.fontStyle);
    
    globalVar.score = 0;
    this.tf_score = game.add.text(game.width - 30, 10, globalVar.score, globalVar.fontStyle);
    this.tf_score.align = 'right';
    this.tf_score.anchor.set(1, 0);
    
    EntityFactory.getinstance().createEntity("Bullet",new Phaser.Point(32,450));
    MapGenerator.getinstance().createAsteroids();
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
    globalVar.asteroidGroup.removeAll(true);
    globalVar.startingAsteroid += Arquetipo.get("Map").get("incrementAteroids");
    MapGenerator.getinstance().createAsteroids();
}

GameManager.prototype.resetShip = function()
{
    globalVar.player.entityGraphic.reset(game.width*0.5,game.height*0.5);
    globalVar.player.entityGraphic.angle = -90;
    
    globalVar.shipDestroyed = false;
    globalVar.shipIsVulnerable = true;
    
    game.time.events.add(Phaser.Timer.SECOND * this._timeToReset, this.shipReady, this);
    game.time.events.repeat(Phaser.Timer.SECOND * 0.2, this._timeToReset*0.9/0.2, this.shipBlink, this);
}

GameManager.prototype.shipReady = function()
{
    globalVar.shipIsVulnerable = false;
    globalVar.player.entityGraphic.visible = true;
}

GameManager.prototype.shipBlink = function()
{
    globalVar.player.entityGraphic.visible = !globalVar.player.entityGraphic.visible;
}
GameManager.prototype.destroyShip = function()
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
    
}

Object.defineProperty(GameManager.prototype,"addScore",{
        set : function(score){globalVar.score += score; this.tf_score.text = globalVar.score;}
});

GameManager.getinstance = function(){return GameManager._instance;}