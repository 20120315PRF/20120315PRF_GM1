
bulletPlayer = function(game,hud)
{
    this.game = game;
    this.hud = hud;
    this.snd_bullet = game.add.audio('snd_star',0.5);
    this.bulletTime = 0;  
    this.snd_dead = game.add.audio('snd_dead');
}

bulletPlayer.prototype.create = function()
{
    this.bulletsPlayer = this.game.add.group();
    this.bulletsPlayer.enableBody = true;
    this.bulletsPlayer.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.bulletsPlayer.createMultiple(30, 'bulletSprite');
    this.bulletsPlayer.setAll('anchor.x', Configuracion.Bullet.scaleX);
    this.bulletsPlayer.setAll('anchor.y', Configuracion.Bullet.scaleY);
    this.bulletsPlayer.setAll('checkWorldBounds', true);
    this.bulletsPlayer.setAll('outOfBoundsKill', true); //Muere cuando sale del juego
    
}


bulletPlayer.prototype.update = function(enemiesDummy)
{
    this.game.physics.arcade.overlap(this.bulletsPlayer,enemiesDummy.getEnemiesDummy(),this.collision,null,this);
}

bulletPlayer.prototype.collision = function(bullet, enemy)
{
    bullet.kill();
    enemy.kill();
    this.snd_dead.play();
    this.hud.addScore(Configuracion.Game.scoreEnemyDummy);
}

bulletPlayer.prototype.fireBullet = function(player)
{
    if (this.game.time.now > this.bulletTime)
    {
        var bullet = this.bulletsPlayer.getFirstExists(false);

        if (bullet)
        {
            this.snd_bullet.play();
            
            bullet.reset(player.body.x+16,player.body.y+16);
            bullet.rotation = player.rotation;
            this.game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
            
            this.bulletTime = this.game.time.now + Configuracion.Bullet.timeBetweenBullets;
        }
    }
};