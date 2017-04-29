//game representa el juego
var game = new Phaser.Game(750, 525, Phaser.AUTO, 'game-frame');

//Definimos los distintos estados del juego
game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('startingGame',startingGameState);
game.state.add('menu',menuState);
game.state.add('play',gameState);
game.state.add('over',gameOverState);

game.state.start('boot');


