CAsteroidPhysic = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CAsteroidPhysic.prototype.create = function()
{

}

CAsteroidPhysic.prototype.update = function()
{  
    game.physics.arcade.overlap(EntityFactory.getinstance().player,EntityFactory.getinstance().Groups.get(this._entityType),this.collision,null,this);
    
    game.physics.arcade.overlap(EntityFactory.getinstance().Groups.get("Bullet"),EntityFactory.getinstance().Groups.get(this._entityType),this.collision,null,this);
}

CAsteroidPhysic.prototype.collision = function(other,asteroidSprite)
{
    other.kill();
    asteroidSprite.kill();
}
