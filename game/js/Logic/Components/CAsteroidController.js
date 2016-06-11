CAsteroidController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CAsteroidController.prototype.create = function()
{
    this._asteroid = this._entity.entityGraphic.create(this._entity.getPosition.x,this._entity.getPosition.y, getAttributeEntity("nombreSprite",this._entityType));
    
    this._asteroid.scale.setTo(getAttributeEntity("scaleX",this._entityType), getAttributeEntity("scaleY",this._entityType));
    
    this._asteroid.anchor.set(0.5, 0.5);
    
    this._angularVelocity = rand(getAttributeEntity("minAngularVelocity",this._entityType), getAttributeEntity("maxAngularVelocity",this._entityType));

    //Pasamos los grados a radianes
    var randomAngle = game.math.degToRad(rand(-180,180));
    var randomVelocity = rand(getAttributeEntity("minVelocity",this._entityType),getAttributeEntity("maxVelocity",this._entityType));

    //Establecemos el movimiento del asteroide segun su angulo, y su velocidad
    game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, this._asteroid.body.velocity);
}

CAsteroidController.prototype.update = function()
{  
  
//    this._asteroid.body.angularVelocity = 0;
    this._asteroid.body.angularVelocity = this._angularVelocity;
    this.screenWrap(this._asteroid);
    
    game.physics.arcade.overlap(EntityFactory.getinstance().player,this._asteroid,this.collision,null,this);
    
    game.physics.arcade.overlap(EntityFactory.getinstance().Groups.get("Bullet"),this._asteroid,this.collision,null,this);
    
//    game.debug.body(this._asteroid);
}

CAsteroidController.prototype.fireBullet = function()
{

}



CAsteroidController.prototype.collision = function(other,asteroidSprite)
{
    var pos = asteroidSprite.position;
    
    asteroidSprite.kill();
      
    other.kill();
    
    
    if(hasAttributeEntity("sizeLess",this._entityType))
    {
        
        
        var ent = getAttributeEntity("sizeLess",this._entityType);
        console.log(this._entityType+"-"+ent);
        EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));
        
        EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));
    }
    
    
    
    
}

CAsteroidController.prototype.screenWrap = function(sprite) {

    if (sprite.x < 0)
    {
        sprite.x = game.width;
    }
    else if (sprite.x > game.width)
    {
        sprite.x = 0;
    }

    if (sprite.y < 0)
    {
        sprite.y = game.height;
    }
    else if (sprite.y > game.height)
    {
        sprite.y = 0;
    }

}