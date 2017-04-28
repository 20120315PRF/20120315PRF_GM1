
GameManager = function(game, entityFactory){
    
    //Variables del juego
    this.game = game;
    this.EntityFactory = entityFactory;
    
    this.score = 0;
    
    this.game.time.events.repeat(Phaser.Timer.SECOND, 60, this.updateDificulty, this);
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

GameManager.prototype.playerKill=function()
{
    this.game.state.states['over'].score = this.score;
    this.game.state.start('over');  
}

GameManager.prototype.updateDificulty=function()
{
    
    if(Configuracion.Game.velocityDescendingCurrent<320)
    {
        console.log("vel: "+Configuracion.Game.velocityDescendingCurrent);
        Configuracion.Game.velocityDescendingCurrent += 4;
    }
    
};

