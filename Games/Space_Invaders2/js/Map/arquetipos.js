var Arquetipo = new Map();

//---------------------------------------------------------------------------------------------------------
    //Atributos player
    Arquetipo.set("Player",new Map());

    //Valores de diseño
    Arquetipo.get("Player").set("speedX",300);
    Arquetipo.get("Player").set("speedY",-400);
    Arquetipo.get("Player").set("scaleX",1);//Tamaño del player
    Arquetipo.get("Player").set("scaleY",1);
    Arquetipo.get("Player").set("gravity",0);
    Arquetipo.get("Player").set("acceleration",300);
    Arquetipo.get("Player").set("drag",150);
    Arquetipo.get("Player").set("maxVelocity",200);

    //Valores de programación
    Arquetipo.get("Player").set("nombreSprite",'playerSprite');
    Arquetipo.get("Player").set("collideWorldBounds",0);

    Arquetipo.get("Player").set("shipLives",3);
    Arquetipo.get("Player").set("timeToReset",3);
    Arquetipo.get("Player").set("padding",16);
    
    //Arquetipo.get("Player").set("colisiones ",[]); //Entidades con las que colisiona el player.
    //Arquetipo.get("Player").set("trigger",[]);//Entidades con las que se comportaran como trigger

//-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("Bullet",new Map());

    //Valores de diseño
    Arquetipo.get("Bullet").set("speed",400);
    Arquetipo.get("Bullet").set("scaleX",0.5);
    Arquetipo.get("Bullet").set("scaleY",0.5);
    Arquetipo.get("Bullet").set("cantidadCrear",10);
    Arquetipo.get("Bullet").set("life",1200);
    Arquetipo.get("Bullet").set("group",1);

    //Valores de programación
    Arquetipo.get("Bullet").set("nombreSprite",'bulletSprite');
    Arquetipo.get("Bullet").set("enableBody",1); //1 si tiene fisica, 0 no.

//-----------------------------------------------------------------------------------------------------------------


    

//-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("Map",new Map());

    //Valores de diseño
    Arquetipo.get("Map").set("delayToStartLevel",3);

//-----------------------------------------------------------------------------------------------------------------


    //Valores de diseño
    Arquetipo.set("Explosion",new Map());
    Arquetipo.get("Explosion").set("nombreSprite",'explosionSprite');

//-----------------------------------------------------------------------------------------------------------------

function getAttributeEntity(name, entityType)
{
    console.assert(Arquetipo.has(entityType), "Tipo de entidad "+entityType+" incorrecta. No se encuentra en el arquetipo");
    console.assert(Arquetipo.get(entityType).has(name),"Atributo "+name+" en el tipo de Entidad " +entityType+ " no encontrado" );
    return Arquetipo.get(entityType).get(name);
};

function hasAttributeEntity(name,entityType)
{
    console.assert(Arquetipo.has(entityType), "Tipo de entidad "+entityType+" incorrecta. No se encuentra en el arquetipo");
    return (Arquetipo.get(entityType).has(name)) ? true : false;
};