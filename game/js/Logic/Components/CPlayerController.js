CPlayerController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

CPlayerController.prototype.create = function()
{
}

CPlayerController.prototype.update = function()
{
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        game.physics.arcade.accelerationFromRotation(this._entity.entityGraphic.rotation, 400, this._entity.entityGraphic.body.acceleration);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        game.physics.arcade.accelerationFromRotation(this._entity.entityGraphic.rotation, -400, this._entity.entityGraphic.body.acceleration);
    }
    else
    {
        this._entity.entityGraphic.body.acceleration.set(0);
    }

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
    
    this._entity.entityGraphic.rotation = game.physics.arcade.angleToPointer(this._entity.entityGraphic);
    
//    game.debug.body(this._entity.entityGraphic);
}

CPlayerController.prototype.screenWrap = function(sprite) {

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