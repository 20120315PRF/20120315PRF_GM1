
HUD = function(game)
{
	this.game = game;
	this.score = 0;
    this.shipLives = Configuracion.Player.lives;
}

HUD.prototype.create = function()
{
    //HUD
    this.game.add.sprite(20,10,"heart");

    this.tf_lives = this.game.add.text(50, 10, this.shipLives, {font: '20px Arial', fill: '#FFFFFF', align: 'center'});
    this.tf_score = this.game.add.text(20, this.game.height*0.95, this.score, {font: '25px Arial', fill: '#FFFFFF', align: 'center'});
}

HUD.prototype.update = function()
{
	
}

HUD.prototype.addScore = function(points){
	this.score += points;
    this.tf_score.setText(''+this.score);
}

HUD.prototype.setLives = function(){
	--this.shipLives;
    this.tf_lives.setText(''+this.shipLives);
}