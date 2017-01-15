
Player = function(game){
    this.game = game;
}

Player.prototype.create = function(){
    //La nave del player
    this.player = this.game.add.sprite(this.game.width*0.5,this.game.height*0.85,'playerSprite');
    this.player.anchor.set(0.5,0.5);
    this.player.angle = -90;
    
    this.game.physics.arcade.enable(this.player);
    this.player.body.drag.set(Configuracion.Player.drag);
    this.player.body.maxVelocity.set(Configuracion.Player.maxVelocity);
    this.player.body.collideWorldBounds = Configuracion.Player.collideWorldBounds;
    
    //this.bulletPlayer.create();
}

Player.prototype.getsprite = function(){
	return this.player;
}

Player.prototype.update = function(bulletsObject){
    
    this.player.body.acceleration.set(0);
    
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.acceleration.x = -500;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.acceleration.x = 500;
    }
    
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !shipDestroyed)
    {
        bulletsObject.fireBullet(this.player.body.x+16,this.player.body.y+16,this.player.rotation);
    }   
    
        
    this.screenWrap();
}


Player.prototype.screenWrap = function()
{
    if (this.player.x +Configuracion.Player.padding< 0)
    {
        this.player.x = this.game.width + Configuracion.Player.padding;
    }
    else if (this.player.x - Configuracion.Player.padding> this.game.width)
    {
        this.player.x = -Configuracion.Player.padding;
    }
};