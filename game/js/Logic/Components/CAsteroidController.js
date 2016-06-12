CAsteroidController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CAsteroidController.prototype.create = function()
{
    if(asteroidGroup == undefined)
    {
        asteroidGroup = game.add.group();
        asteroidGroup.enableBody = getAttributeEntity("enableBody",this._entityType);
        asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;
    }
    

    this._entity.entityGraphic = asteroidGroup.create(this._entity.getPosition.x,this._entity.getPosition.y, getAttributeEntity("nombreSprite",this._entityType));
    
    this._entity.entityGraphic.scale.setTo(getAttributeEntity("scaleX",this._entityType), getAttributeEntity("scaleY",this._entityType));
    
    this._entity.entityGraphic.anchor.set(0.5, 0.5);
    
    this._angularVelocity = rand(getAttributeEntity("minAngularVelocity",this._entityType), getAttributeEntity("maxAngularVelocity",this._entityType));

    //Pasamos los grados a radianes
    var randomAngle = game.math.degToRad(rand(-180,180));
    var randomVelocity = rand(getAttributeEntity("minVelocity",this._entityType),getAttributeEntity("maxVelocity",this._entityType));

    //Establecemos el movimiento del asteroide segun su angulo, y su velocidad
    game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, this._entity.entityGraphic.body.velocity);
}


CAsteroidController.prototype.update = function()
{  
    this._entity.entityGraphic.body.angularVelocity = this._angularVelocity;
    this.screenWrap(this._entity.entityGraphic);
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