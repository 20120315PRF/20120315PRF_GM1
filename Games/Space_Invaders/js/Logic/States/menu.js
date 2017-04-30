var menuState = {
    counter:0,
    step:Math.PI*2/360,
    game:undefined,
    preload:function()
    {
        this.game = game;
        
        this.snd_select = this.game.add.audio('snd_selectMenu',0.5);    
    },
    addButton:function(posX, posY, text, font, fill, align, callbackInputUp)
    {
        var txt = this.game.add.text(posX, posY, text,{font: font,fill: fill, align: align });
        txt.inputEnabled = true;
        
        if(callbackInputUp != undefined)
            txt.events.onInputUp.add(callbackInputUp);
        
        
//        txt.events.onInputOver.add({txt.fill= '#FDFFB5'; txt.style.font = 'bold 35pt TheMinion';}, this);
//        txt.events.onInputOut.add( {txt.fill = '#FFFFFF';txt.font = 'bold 30pt TheMinion';}, this);
//        txt.events.onInputDown.add(()=>{this.snd_select.play();}, this);
        
        
        txt.input.useHandCursor = true;
    },
    create:function()
    {         
        var menuBG = this.game.add.sprite(0,0,'space');
        menuBG.scale.setTo(1,1.25);
        
        this.game.add.text(this.game.width*0.1, 20, "SPACE INVADERS",{font: 'bold 40pt ponderada',fill: '#FDFFB5', align: 'center' });
        
        this.addButton(250,450,"PRESS START",'bold 25pt ponderada','#2e7d32','center',this.startGame);
        //this.addButton(50,375,"OPTIONS",'bold 30pt TheMinion','#FFFFFF','center');
        //this.addButton(50,450,"CREDITS",'bold 30pt TheMinion','#FFFFFF','center');
        
    },
    startGame:function()
    {
        this.game.state.start('startingGame');
    },
    update:function()
    {
 
    },   
};
