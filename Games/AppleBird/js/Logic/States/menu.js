var menuState = {
    counter:0,
    step:Math.PI*2/360,
    game:undefined,
    preload:function()
    {
        this.game = game;
        
//        this.snd_select = this.game.add.audio('snd_selectMenu',0.5);    
    },
    addButton:function(posX, posY, text, font, fill, align, callbackInputUp)
    {
        var txt = this.game.add.text(posX, posY, text,{font: font,fill: fill, align: align });
        txt.inputEnabled = true;
        
        if(callbackInputUp != undefined)
            txt.events.onInputUp.add(callbackInputUp);

        txt.input.useHandCursor = true;
    },
    create:function()
    {         
        menuBG = this.game.add.sprite(0,0,'backgroundSprite');
        cloud1 = this.game.add.sprite(100,150,'cloudsSprites','cloud1');
        cloud2 = this.game.add.sprite(0,50,'cloudsSprites','cloud2');
        cloud3 = this.game.add.sprite(450,60,'cloudsSprites','cloud3');
        cloud4 = this.game.add.sprite(0,500,'cloudsSprites','cloud4');
        cloud5 = this.game.add.sprite(450,470,'cloudsSprites','cloud5');
        cloud6 = this.game.add.sprite(300,400,'cloudsSprites','cloud6');
        menuBG.scale.setTo(3.5,2.5);
        cloud1.scale.setTo(4,5);cloud2.scale.setTo(2,2);cloud3.scale.setTo(2,2);
        cloud5.scale.setTo(1,1);cloud4.scale.setTo(1.5,1.5);
        
//        this.game.add.text(this.game.width*0.23, 20, "APPLE BIRD",{font: 'bold 60pt ponderada',fill: '#FDFFB5', align: 'center' });
        
        this.addButton(270,280,"START",'bold 60pt','#000000','center',this.startGame);
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
