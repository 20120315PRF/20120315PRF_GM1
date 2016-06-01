CPhysics = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

CPhysics.prototype.create = function()
{
    game.physics.arcade.enable(this._entity.entityGraphic);
    this._entity.entityGraphic.body.collideWorldBounds = true;
}

CPhysics.prototype.update = function()
{
    
}