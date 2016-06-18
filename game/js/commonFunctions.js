var seed  = Date.now();

function rand(a,b)
{
    seed = (seed * 9301 + 49297) % 233280
    var sumar =  (b == undefined)?0:a -1 ;
    var multiplicar = (b==undefined)?a:b;
    return Math.min(multiplicar,sumar+Math.ceil(seed / (233280.0)*multiplicar));
};

var globalVar = 
{

};
function initGlobalsVar()
{
    globalVar.training= 1; //1 si es entrenamiento, 0 si es apuesta
    globalVar.createChallenge = 0; //1 si es el que crea partida, 0 si es el que acepta apuesta. Dependiendo de cual sea, saldrá el mismo mapa o uno al azar.  
    globalVar.fontStyle={font: '20px Arial', fill: '#FFFFFF', align: 'center'};
    globalVar.score=0;
    globalVar.shipDestroyed=false;
    globalVar.shipIsVulnerable=false;
    globalVar.startingAsteroid=getAttributeEntity("startingAteroids","Map");
    globalVar.asteroidGroup=null;
    globalVar.player=null;
}
