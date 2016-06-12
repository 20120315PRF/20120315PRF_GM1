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
    game.physics.arcade.overlap(EntityFactory.getinstance().player.entityGraphic,this._entity.entityGraphic,this.collision,null,this);
    game.physics.arcade.overlap(EntityFactory.getinstance().Groups.get("Bullet"),this._entity.entityGraphic,this.collision,null,this);
}

CAsteroidPhysic.prototype.collision = function(other,asteroidSprite)
{
    var pos = asteroidSprite.position;
    other.kill();
//    this._entity.entityGraphic.kill();
    EntityFactory.getinstance().deleteEntity(this._entity,asteroidSprite);
      
    if(hasAttributeEntity("sizeLess",this._entityType))
    {
        var ent = getAttributeEntity("sizeLess",this._entityType);

        EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));
        
        EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));
    }
    
    if(other == EntityFactory.getinstance().player.entityGraphic)
    {
        GameManager.getinstance().destroyShip();
    }
    else{
        GameManager.getinstance().addScore = getAttributeEntity("score",this._entityType);
    }

    if (!asteroidGroup.countLiving()) 
    {
        GameManager.getinstance().nextLevel();
    }
    
}
