
Player = function(game){
    this.game = game;
}

Player.prototype.create = function(){
    //La nave del player
    this.player = this.game.add.sprite(this.game.width*0.5,this.game.height*0.85,'bird');
    this.position_initial_y = this.player.position.y;
    
    this.player.anchor.set(0.5);
    this.player.scale.setTo(1.25,1.25);
    var fly = this.player.animations.add('fly');
    this.player.animations.play('fly', 10, true);
    
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = false;
}

Player.prototype.getsprite = function(){
	return this.player;
}

Player.prototype.update = function(plataformas,apple){
    a =this.game.physics.arcade.collide(this.player, plataformas);
    
    this.game.physics.arcade.overlap(this.player,apple,this.collision_apple,null,this);
    this.player.body.velocity.y = 0;
    this.player.body.velocity.x = 0;
    
    if (!a && this.player.position.y > this.position_initial_y)
    {
        if (this.player.position.y - 120 < this.position_inicial_y)
        {
            this.player.body.velocity.y = this.player.position.y - this.position_initial_y;
        }
        else
        {
            this.player.body.velocity.y = -120;
        }
    }
    
    if (this.player.position.y > 550)
    {
        Managers.gameMgr.playerKill();
    }
    
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.velocity.x = -Configuracion.Player.speedX;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.velocity.x = Configuracion.Player.speedX;
    }
    
    this.screenWrap();
}

Player.prototype.collision_apple = function(player, apple)
{
    //this.explosion.createExplosion(enemy.body.x, enemy.body.y);
    
    apple.kill();
    
    Managers.gameMgr.setScore(Configuracion.Game.scoreApple);
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