/*
Este estado se usa para el tiempo de transicion desde cuando se le da a START hasta que empieza el juego de verdad. Tambien se ponen todos los sprites en el juego, y se inicializansus variables
*/

var startingGameState ={
    //Funciones
    preload:function()
    {
        this.game=game;
    },
    create:function()
    { 
        //Inicializamos todas las variables del juego
        //initGlobalsVar();
        this.aux = 0;
        this.timeToBegin = 3;
        
        //Metemos todas las entidades en el juego en forma de sprites, ya que en el siguiente estado, se destruiran
        this.initialEntities();
        
        //Iniciamos el conteo para empezar el juego
        this.initialTiming();
    },
    update:function()
    {
        if(this.aux == 1)
        {
            //Hacemos crecer el numero en tamaño
            this.timeText.fontSize +=1;
            this.aux = 0;
        }
        else { this.aux = 1;}
    },
    
    updateTimeToBegin:function()
    {
        //Funcion que actualiza el tiempo y comprueba que el tiempo no se ha acabado. Cuando se acaba, se lanza el estado PLAY y comienza el juego
        --this.timeToBegin;
        this.timeText.text = this.timeToBegin;
        this.timeText.fontSize = 30;
        if(this.timeToBegin>0)
        {         
            this.game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);            
        }
        else{
            this.timeText.text = '';
            this.game.state.start('play');
        }
    },
    
    initialTiming:function()
    {
        //Cada segundo comprobamos el tiempo restante
        this.game.time.events.add(Phaser.Timer.SECOND, this.updateTimeToBegin, this);
        
        //Se actualiza el texto del tiempo sobrante
        this.timeText = this.game.add.text(this.game.width*0.5, 30, this.timeToBegin,{font: '30px Arial', fill: '#FFFFFF', align: 'center'});
    },
    
    initialEntities:function()
    {
        
        //sound_ambiental.play();
        var sky = this.game.add.tileSprite(0, 0, 750, 550, 'backgroundSprite');
        cloud1 = this.game.add.sprite(450,100,'cloudsSprites','cloud1');
        cloud2 = this.game.add.sprite(450,500,'cloudsSprites','cloud2');
        cloud3 = this.game.add.sprite(50,300,'cloudsSprites','cloud3');
        
        var player = this.game.add.sprite(this.game.width*0.5,this.game.height*0.85,'bird');
        
        player.anchor.set(0.5);
        player.scale.setTo(1.5,1.5);
        var fly = player.animations.add('fly');
        player.animations.play('fly', 10, true);
        
        
    },
    
};