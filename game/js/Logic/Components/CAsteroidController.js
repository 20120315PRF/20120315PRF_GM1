var Components = Components || [];

Components.CAsteroidController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

Components.CAsteroidController.prototype = 
{
    create:function()
    {
        if(globalVar.asteroidGroup == undefined)
        {
            globalVar.asteroidGroup = game.add.group();
            globalVar.asteroidGroup.enableBody = getAttributeEntity("enableBody",this._entityType);
            globalVar.asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;
        }


        this._entity.entityGraphic = globalVar.asteroidGroup.create(this._entity.getPosition.x,this._entity.getPosition.y, getAttributeEntity("nombreSprite",this._entityType));

        this._entity.entityGraphic.scale.setTo(getAttributeEntity("scaleX",this._entityType), getAttributeEntity("scaleY",this._entityType));

        this._entity.entityGraphic.anchor.set(0.5, 0.5);

        this._angularVelocity = rand(getAttributeEntity("minAngularVelocity",this._entityType), getAttributeEntity("maxAngularVelocity",this._entityType));

        //Pasamos los grados a radianes
        var randomAngle = game.math.degToRad(rand(-180,180));
        var randomVelocity = rand(getAttributeEntity("minVelocity",this._entityType),getAttributeEntity("maxVelocity",this._entityType));

        //Establecemos el movimiento del asteroide segun su angulo, y su velocidad
        game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, this._entity.entityGraphic.body.velocity);
     
    },
    
    update:function()
    {
        this._entity.entityGraphic.body.angularVelocity = this._angularVelocity;
        this.screenWrap(this._entity.entityGraphic);
    },
    
    screenWrap:function(sprite)
    {
        if (sprite.x +getAttributeEntity("padding",this._entityType)< 0)
        {
            sprite.x = game.width + getAttributeEntity("padding",this._entityType);
        }
        else if (sprite.x - getAttributeEntity("padding",this._entityType)> game.width)
        {
            sprite.x = -getAttributeEntity("padding",this._entityType);
        }

        if (sprite.y + getAttributeEntity("padding",this._entityType)< 0)
        {
            sprite.y = game.height + getAttributeEntity("padding",this._entityType);
        }
        else if (sprite.y - getAttributeEntity("padding",this._entityType) > game.height)
        {
            sprite.y = -getAttributeEntity("padding",this._entityType);
        }
    },
    
    deadEntity:function()
    {
        
    }
}
