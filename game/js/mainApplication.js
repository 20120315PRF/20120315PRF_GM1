training = 0; //1 si es entrenamiento, 0 si es apuesta
createChallenge = 0; //1 si es el que crea partida, 0 si es el que acepta apuesta. Dependiendo de cual sea, saldrá el mismo mapa o uno al azar.  

//game representa el juego
game = new Phaser.Game(750, 600, Phaser.AUTO, 'game-frame', { preload: preload, create: create, update: update, render: render });

function preload() 
{

    game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
    game.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT);
    game.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT);
    
    //Cargamos el sprite sheet del player.
    game.load.spritesheet(Arquetipo.get("Player").get("nombreSprite"),Arquetipo.get("Player").get("spritesheet"),Arquetipo.get("Player").get("spritesheetX"),Arquetipo.get("Player").get("spritesheetY"));
    
   
}

function render() 
{
    
}
function create() 
{
    console.assert(Server.Logic.init(),"Servidor de lógica mal iniciado.");

    var rnd = random();
    console.log(rnd);
}

function update() 
{
    Server.Logic.getinstance().update();
}



//console.log(parseInt((Date.now() / 100))*100);
//Definimos los distintos estados del juego
/*game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',gameState);

game.state.start('boot');
*/