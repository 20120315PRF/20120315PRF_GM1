
var gameState ={
    preload:function()
    {
        console.assert(Server.Logic.init(),"Servidor de lógica mal iniciado.");
        
    },
    create:function()
    { 
        this.begin = false;
        this.timeToBegin = 3;
        
        initGlobalsVar();
        
        Server.Logic.getinstance().preload();
        
        sound_ambiental.play();
        
        this.game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);
        
        this.timeText = this.game.add.text(this.game.width*0.5, 30, this.timeToBegin,{font: '40px Arial', fill: '#FFFFFF', align: 'center'});
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
            this.game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);            
        }
        else{
            this.timeText.text = '';
            Server.Logic.getinstance().create();
        }
    }
    
};