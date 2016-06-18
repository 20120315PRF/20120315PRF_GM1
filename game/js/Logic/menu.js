var menuState = {
    counter:0,
    step:Math.PI*2/360,
    preload:function()
    {

    },
    create:function()
    {
        this.buttonStart = game.add.button(game.world.centerX, 400, 'startButton', this.startGame, this, 2, 1, 0);
        this.buttonStart.anchor.setTo(0.5, 0.5);
    },
    startGame:function()
    {
        game.state.start('play');
    },
    update:function()
    {
        var tStep = Math.sin( this.counter ) ;

        this.buttonStart.y = (game.height*0.5) + tStep * 30 ;
        this.buttonStart.rotation += Phaser.Math.degToRad( 0.5 * tStep ) ;
        this.counter += this.step ;    
    },   
};
