CPlayerController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

CPlayerController.prototype.create = function()
{
    console.log("create CPlayerController");
}

CPlayerController.prototype.update = function()
{
    this._entity.entityGraphic.body.velocity.x = 0;

    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A) )
    {
        this._entity.entityGraphic.body.velocity.x = 0 - getAttributeEntity("speedX", this._entityType);

        this._entity.entityGraphic.animations.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this._entity.entityGraphic.body.velocity.x = getAttributeEntity("speedX", this._entityType);

        this._entity.entityGraphic.animations.play('right');
    }
    else
    {
        this._entity.entityGraphic.animations.stop();

        this._entity.entityGraphic.animations.play('idle');
    }

    if((game.input.keyboard.isDown(Phaser.Keyboard.UP) ||game.input.keyboard.isDown(Phaser.Keyboard.W)) && this._entity.entityGraphic.body.touching.down)
    {
        this._entity.entityGraphic.body.velocity.y = getAttributeEntity("speedY", this._entityType);
        
    }
}

