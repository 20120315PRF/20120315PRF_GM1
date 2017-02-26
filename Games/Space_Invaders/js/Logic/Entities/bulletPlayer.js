
bulletPlayer = function(game, explosion)
{
    this.game = game;
    this.explosion = explosion;
    
    this.snd_bullet = game.add.audio('snd_star',0.5);
    this.bulletTime = 0;  
    this.snd_dead = game.add.audio('snd_dead');
};

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
    
};


bulletPlayer.prototype.update = function(enemiesDummy,enemiesDummy2)
{
    if(enemiesDummy.getEnemiesDummy().position.y>40)
    {
        this.game.physics.arcade.overlap(this.bulletsPlayer,enemiesDummy.getEnemiesDummy(),this.collision,null,this);
    }
    
    if(enemiesDummy2.getEnemiesDummy2().position.y>45)
    {
        this.game.physics.arcade.overlap(this.bulletsPlayer,enemiesDummy2.getEnemiesDummy2(),this.collision2,null,this);
    }
    
};

bulletPlayer.prototype.collision = function(bullet, enemy)
{
    this.explosion.createExplosion(enemy.body.x, enemy.body.y);
    
    bullet.kill();
    enemy.kill();
    
    this.snd_dead.play();
    
    Managers.gameMgr.setScore(Configuracion.Game.scoreEnemyDummy);
};

bulletPlayer.prototype.collision2 = function(bullet, enemy)
{
    this.explosion.createExplosion(enemy.body.x, enemy.body.y);
    
    bullet.kill();
    enemy.kill();
    
    this.snd_dead.play();
    
    Managers.gameMgr.setScore(Configuracion.Game.scoreEnemyDummy2);
};

bulletPlayer.prototype.fireBullet = function(posX, posY, rotation)
{
    if (this.game.time.now > this.bulletTime)
    {
        var bullet = this.bulletsPlayer.getFirstExists(false);

        if (bullet)
        {
            this.snd_bullet.play();
            
            bullet.reset(posX,posY);
            bullet.rotation = rotation;
            this.game.physics.arcade.velocityFromRotation(rotation, Configuracion.Bullet.speed, bullet.body.velocity);
            
            this.bulletTime = this.game.time.now + Configuracion.Bullet.timeBetweenBullets;
        }
    }
};