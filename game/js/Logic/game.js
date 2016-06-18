
var gameState ={
    counterFontStyle:{font: '20px Arial', fill: '#FFFFFF', align: 'center'},
    timeToBegin: 3,
    begin : false,
    preload:function()
    {
        console.assert(Server.Logic.init(),"Servidor de lógica mal iniciado.");
    },
    create:function()
    {
        Server.Logic.getinstance().preload();
        sound_ambiental.play();
        
        game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);
        
        this.timeText = game.add.text(game.width/2, 30, this.timeToBegin,this.counterFontStyle);
    },
    update:function()
    {
        if(this.begin)
        {
            Server.Logic.getinstance().update();
        }
    },
    
    updateTimeToBegin:function()
    {
        
        this.begin = true;
        --this.timeToBegin;
        this.timeText.text = this.timeToBegin;
        
        if(this.timeToBegin>0)
        {
            this.begin = false;           
            game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);            
        }
        else{
            this.timeText.text = '';
            Server.Logic.getinstance().create();
        }
    }
    
};