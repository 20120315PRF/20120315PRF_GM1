
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
        
        game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);
        
        this.timeText = game.add.text(game.width*0.5, 30, this.timeToBegin,globalVar.fontStyle);
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