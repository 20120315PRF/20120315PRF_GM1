
Player = function(game){
    this.game = game;
}

Player.prototype.create = function(){
    //La nave del player
    this.player = this.game.add.sprite(this.game.width*0.5,this.game.height*0.85,'bird');
        
    this.player.anchor.set(0.5);
    this.player.scale.setTo(1.5,1.5);
    var fly = this.player.animations.add('fly');
    this.player.animations.play('fly', 10, true);
    
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = Configuracion.Player.collideWorldBounds;
    
    console.log("create player")
    //this.bulletPlayer.create();
}

Player.prototype.getsprite = function(){
	return this.player;
}

Player.prototype.update = function(bulletsObject){
    this.player.body.velocity.x = 0;
    
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.velocity.x = -Configuracion.Player.speedX;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.velocity.x = Configuracion.Player.speedX;
    }

};