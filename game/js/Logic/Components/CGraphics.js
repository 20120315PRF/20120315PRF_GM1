CGraphics = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

CGraphics.prototype.create = function()
{
    this._entity.entityGraphic = game.add.sprite(this._entity.getPosition.x, this._entity.getPosition.y, getAttributeEntity("nombreSprite", this._entityType));
    
    this._entity.entityGraphic.anchor.set(0.5);
//    this._entity.entityGraphic.scale.setTo((Arquetipo.get(this._entityType).has("scaleX")) ? getAttributeEntity("scaleX", this._entityType): this._entity.entityGraphic.scale.x ,(Arquetipo.get(this._entityType).has("scaleY")) ? getAttributeEntity("scaleY", this._entityType): this._entity.entityGraphic.scale.y);
}

CGraphics.prototype.update = function()
{

}