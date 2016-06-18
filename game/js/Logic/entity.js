//clase de la heredarán todas las entidades. Esta clase no será instaciada nunca
var Logic = Logic || [];

Logic.Entity = function(entityType, position, group)
{
    this.Components = new Map();
    this._position = position;
    this._entityType = entityType;
    //this._entity representa el sprite de la entidad o el grupo de entidades
    this._entityGraphic = (group) ? Logic.EntityFactory.getinstance().Groups.get(this._entityType):null;

}

Logic.Entity.prototype = 
{
    respawn:function()
    {
        this._position = position;
    },
    
    create:function()
    {
        this.Components.forEach(function(value,key)
        {
            value.create();
        });
    },
    
    update:function()
    {
        this.Components.forEach(function(value,key)
        {
            value.update();
        });
    },
    
    addComponent:function(nameComponent, objectComponent)
    {
        this.Components.set(nameComponent, new objectComponent(this._entityType,this));
    },
};

Object.defineProperty(Logic.Entity.prototype,"entityType",{
        get : function(){return this._entityType;}
});

Object.defineProperty(Logic.Entity.prototype,"getPosition",{
        get : function(){return this._position;}
});

Object.defineProperty(Logic.Entity.prototype,"entityGraphic",{
        get : function(){return this._entityGraphic;},
        set : function(sprite){this._entityGraphic = sprite;}
});


