var Arquetipo = new Map();

//Atributos player
Arquetipo.set("Player",new Map());

//Valores de diseño
Arquetipo.get("Player").set("speedX",300);
Arquetipo.get("Player").set("speedY",-400);
Arquetipo.get("Player").set("scaleX",1);//Tamaño del player
Arquetipo.get("Player").set("scaleY",1);
Arquetipo.get("Player").set("bounce",0.2); //Rebote del player, entre 0 y 1
Arquetipo.get("Player").set("gravity",500);
Arquetipo.get("Player").set("speedAnimation",20);

//Valores de programación
Arquetipo.get("Player").set("nombreSprite",'playerSprite');
Arquetipo.get("Player").set("spritesheet",'game/assets/images/dude.png');
Arquetipo.get("Player").set("spritesheetX",32);
Arquetipo.get("Player").set("spritesheetY",48);
Arquetipo.get("Player").set("spritesheetY",48);
Arquetipo.get("Player").set("animaciones",new Map());
Arquetipo.get("Player").get("animaciones").set('left',[0,1,2,3]);
Arquetipo.get("Player").get("animaciones").set('right',[5,6,7,8]);
Arquetipo.get("Player").get("animaciones").set('idle',[4]);
Arquetipo.get("Player").set("colisiones",[]); //Entidades con las que colisiona el player.


function getAttributeEntity(name, entityType)
{
    console.assert(Arquetipo.has(entityType), "Tipo de entidad "+entityType+" incorrecta. No se encuentra en el arquetipo");
    console.assert(Arquetipo.get(entityType).has(name),"Atributo "+name+" en el tipo de Entidad " +entityType+ " no encontrado" );
    return Arquetipo.get(entityType).get(name);
}
