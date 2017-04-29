
GameManager = function(game,entityFactory){
    
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
    --Configuracion.Player.livesCurrent;
    this.EntityFactory.HUD.setLives(Configuracion.Player.livesCurrent);
    
    Configuracion.Game.scoreHeight = Math.max(Configuracion.Game.scoreHeight,this.score);
    if(Configuracion.Player.livesCurrent)
    {
        this.game.state.start('startingGame');  
    }
    else
    {
        this.game.state.start('over');  
    }
      
}

GameManager.prototype.updateDificulty=function()
{
    
    if(Configuracion.Game.velocityDescendingCurrent<320)
    {
        console.log("vel: "+Configuracion.Game.velocityDescendingCurrent);
        Configuracion.Game.velocityDescendingCurrent += 4;
    }
    
};

