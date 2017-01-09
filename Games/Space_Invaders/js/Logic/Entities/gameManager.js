
GameManager = function(game){
    
    //Variables del juego
    this.game = game;
    this.score = 0;
    this.lives = Configuracion.Player.lives;
    
    //Instanciacion de las entidades del juego
    this.initAllEntities();
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
    this.bulletPlayer = new bulletPlayer(this.game);
    this.enemiesDummy = new enemyDummy(this.game);
}

GameManager.prototype.createAllEntities=function()
{
    this.player.create();
    this.bulletPlayer.create();
    this.enemiesDummy.create();
    this.HUD.create();
}

GameManager.prototype.updateAllEntities=function()
{
    this.player.update(this.bulletPlayer);     
    this.enemiesDummy.update();
    this.bulletPlayer.update(this.enemiesDummy);
}

GameManager.prototype.setScore=function(points)
{
    this.score += points;
    this.HUD.addScore(this.score);   
}

GameManager.prototype.playerKill=function()
{
    --this.lives;
    this.HUD.setLives(this.lives);
    
    //Si no quedan vidas, pasamos al estado gameOver
    if (!this.lives)
    {
        this.game.state.states['over'].score = this.score;
        this.game.state.start('over');
    }       
}


