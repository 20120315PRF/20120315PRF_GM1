var menuState = {
    counter:0,
    step:Math.PI*2/360,
    preload:function()
    {
        var keyR = game.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.onPressR,this);
    },
    create:function()
    {
        this.sky = game.add.sprite(0,0,'sky');

        this.buttonStart = game.add.button(game.world.centerX, 400, 'startButton', this.startGame, this, 2, 1, 0);
        this.buttonStart.anchor.setTo(0.5, 0.5);

        this.textFullScreen = game.add.text(630, 10, "R to Resize Screen", { font: "12px Arial", fill: "#ffffff", align: "center" });
        this.textFullScreen.fixedToCamera = true;
    },
    startGame:function()
    {
        game.state.start('play');
    },
    update:function()
    {
        var tStep = Math.sin( this.counter ) ;

        this.buttonStart.y = (game.height/2) + tStep * 30 ;
        this.buttonStart.rotation += Phaser.Math.degToRad( 0.5 * tStep ) ;
        this.counter += this.step ;    
    },   
    
    onPressR:function()
    {
        (game.scale.isFullScreen)? game.scale.stopFullScreen():game.scale.startFullScreen(false);
    }
};
