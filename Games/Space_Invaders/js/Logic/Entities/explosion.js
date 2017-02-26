explosion = function(game)
{
    this.game = game;
}

explosion.prototype.create = function()
{
    this.explosions = this.game.add.group();
    this.explosions.createMultiple(5, 'explosionSprite');
    
    this.explosions.forEach(function(explosion){
        explosion.anchor.x = 0.5;
        explosion.anchor.y = 0.5;
        explosion.animations.add('explosionSprite')
    },this);
    
}


explosion.prototype.update = function(player)
{
    
}

explosion.prototype.createExplosion=function(posX, posY)
{
    var explosion = this.explosions.getFirstExists(false);
    explosion.reset(posX, posY);
    explosion.play('explosionSprite', 30, false, true);
    
    //this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.deadExplosion, this);
}

explosion.prototype.deadExplosion=function()
{
    
};