var Configuracion={
    Player:{
        speedX:300,
        scaleX:1,
        scaleY:1,
        gravity:0,
        acceleration:300,
        drag:150,
        maxVelocity:200,
        collideWorldBounds:0,
        padding:16,
        lives:3,
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
        scoreEnemyDummy:10,
    },
};

var pathSprite = 'Games/Space_Invaders/assets/images';
var pathAudio = 'Games/Space_Invaders/assets/audio';

var Sprites={
    space:pathSprite+'/space.png',
    player:pathSprite+'/ship4.png',
    heart:pathSprite+'/heart.png',
    enemy1:pathSprite+'/enemy1.png',
    enemy2:pathSprite+'/enemy2.png',
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
