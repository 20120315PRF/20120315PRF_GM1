EntityEnum = {
    Player : 0,
    Star : 1,
    Platform : 2,
    cameraController:3
}

FactoryEntity = function()
{
    //Stores entities and entities groups
    this._entities = new Map();
    
    
}

FactoryEntity.prototype.create = function()
{ 
    player.create();
    
    this._entities.forEach(function (value, key) {
        value.create();
    });   
}

FactoryEntity.prototype.update = function()
{
    if(!serversManager.gameMgr.isFinished)
    {
        this._entities.forEach(function (value, key) {
            value.update();
        });
    }   
}

FactoryEntity.prototype.createObjectsGame = function()
{
    //Creamos todos los elementos del juego aqui
    serversManager.factoryEntity.addEntity(EntityEnum.Star,new Stars());
    serversManager.factoryEntity.addEntity(EntityEnum.Platform,new Scenery());
    serversManager.factoryEntity.addEntity(EntityEnum.cameraController, new CameraController());
    player = new Player();
   //serversManager.factoryEntity.addEntity(EntityEnum.Player, player);
}

FactoryEntity.prototype.addEntity = function(intEnum, entity)
{
    if(!this._entities.has(intEnum))
    {
        this._entities.set(intEnum,entity);
    }
}

FactoryEntity.prototype.get = function(obj)
{
    return this._entities.get(obj);
}

FactoryEntity.prototype.getEntity = function(entity)
{
    return this._entities.get(entity).spriteEntity;
}
