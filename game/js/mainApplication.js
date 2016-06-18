

//game representa el juego
game = new Phaser.Game(750, 600, Phaser.AUTO, 'game-frame');

//function preload() 
//{
//    //  This will run in Canvas mode, so let's gain a little speed and display
//    game.renderer.clearBeforeRender = false;
//    game.renderer.roundPixels = true;
//    
//    game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
//    game.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT);
//    game.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT);
//    game.input.keyboard.addKeyCapture(Phaser.Keyboard.UP);
//    game.input.keyboard.addKeyCapture(Phaser.Keyboard.DOWN);
//    
//    game.physics.startSystem(Phaser.Physics.ARCADE);
//    
//    //Cargamos el sprite sheet del player.
//    //game.load.spritesheet(Arquetipo.get("Player").get("nombreSprite"),Arquetipo.get("Player").get("spritesheet"),Arquetipo.get("Player").get("spritesheetX"),Arquetipo.get("Player").get("spritesheetY"));
//    
//    game.load.image(getAttributeEntity("nombreSprite","Bullet"), getAttributeEntity("sprite","Bullet"));
//    game.load.image(getAttributeEntity("nombreSprite","Player"), getAttributeEntity("sprite","Player"));
//    game.load.image(getAttributeEntity("nombreSprite","AsteroidSmall"), getAttributeEntity("sprite","AsteroidSmall"));
//    game.load.image(getAttributeEntity("nombreSprite","AsteroidMedium"), getAttributeEntity("sprite","AsteroidMedium"));
//    game.load.image(getAttributeEntity("nombreSprite","AsteroidLarge"), getAttributeEntity("sprite","AsteroidLarge"));
//    
//    game.load.audio('snd_star',['game/assets/audio/shoot.wav']);
//    game.load.audio('snd_ambiental',['game/assets/audio/space2.ogg']);
//    game.load.audio('snd_dead',['game/assets/audio/dead.wav']);
//    
//    
//    
//    game.load.spritesheet('explosionSmall', 'game/assets/images/explosion.png', 25, 25, 5);
//    
//    console.assert(Server.Logic.init(),"Servidor de lógica mal iniciado.");
//}
//
//function render() 
//{
//
//}
//function create() 
//{      
//    this.snd_ambiental = game.add.audio('snd_ambiental',0.5);
//    this.snd_ambiental.play();
//    Server.Logic.getinstance().create();
////    this.snd_ambiental = game.add.audio('snd_ambiental',1,true);
////    this.snd_ambiental.play();
//    
//}
//
//function update() 
//{
//    Server.Logic.getinstance().update();
//}



//console.log(parseInt((Date.now() / 100))*100);
//Definimos los distintos estados del juego
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',gameState);
game.state.add('over',gameOverState);

game.state.start('boot');
