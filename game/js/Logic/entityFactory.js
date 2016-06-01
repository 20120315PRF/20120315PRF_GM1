//Factoria de entidades. Se encarga de crear las entidades. Otro singleton

EntityFactory = function()
{
    console.assert(EntityFactory._semaphore,"Constructor EntityFactory privado");
    this.Entity = []; 
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
    var entity = new Entity(entityType,position);
    
    //Añadimos sus componentes
    Blueprints.forEach(function (value, key) {
        value.forEach(function(comp)
        {
            entity.addComponent(comp["name"], comp["object"]);
        });         
    });
    
    entity.create();
    
    //La añadimos al array para gestionarla desde aqui
    this.Entity.push(entity);
    
}