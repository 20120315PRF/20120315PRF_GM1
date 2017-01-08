var Components = Components || [];
Components.CPlayerController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
};

Components.CPlayerController.prototype = Object.create(Componente.prototype,
{
    create:
    {
        value:function()
        {
            //  All 40 of them
            var bulletGroup = game.add.group();
            bulletGroup.enableBody = true;
            bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;

            this._Groups.set("Bullet",bulletGroup); 
            this._entity.entityGraphic.createMultiple(getAttributeEntity("cantidadCrear",this._entityType), getAttributeEntity("nombreSprite",this._entityType));
            this._entity.entityGraphic.setAll('anchor.x', getAttributeEntity("scaleX",this._entityType));
            this._entity.entityGraphic.setAll('anchor.y', getAttributeEntity("scaleY",this._entityType));
            this._entity.entityGraphic.setAll('checkWorldBounds', true);
            this._bulletTime = 0;

            this.snd_bullet = game.add.audio('snd_star',0.5);
        }
    },
    update:
    {
        value:function()
        {           
            this._entity.entityGraphic.body.acceleration.set(0);
            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
            {
                this._entity.entityGraphic.body.acceleration.x = -500;
            }
            else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
            {
                this._entity.entityGraphic.body.acceleration.x = 500;
            }
            else
            {
                this._entity.entityGraphic.body.angularVelocity = 0;
            }

            this.screenWrap(this._entity.entityGraphic);
        }
    },
});


Components.CPlayerController.prototype.screenWrap = function(sprite)
{
    if (sprite.x +getAttributeEntity("padding",this._entityType)< 0)
    {
        sprite.x = game.width + getAttributeEntity("padding",this._entityType);
    }
    else if (sprite.x - getAttributeEntity("padding",this._entityType)> game.width)
    {
        sprite.x = -getAttributeEntity("padding",this._entityType);
    }
};