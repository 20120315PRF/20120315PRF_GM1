var Arquetipo = new Map();

//---------------------------------------------------------------------------------------------------------
    //Atributos player
    Arquetipo.set("Player",new Map());

    //Valores de diseño
    Arquetipo.get("Player").set("speedX",300);
    Arquetipo.get("Player").set("speedY",-400);
    Arquetipo.get("Player").set("scaleX",1);//Tamaño del player
    Arquetipo.get("Player").set("scaleY",1);
    Arquetipo.get("Player").set("bounce",0); //Rebote del player, entre 0 y 1
    Arquetipo.get("Player").set("gravity",0);
    Arquetipo.get("Player").set("speedAnimation",20);
    Arquetipo.get("Player").set("acceleration",300);
    Arquetipo.get("Player").set("drag",150);
    Arquetipo.get("Player").set("maxVelocity",200);
    Arquetipo.get("Player").set("angularVelocity",100);

    //Valores de programación
    Arquetipo.get("Player").set("nombreSprite",'playerSprite');
    //Arquetipo.get("Player").set("spritesheet",'game/assets/images/dude.png');
    Arquetipo.get("Player").set("sprite",'game/assets/images/ship4.png');
    Arquetipo.get("Player").set("spritesheetX",32);
    Arquetipo.get("Player").set("spritesheetY",48);
    Arquetipo.get("Player").set("spritesheetY",48);
    Arquetipo.get("Player").set("animaciones",new Map());
    Arquetipo.get("Player").get("animaciones").set('left',[0,1,2,3]);
    Arquetipo.get("Player").get("animaciones").set('right',[5,6,7,8]);
    Arquetipo.get("Player").get("animaciones").set('idle',[4]);
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
    Arquetipo.get("Bullet").set("life",500);
    Arquetipo.get("Bullet").set("group",1);

    //Valores de programación
    Arquetipo.get("Bullet").set("nombreSprite",'bulletSprite');
    Arquetipo.get("Bullet").set("sprite",'game/assets/images/bullets.png');
    Arquetipo.get("Bullet").set("enableBody",1); //1 si tiene fisica, 0 no.

//-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("AsteroidSmall",new Map());

    //Valores de diseño
    Arquetipo.get("AsteroidSmall").set("minVelocity",70);
    Arquetipo.get("AsteroidSmall").set("maxVelocity",175);
    Arquetipo.get("AsteroidSmall").set("minAngularVelocity",100);
    Arquetipo.get("AsteroidSmall").set("maxAngularVelocity",300);
    Arquetipo.get("AsteroidSmall").set("score",100);
    Arquetipo.get("AsteroidSmall").set("scaleX",0.5);
    Arquetipo.get("AsteroidSmall").set("scaleY",0.5);

    //Valores de programación
    Arquetipo.get("AsteroidSmall").set("nombreSprite",'AsteroidSmallSprite');
    Arquetipo.get("AsteroidSmall").set("sprite",'game/assets/images/asteroid1.png');
    Arquetipo.get("AsteroidSmall").set("enableBody",1); //1 si tiene fisica, 0 no.
    Arquetipo.get("AsteroidSmall").set("Explosion",'explosionSmall');
    Arquetipo.get("AsteroidSmall").set("padding",16);

    //-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("AsteroidMedium",new Map());

    //Valores de diseño
    Arquetipo.get("AsteroidMedium").set("minVelocity",60);
    Arquetipo.get("AsteroidMedium").set("maxVelocity",125);
    Arquetipo.get("AsteroidMedium").set("minAngularVelocity",75);
    Arquetipo.get("AsteroidMedium").set("maxAngularVelocity",250);
    Arquetipo.get("AsteroidMedium").set("score",50);
    Arquetipo.get("AsteroidMedium").set("scaleX",0.9);
    Arquetipo.get("AsteroidMedium").set("scaleY",0.9);

    //Valores de programación
    Arquetipo.get("AsteroidMedium").set("nombreSprite",'AsteroidMediumSprite');
    Arquetipo.get("AsteroidMedium").set("sprite",'game/assets/images/asteroid24.png');
    Arquetipo.get("AsteroidMedium").set("enableBody",1); //1 si tiene fisica, 0 no.
    Arquetipo.get("AsteroidMedium").set("sizeLess","AsteroidSmall");
    Arquetipo.get("AsteroidMedium").set("Explosion",'explosionSmall');
    Arquetipo.get("AsteroidMedium").set("padding",16);

    //-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("AsteroidLarge",new Map());

    //Valores de diseño
    Arquetipo.get("AsteroidLarge").set("minVelocity",50);
    Arquetipo.get("AsteroidLarge").set("maxVelocity",100);
    Arquetipo.get("AsteroidLarge").set("minAngularVelocity",50);
    Arquetipo.get("AsteroidLarge").set("maxAngularVelocity",200);
    Arquetipo.get("AsteroidLarge").set("score",20);
    Arquetipo.get("AsteroidLarge").set("scaleX",1.25);
    Arquetipo.get("AsteroidLarge").set("scaleY",1.25);

    //Valores de programación
    Arquetipo.get("AsteroidLarge").set("nombreSprite",'AsteroidLargeSprite');
    Arquetipo.get("AsteroidLarge").set("sprite",'game/assets/images/asteroid1.png');
    Arquetipo.get("AsteroidLarge").set("enableBody",1); //1 si tiene fisica, 0 no.
    Arquetipo.get("AsteroidLarge").set("sizeLess","AsteroidMedium");
    Arquetipo.get("AsteroidLarge").set("Explosion",'explosionSmall');
    Arquetipo.get("AsteroidLarge").set("padding",16);

//-----------------------------------------------------------------------------------------------------------------

    Arquetipo.set("Map",new Map());

    //Valores de diseño
    Arquetipo.get("Map").set("startingAteroids",2);
    Arquetipo.get("Map").set("maxAsteroids",20);
    Arquetipo.get("Map").set("incrementAteroids",2);
    Arquetipo.get("Map").set("delayToStartLevel",3);

//-----------------------------------------------------------------------------------------------------------------


    //Valores de diseño
    Arquetipo.set("Explosion",new Map());
    Arquetipo.get("Explosion").set("sprite",'game/assets/images/muzzleflash3.png');

//-----------------------------------------------------------------------------------------------------------------

function getAttributeEntity(name, entityType)
{
    console.assert(Arquetipo.has(entityType), "Tipo de entidad "+entityType+" incorrecta. No se encuentra en el arquetipo");
    console.assert(Arquetipo.get(entityType).has(name),"Atributo "+name+" en el tipo de Entidad " +entityType+ " no encontrado" );
    return Arquetipo.get(entityType).get(name);
}

function hasAttributeEntity(name,entityType)
{
    console.assert(Arquetipo.has(entityType), "Tipo de entidad "+entityType+" incorrecta. No se encuentra en el arquetipo");
    return (Arquetipo.get(entityType).has(name)) ? true : false;
}