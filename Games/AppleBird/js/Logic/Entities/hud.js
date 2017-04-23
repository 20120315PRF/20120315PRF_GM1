
HUD = function(game)
{
	this.game = game;
}

HUD.prototype.create = function()
{
    //HUD
    this.tf_score = this.game.add.text(20, this.game.height*0.95, 0, {font: '25px Arial', fill: '#FFFFFF', align: 'center'});
}

HUD.prototype.update = function()
{
	
}

HUD.prototype.addScore = function(score){
    this.tf_score.setText(''+score);
}