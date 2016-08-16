var Components = Components || [];

Components.CAnimation = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

Components.CAnimation.prototype = Object.create(Componente.prototype,
{
    create:
    {
        value:function()
        {
            //Uso un aux porque dentro de la función del forEach estamos en otro contexto, por lo que no me reconocerá la variable this._entityGraphic
            var auxEntityGraphic = this._entity.entityGraphic;
            var auxSpeedAnimation = getAttributeEntity("speedAnimation", this._entityType);
            getAttributeEntity("animaciones", this._entityType).forEach(function(frames,anim)
            {
                auxEntityGraphic.animations.add(anim,frames,auxSpeedAnimation,true);
            });
            this._entity.entityGraphic = auxEntityGraphic;
        }
    },  
});
