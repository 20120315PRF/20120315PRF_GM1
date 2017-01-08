var Components = Components || [];

Components.CGraphics = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
    
};

Components.CGraphics.prototype = Object.create(Componente.prototype,
{
    create:
    {
        value: function(){ // override
          Componente.prototype.create.apply(); // call super
          this._entity.entityGraphic = game.add.sprite(this._entity.getPosition.x, this._entity.getPosition.y, getAttributeEntity("nombreSprite", this._entityType));

          this._entity.entityGraphic.anchor.set(0.5);
        }
        
    },
});


