
GameManager = function(game){
    
    //Variables del juego
    this.game = game;
    this.score = 0;
    this.lives = Configuracion.Player.lives;
    
    shipDestroyed = false;
    shipIsVulnerable = false;
    
    this.velocityInitialsShootEnemyDummy = Configuracion.Game.velocityInitialsShootEnemyDummy;
    
    //Instanciacion de las entidades del juego
    this.initAllEntities();
    
    this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 12, this.updateDificulty, this);
}

GameManager.prototype.create = function(){
    //Inicializamos las entidades del juego
    this.createAllEntities();
}

GameManager.prototype.update = function(){
    //Actualizamos las entidades del juego
    this.updateAllEntities();
    
}

GameManager.prototype.initAllEntities=function()
{
    this.player = new Player(this.game);
    this.HUD = new HUD(this.game);
    this.explosion = new explosion(this.game);
    this.bulletPlayer = new bulletPlayer(this.game,this.explosion);
    this.bulletEnemy = new bulletEnemy(this.game,this.explosion);
    this.enemiesDummy = new enemyDummy(this.game);
}

GameManager.prototype.createAllEntities=function()
{
    this.player.create();
    this.explosion.create();
    this.bulletPlayer.create();
    this.enemiesDummy.create();
    this.bulletEnemy.create();
    this.HUD.create();
}

GameManager.prototype.updateAllEntities=function()
{
    this.player.update(this.bulletPlayer);     
    this.enemiesDummy.update(this.velocityInitialsShootEnemyDummy,this.bulletEnemy);
    this.bulletPlayer.update(this.enemiesDummy);
    this.bulletEnemy.update(this.player);
}

GameManager.prototype.setScore=function(points)
{
    this.score += points;
    this.HUD.addScore(this.score);   
}


GameManager.prototype.resetShip=function()
{  
    this.player.getsprite().reset(this.game.width*0.5,this.game.height*0.85);
    this.player.getsprite().angle = -90;

    shipDestroyed = false;
    shipIsVulnerable = true;

    this.game.time.events.add(Phaser.Timer.SECOND * 2, this.shipReady, this);
    this.game.time.events.repeat(Phaser.Timer.SECOND * 0.2, 2*0.9/0.2, this.shipBlink, this);
}
    
GameManager.prototype.shipReady=function()
{
    shipIsVulnerable = false;
    this.player.getsprite().visible = true;
}

GameManager.prototype.shipBlink=function()
{
        this.player.getsprite().visible = !this.player.getsprite().visible;
}

GameManager.prototype.playerKill=function()
{
    --this.lives;
    this.HUD.setLives(this.lives);
    
    //Si no quedan vidas, pasamos al estado gameOver
    if (this.lives /*TODO*/ && this.enemiesDummy.getEnemiesDummy().countLiving()>0) 
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
    console.log("dif");
    this.velocityInitialsShootEnemyDummy = this.velocityInitialsShootEnemyDummy*0.98;
}

