var path = "Games/Space_Invaders"; 

//game representa el juego
var game = new Phaser.Game(750, 600, Phaser.AUTO, 'game-frame');

//Definimos los distintos estados del juego
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('startingGame',startingGameState);
game.state.add('menu',menuState);
game.state.add('play',gameState);
game.state.add('over',gameOverState);

game.state.start('boot');



//var game = new Phaser.Game(800, 600, Phaser.AUTO, '', );
//
//
//function preload() {
//
//    game.load.image('fondo', 'assets/images/backgrounds/bg.gif');
//    game.load.image('suelo', 'assets/images/backgrounds/suelo.gif');
//    game.load.image('plataforma', 'assets/images/backgrounds/plataforma.gif');
//
//    game.load.audio('snd_game', ['assets/music/music_main.mp3', 'assets/music/music_main.ogg']);
//
//    this.mario = new Mario(game);
//    this.hud = new Text(game);
//    this.goomba = new Goomba(game);
//    this.coins = new Coins(game,this.hud);
//}
//
//
//function create() {
//
//    // Fondo
//	game.add.sprite(0, 0, 'fondo');
//
//    //  Plataformas y suelo
//    this.plataformas = game.add.group();
//    var suelo = this.plataformas.create(0, game.world.height - 32, 'suelo');
//    suelo.body.immovable = true;
//
//    var plataforma = this.plataformas.create(400, 400, 'plataforma');
//    plataforma.body.immovable = true;
//
//    plataforma = this.plataformas.create(150, 250, 'plataforma');
//    plataforma.body.immovable = true;
//
//    // Cargamos los sonidos del juego 
//    snd_main = game.add.audio('snd_game',1,true);
//    snd_main.play()
//
//    // Creamos a mario
//    this.mario.create();
//    // Creamos las monedas
//    this.coins.create();
//    // Creamos el hud
//    this.hud.create();
//    // Creamos a goomba
//    this.goomba.create();
//
//
//}
//
//function update() {
//    this.coins.update(this.plataformas,this.mario);
//    this.hud.update();
//    this.goomba.update(this.plataformas,this.mario);
//    this.mario.update(this.plataformas);
//}