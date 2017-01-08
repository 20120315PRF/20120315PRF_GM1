var Components = Components || [];
Components.CBulletController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
};

Components.CBulletController.prototype=Object.create(Componente.prototype,
{
    create:
    {
        value:function()
        {
            //  All 40 of them
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
            if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !globalVar.shipDestroyed)
            {
                this.fireBullet();
            }   
            game.debug.body(this._entity.entityGraphic);
        }
    },
});

Components.CBulletController.prototype.fireBullet=function()
{
    if (game.time.now > this._bulletTime)
    {
        var bullet = this._entity.entityGraphic.getFirstExists(false);

        if (bullet)
        {
            this.snd_bullet.play();
            var player = globalVar.player.entityGraphic;
            bullet.reset(player.body.x+16, player.body.y+16);
            bullet.lifespan = getAttributeEntity("life","Bullet");
            bullet.rotation = player.rotation;
            game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
            this._bulletTime = game.time.now + 300;
        }
    }
};