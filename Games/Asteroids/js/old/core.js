/**
Core module of the game: the logic of the game
*/

game = new Phaser.Game(750, 600, Phaser.AUTO, 'game-frame');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',gameState);

game.state.start('boot');