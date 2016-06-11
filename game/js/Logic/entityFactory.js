//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

EntityFactory = function()
{
    console.assert(EntityFactory._semaphore,"Constructor EntityFactory privado");
    this.Entity = []; 
    this.Pool = [];
    this._Groups = new Map();
    this._player = null;
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

EntityFactory.getinstance = function(){return EntityFactory._instance;}

EntityFactory.prototype.preload = function()
{

}

EntityFactory.prototype.create = function()
{
    var bulletGroup = game.add.group();
    bulletGroup.enableBody = getAttributeEntity("enableBody","Bullet");
    bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
    
    var asteroidGroup = game.add.group();
    asteroidGroup.enableBody = getAttributeEntity("enableBody","AsteroidSmall");
    asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;
    
    this._Groups.set("Bullet",bulletGroup);
    this._Groups.set("AsteroidSmall",asteroidGroup);
    this._Groups.set("AsteroidMedium",asteroidGroup);
    this._Groups.set("AsteroidLarge",asteroidGroup);
}

EntityFactory.prototype.update = function()
{
    //Update de todas las entidades
    this.Entity.forEach(function(entity)
    {
//        if(entity.state)//Si está vivo
            entity.update();
    });
}

//Esta función, por lo general, será llamada desde el creador del mapa, el cual leerá el mapa JSON y obtendrá las entidades a instanciar en la posición indicada. 
EntityFactory.prototype.createEntity = function(entityType, position)
{
    console.assert(Blueprints.has(entityType),"El tipo de entidad a crear no existe");

    //Creamos la entidad
    var entity = new Entity(entityType,position,hasAttributeEntity("group",entityType));
    
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
        this._player = entity;
    }
    
}

EntityFactory.prototype.deleteEntity = function(entityGraphic)
{
    
}

Object.defineProperty(EntityFactory.prototype,"player",{
        get : function(){return this._player.entityGraphic;}
});

Object.defineProperty(EntityFactory.prototype,"Groups",{
        get : function(){return this._Groups;}
});
