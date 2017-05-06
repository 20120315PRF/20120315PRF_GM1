
window.onload = function()
{
    path = "Games/Asteroids" 
    //game representa el juego
    
    var config = {forceSetTimeOut: true, width:750, height:600, renderer:Phaser.AUTO, parent:'game-frame'};
    game = new Phaser.Game(config);

    //Definimos los distintos estados del juego
    game.state.add('boot',bootState);
    game.state.add('load',loadState);
    game.state.add('menu',menuState);
    game.state.add('play',gameState);
    game.state.add('over',gameOverState);
    
    game.state.start('boot');
};
