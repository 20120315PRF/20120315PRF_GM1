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
//    game.physics.arcade.overlap(EntityFactory.getinstance().player,EntityFactory.getinstance().Groups.get(this._entityType),this.collision,null,this);
//    
//    game.physics.arcade.overlap(EntityFactory.getinstance().Groups.get("Bullet"),EntityFactory.getinstance().Groups.get(this._entityType),this.collision,null,this);
}

CAsteroidPhysic.prototype.collision = function(other,asteroidSprite)
{
    if(hasAttributeEntity("sizeLess",this._entityType))
    {
        console.log("ENTRA");
        EntityFactory.getinstance().createEntity(getAttributeEntity("sizeLess",this._entityType),new Phaser.Point(this._entity.entityGraphic.position.x, this._entity.entityGraphic.position.y));
        
        EntityFactory.getinstance().createEntity(getAttributeEntity("sizeLess",this._entityType),new Phaser.Point(this._entity.entityGraphic.position.x, this._entity.entityGraphic.position.y));
    }
    
    //other.kill();
    asteroidSprite.kill();
    
    
}
