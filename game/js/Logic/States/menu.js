var menuState = {
    counter:0,
    step:Math.PI*2/360,
    preload:function()
    {
        this.snd_select = game.add.audio('snd_selectMenu',0.5);    
    },
    addButton:function(posX, posY, text, font, fill, align, callbackInputUp)
    {
        var txt = game.add.text(posX, posY, text,{font: font,fill: fill, align: align });
        txt.inputEnabled = true;
        if(callbackInputUp != undefined)
            txt.events.onInputUp.add(callbackInputUp);
        txt.events.onInputOver.add(()=>{txt.fill= '#FDFFB5'; txt.style.font = 'bold 35pt TheMinion';}, this);
        txt.events.onInputOut.add(() => {txt.fill = '#FFFFFF';txt.font = 'bold 30pt TheMinion';}, this);
        txt.events.onInputDown.add(()=>{this.snd_select.play();}, this);
        txt.input.useHandCursor = true;
    },
    create:function()
    {         
        var menuBG = game.add.sprite(-70,-5,'menu-bg');
        menuBG.scale.setTo(1,1.25);
        
        game.add.text(game.width*0.2, 20, "ASTEROIDS",{font: 'bold 60pt dimwitgauche',fill: '#FDFFB5', align: 'center' });
        
        this.addButton(50,300,"START",'bold 30pt TheMinion','#FFFFFF','center',this.startGame);
        this.addButton(50,375,"OPTIONS",'bold 30pt TheMinion','#FFFFFF','center');
        this.addButton(50,450,"CREDITS",'bold 30pt TheMinion','#FFFFFF','center');
        
    },
    startGame:function()
    {
        game.state.start('play');
    },
    update:function()
    {
 
    },   
};
