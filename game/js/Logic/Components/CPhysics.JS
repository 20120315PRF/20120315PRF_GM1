CPhysics = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

CPhysics.prototype.create = function()
{
    game.physics.arcade.enable(this._entity.entityGraphic);
    
    if(hasAttributeEntity("bounce",this._entityType))
        this._entity.entityGraphic.body.bounce.y = getAttributeEntity("bounce", this._entityType); 
    
    if(hasAttributeEntity("gravity",this._entityType))
        this._entity.entityGraphic.body.gravity.y = getAttributeEntity("gravity", this._entityType); 
    
    if(hasAttributeEntity("drag",this._entityType))
        this._entity.entityGraphic.body.drag.set(getAttributeEntity("drag", this._entityType));
    
    if(hasAttributeEntity("maxVelocity",this._entityType))
        this._entity.entityGraphic.body.maxVelocity.set(getAttributeEntity("maxVelocity", this._entityType));
    
    if(hasAttributeEntity("collideWorldBounds",this._entityType))
        this._entity.entityGraphic.body.collideWorldBounds = getAttributeEntity("collideWorldBounds", this._entityType);
}

CPhysics.prototype.update = function()
{
    
}