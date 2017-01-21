
GameManager = function(game, entityFactory){
    
    //Variables del juego
    this.game = game;
    this.EntityFactory = entityFactory;
    
    this.score = 0;
    this.lives = Configuracion.Player.lives;
    
    shipDestroyed = false;
    shipIsVulnerable = false;
    
    
    
    this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 12, this.updateDificulty, this);
}

GameManager.prototype.create = function(){
}

GameManager.prototype.update = function(){
    
}

GameManager.prototype.setScore=function(points)
{
    this.score += points;
    this.EntityFactory.HUD.addScore(this.score);   
}


GameManager.prototype.resetShip=function()
{  
    this.EntityFactory.player.getsprite().reset(this.game.width*0.5,this.game.height*0.85);
    this.EntityFactory.player.getsprite().angle = -90;

    shipDestroyed = false;
    shipIsVulnerable = true;

    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.shipReady, this);
    this.game.time.events.repeat(Phaser.Timer.SECOND * 0.2, 2*0.9/0.2, this.shipBlink, this);
}
    
GameManager.prototype.shipReady=function()
{
    shipIsVulnerable = false;
    this.EntityFactory.player.getsprite().visible = true;
}

GameManager.prototype.shipBlink=function()
{
        this.EntityFactory.player.getsprite().visible = !this.EntityFactory.player.getsprite().visible;
}

GameManager.prototype.playerKill=function()
{
    --this.lives;
    this.EntityFactory.HUD.setLives(this.lives);
    
    //Si no quedan vidas, pasamos al estado gameOver
    if (this.lives /*TODO*/ && this.EntityFactory.enemiesDummy.getEnemiesDummy().countLiving()>0) 
    {
        this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.resetShip, this);
    }
    else
    {
        shipDestroyed = true;
        this.game.state.states['over'].score = this.score;
        this.game.state.start('over');
    }       
    
    shipDestroyed = true;
}

GameManager.prototype.updateDificulty=function()
{
    if(Managers.enemyMgr.velocityInitialsShootEnemyDummy>1000)
    {
        Managers.enemyMgr.velocityInitialsShootEnemyDummy = Managers.enemyMgr.velocityInitialsShootEnemyDummy*0.96;
    }
    
}

