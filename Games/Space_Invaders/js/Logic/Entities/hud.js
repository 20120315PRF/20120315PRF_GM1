
HUD = function(game)
{
	this.game = game;
}

HUD.prototype.create = function()
{
    //HUD
    this.game.add.sprite(20,10,"heart");

    this.tf_lives = this.game.add.text(50, 10, Configuracion.Player.lives, {font: '20px Arial', fill: '#FFFFFF', align: 'center'});
    this.tf_score = this.game.add.text(20, this.game.height*0.95, 0, {font: '25px Arial', fill: '#FFFFFF', align: 'center'});
}

HUD.prototype.update = function()
{
	
}

HUD.prototype.addScore = function(score){
    this.tf_score.setText(''+score);
}

HUD.prototype.setLives = function(lives){
    this.tf_lives.setText(''+lives);
};