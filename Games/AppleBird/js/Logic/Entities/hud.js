
HUD = function(game)
{
	this.game = game;
}

HUD.prototype.create = function()
{
    //HUD
    this.game.add.sprite(20,10,"heart");
    
    this.tf_lives = this.game.add.text(50, 10, Configuracion.Player.livesCurrent, {font: '20px Arial', fill: '#FFFFFF', align: 'center'});
    
    this.tf_score = this.game.add.text(650, 10,"0 ("+(Configuracion.Game.scoreHeight>0 && Configuracion.Game.scoreHeight || '-')+")", {font: '25px Arial', fill: '#FFFFFF', align: 'center'});
}

HUD.prototype.update = function()
{
	
}

HUD.prototype.addScore = function(score){
    this.tf_score.setText(score+" ("+(Configuracion.Game.scoreHeight>0 && Configuracion.Game.scoreHeight || '-')+")");
}

HUD.prototype.setLives = function(lives){
    this.tf_lives.setText(''+lives);
};