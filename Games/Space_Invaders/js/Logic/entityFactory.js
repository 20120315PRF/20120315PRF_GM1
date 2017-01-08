//Factoria de entidades. Se encarga de crear las entidades. Otro singleton
var Logic = Logic || [];
Logic.EntityFactory = function()
{
    console.assert(Logic.EntityFactory._semaphore,"Constructor EntityFactory privado");
    this.Entity = []; 
    this._Groups = new Map();
    this._EntityGroupToEntity = new Map();
};

Logic.EntityFactory.init = function()
{
     if(!Logic.EntityFactory._instance)
    {
        Logic.EntityFactory._semaphore = 1;
        Logic.EntityFactory._instance = new Logic.EntityFactory();
        Logic.EntityFactory._semaphore = 0;
    }

    return true;
};

Logic.EntityFactory.prototype =
{
    destroy:function()
    {
        Logic.EntityFactory._instance = null;
        
        //Destruimos el grupo de las balas
        this._Groups.get("Bullet").destroy(true);
        this._Groups.delete("Bullet");
        this._Groups = null;
        
        //TODO 1
        //Destruimos el grupo de los asteroides
//        globalVar.asteroidGroup.destroy(true);
//        globalVar.asteroidGroup = null;
        
        this.Entity = [];
        this._EntityGroupToEntity = null;
    },
    
    preload:function(){},
    
    create:function()
    {
        
        
        var bulletGroup = game.add.group();
        bulletGroup.enableBody = getAttributeEntity("enableBody","Bullet");
        bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;

        this._Groups.set("Bullet",bulletGroup); 
        
        //todo 2
//        globalVar.asteroidGroup = game.add.group();
//        globalVar.asteroidGroup.enableBody = 1;
//        globalVar.asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
    },
    
    update:function()
    {
        this.Entity.forEach(function(entity)
        {
            entity.update();
        });
    },
    
    createEntity:function(entityType, position)
    {
        console.assert(Blueprints.has(entityType),"El tipo de entidad a crear no existe");


        //Creamos la entidad
        var entity = new Logic.Entity(entityType,position,hasAttributeEntity("group",entityType));

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
        return entity;
    },
    
    deleteEntity:function(entity,entityGraphic)
    {
        entityGraphic.kill();
        
        entity.deadEntity();
        
        var index = this.Entity.indexOf(entity);
        this.Entity.splice(index,1);

    },
    

};

Logic.EntityFactory.getinstance = function(){return Logic.EntityFactory._instance;}

Object.defineProperty(Logic.EntityFactory.prototype,"Groups",{
        get : function(){return this._Groups;}
});

Object.defineProperty(Logic.EntityFactory.prototype,"EntityGroupToEntity",{
        get : function(){return this._EntityGroupToEntity;}
});
