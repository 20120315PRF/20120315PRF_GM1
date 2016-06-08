CBulletController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CBulletController.prototype.create = function()
{
    //  All 40 of them
    this._entity.entityGraphic.createMultiple(getAttributeEntity("cantidadCrear",this._entityType), getAttributeEntity("nombreSprite",this._entityType));
    this._entity.entityGraphic.setAll('anchor.x', getAttributeEntity("scaleX",this._entityType));
    this._entity.entityGraphic.setAll('anchor.y', getAttributeEntity("scaleY",this._entityType));
    
    this._bulletTime = 0;
    game.input.mouse.capture = true;
}

CBulletController.prototype.update = function()
{  
    if (game.input.activePointer.leftButton.isDown)
    {
        this.fireBullet();
    }   
   // this._entity.entityGraphic.forEachExists(this.screenWrap, this);
}

CBulletController.prototype.fireBullet = function()
{
    if (game.time.now > this._bulletTime)
    {
        var bullet = this._entity.entityGraphic.getFirstExists(false);

        if (bullet)
        {
            var player = EntityFactory.getinstance().player;
            bullet.reset(player.body.x+16, player.body.y+16);
            bullet.lifespan = getAttributeEntity("life","Bullet");
            bullet.rotation = player.rotation;
            game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
            this._bulletTime = game.time.now + 50;
        }
    }
}


CBulletController.prototype.screenWrap = function(sprite) {

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