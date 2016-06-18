//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

EntityFactory = function()
{
    console.assert(EntityFactory._semaphore,"Constructor EntityFactory privado");
    this.Entity = []; 
    this._Groups = new Map();
}

EntityFactory.init = function()
{
     if(!EntityFactory._instance)
    {
        EntityFactory._semaphore = 1;
        EntityFactory._instance = new EntityFactory();
        EntityFactory._semaphore = 0;
    }

    return true;
}

EntityFactory.prototype.destroy = function()
{
    EntityFactory._instance = null;
    this._Groups.get("Bullet").destroy(true);
    this._Groups.delete("Bullet");
    this._Groups = null;
    globalVar.asteroidGroup.destroy(true);
    globalVar.asteroidGroup = null;
    console.log("aster: "+globalVar.asteroidGroup);
    this.Entity = [];
}

EntityFactory.getinstance = function(){return EntityFactory._instance;}

EntityFactory.prototype.preload = function()
{

}

EntityFactory.prototype.create = function()
{
    var bulletGroup = game.add.group();
    bulletGroup.enableBody = getAttributeEntity("enableBody","Bullet");
    bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
    
    this._Groups.set("Bullet",bulletGroup);
}

EntityFactory.prototype.update = function()
{
    //Update de todas las entidades
    this.Entity.forEach(function(entity)
    {
        entity.update();
    });
}

//Esta función, por lo general, será llamada desde el creador del mapa, el cual leerá el mapa JSON y obtendrá las entidades a instanciar en la posición indicada. 
EntityFactory.prototype.createEntity = function(entityType, position)
{
    console.assert(Blueprints.has(entityType),"El tipo de entidad a crear no existe");

    
    //Creamos la entidad
    var entity = null;

    entity = new Entity(entityType,position,hasAttributeEntity("group",entityType));

    //Añadimos sus componentes
    Blueprints.forEach(function (value, key) {
        if(key == entityType)
        {
            value.forEach(function(comp)
            {
                entity.addComponent(comp["name"], comp["object"]);
            });   
        }
    });
    
    entity.create();
    
    //La añadimos al array para gestionarla desde aqui
    this.Entity.push(entity);
    
    if(entityType == "Player")
    {
        globalVar.player = entity;
    }
    
}

EntityFactory.prototype.deleteEntity = function(entity,entityGraphic)
{
    entityGraphic.kill();

    var index = this.Entity.indexOf(entity);
    this.Entity.splice(index,1);
}

Object.defineProperty(EntityFactory.prototype,"Groups",{
        get : function(){return this._Groups;}
});
