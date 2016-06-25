//Factoria de entidades. Se encarga de crear las entidades. Otro singleton
var Logic = Logic || [];
Logic.EntityFactory = function()
{
    console.assert(Logic.EntityFactory._semaphore,"Constructor EntityFactory privado");
    this.Entity = []; 
    this._Groups = new Map();
}

Logic.EntityFactory.init = function()
{
     if(!Logic.EntityFactory._instance)
    {
        Logic.EntityFactory._semaphore = 1;
        Logic.EntityFactory._instance = new Logic.EntityFactory();
        Logic.EntityFactory._semaphore = 0;
    }

    return true;
}

Logic.EntityFactory.prototype =
{
    destroy:function()
    {
        Logic.EntityFactory._instance = null;
        this._Groups.get("Bullet").destroy(true);
        this._Groups.delete("Bullet");
        this._Groups = null;
        globalVar.asteroidGroup.destroy(true);
        globalVar.asteroidGroup = null;
        console.log("aster: "+globalVar.asteroidGroup);
        this.Entity = [];
    },
    
    preload:function(){},
    
    create:function()
    {
        var bulletGroup = game.add.group();
        bulletGroup.enableBody = getAttributeEntity("enableBody","Bullet");
        bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;

        this._Groups.set("Bullet",bulletGroup);
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
        var entity = null;

        entity = new Logic.Entity(entityType,position,hasAttributeEntity("group",entityType));

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
