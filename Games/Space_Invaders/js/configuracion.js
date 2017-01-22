var Configuracion={
    Player:{
        speedX:150,
        scaleX:1,
        scaleY:1,
        gravity:0,
        acceleration:2000,
        drag:1000,
        maxVelocity:150,
        collideWorldBounds:0,
        padding:16,
        lives:4,
    },
    Bullet:{
        speed:400,
        scaleX:0.5,
        scaleY:0.5,
        timeBetweenBullets:300,
    },
    Game:{
        velocityDescendingEnemies:5,
        velocityIncrementDificulty:1,
        scoreEnemyDummy:1,
        scoreEnemyDummy2:5,
        velocityInitialsShootEnemyDummy:2400, //1 disparo cada 5 segundos
    },
    Map:{
        MapOrderCreateEnemyDummy2:[15,0,0,1,0,0,17,
                                   0,0,0,0,2,0,0,
                                   0,0,9,0,0,3,0,
                                   5,0,0,19,0,0,21,
                                   0,7,0,0,0,11,0,
                                   0,0,13,0,0,0,0]
    }
    
};

var pathSprite = 'Games/Space_Invaders/assets/images';
var pathAudio = 'Games/Space_Invaders/assets/audio';

var Sprites={
    space:pathSprite+'/space.png',
    player:pathSprite+'/ship4.png',
    heart:pathSprite+'/heart.png',
    enemy1:pathSprite+'/enemy1.png',
    enemy2:pathSprite+'/enemy3.png',
    enemy3:pathSprite+'/enemy3.png',
    enemy4:pathSprite+'/enemy4.png',
    bulletPlayer:pathSprite+'/bullets.png',
    explosion:pathSprite+'/explode.png',
    loadBar:pathSprite+'/loadBar.png',
    menu:this.pathSprite+'/menu.jpg',
};

var Audios={
    snd_shoot:pathAudio+'/shoot.wav',
    snd_dead:pathAudio+'/dead.wav',
    snd_selectMenu:pathAudio+'/menu.wav',
};
