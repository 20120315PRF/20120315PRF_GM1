CAsteroidController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CAsteroidController.prototype.create = function()
{
    this._asteroid = this._entity.entityGraphic.create(this._entity.getPosition.x,this._entity.getPosition.y, getAttributeEntity("nombreSprite",this._entityType));
   // this._asteroid.scale.setTo(getAttributeEntity("scaleX",this._entityType), getAttributeEntity("scaleY",this._entityType));
    this._asteroid.anchor.set(1);
    this._asteroid.body.angularVelocity = game.rnd.integerInRange(getAttributeEntity("minAngularVelocity",this._entityType), getAttributeEntity("maxAngularVelocity",this._entityType));

    //Pasamos los grados a radianes
    var randomAngle = game.math.degToRad(rand(-180,180));
    var randomVelocity = rand(getAttributeEntity("minVelocity",this._entityType),getAttributeEntity("maxVelocity",this._entityType));

    //Establecemos el movimiento del asteroide segun su angulo, y su velocidad
    game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, this._asteroid.body.velocity);
}

CAsteroidController.prototype.update = function()
{  
  
    this.screenWrap(this._asteroid);
}

CAsteroidController.prototype.fireBullet = function()
{

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