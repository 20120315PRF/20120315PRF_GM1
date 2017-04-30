
bulletEnemy = function(game, explosion)
{
    this.game = game;
    this.explosion = explosion;
    
    this.snd_bullet = game.add.audio('snd_star',0.5);
    this.snd_dead = game.add.audio('snd_dead');
};

bulletEnemy.prototype.create = function()
{
    this.bulletsEnemy = this.game.add.group();
    this.bulletsEnemy.enableBody = true;
    this.bulletsEnemy.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.bulletsEnemy.createMultiple(30, 'bulletSpriteEnemy');
    this.bulletsEnemy.setAll('anchor.x', Configuracion.Bullet.scaleX);
    this.bulletsEnemy.setAll('anchor.y', Configuracion.Bullet.scaleY);
    this.bulletsEnemy.setAll('checkWorldBounds', true);
    this.bulletsEnemy.setAll('outOfBoundsKill', true); //Muere cuando sale del juego
    
};


bulletEnemy.prototype.update = function(player)
{
    if(!shipIsVulnerable)
    {
        this.game.physics.arcade.overlap(this.bulletsEnemy,player.getsprite(),this.collision,null,this);
    }
};

bulletEnemy.prototype.collision = function(bullet, player)
{
    this.explosion.createExplosion(player.body.x, player.body.y);
    
    bullet.kill();
    player.kill();
    
    this.snd_dead.play();
    
    Managers.gameMgr.playerKill();
};

bulletEnemy.prototype.fireBullet = function(posX, posY, rotation)
{
    var bullet = this.bulletsEnemy.getFirstExists(false);
    
    if (bullet)
    {
        this.snd_bullet.play();
        bullet.scale.setTo(2,1);
        bullet.reset(posX,posY+8);
        bullet.rotation = rotation;
        this.game.physics.arcade.velocityFromRotation(bullet.rotation, Configuracion.Bullet.speed, bullet.body.velocity);
    }
};