
var gameState ={
    preload:function()
    {
        console.assert(Server.Logic.init(),"Servidor de lógica mal iniciado.");
        
    },
    create:function()
    { 
        this.aux = 0;
        this.begin = false;
        this.timeToBegin = 3;
        
        initGlobalsVar();
        
        Server.Logic.getinstance().preload();
        
        //sound_ambiental.play();
        
        this.game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);
        
        this.timeText = this.game.add.text(this.game.width*0.5, 30, this.timeToBegin,{font: '30px Arial', fill: '#FFFFFF', align: 'center'});
    },
    update:function()
    {
        if(this.begin)
        {
            Server.Logic.getinstance().update();
        }
        else{
            if(this.aux == 1)
            {
                this.timeText.fontSize +=1;
                this.aux = 0;
            }
            else { this.aux = 1;}
        }
    },
    
    updateTimeToBegin:function()
    {
        
        this.begin = true;
        --this.timeToBegin;
        this.timeText.text = this.timeToBegin;
        this.timeText.fontSize = 30;
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