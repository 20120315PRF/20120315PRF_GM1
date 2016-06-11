//clase de la heredarán todas las entidades. Esta clase no será instaciada nunca

Entity = function(entityType, position, group)
{
    this.Components = new Map();
    this._position = position;
    this._entityType = entityType;
    //this._entity representa el sprite de la entidad o el grupo de entidades
    this._entityGraphic = (group) ? EntityFactory.getinstance().Groups.get(this._entityType):null;

}

Entity.prototype.respawn = function(position)
{
    this._position = position;
}

Entity.prototype.create = function()
{
    //Llamamos a create de todos sus componentes
    this.Components.forEach(function(value,key)
    {
        value.create();
    });

}

//Hacemos update de todos los componentes de la entidad
Entity.prototype.update = function()
{
    //Update de todos sus componentes
    this.Components.forEach(function(value,key)
    {
        value.update();
    });
}

Entity.prototype.addComponent = function(nameComponent, objectComponent)
{
    this.Components.set(nameComponent, new objectComponent(this._entityType,this));
}

Object.defineProperty(Entity.prototype,"entityType",{
        get : function(){return this._entityType;}
});

Object.defineProperty(Entity.prototype,"getPosition",{
        get : function(){return this._position;}
});

Object.defineProperty(Entity.prototype,"entityGraphic",{
        get : function(){return this._entityGraphic;},
        set : function(sprite){this._entityGraphic = sprite;}
});


