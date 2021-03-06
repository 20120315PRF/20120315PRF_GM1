var Configuracion={
    Player:{
        speedX:400,
        scaleX:1,
        scaleY:1,
        gravity:0,
        collideWorldBounds:1,
        padding:16,
        lives:2,
        livesCurrent:2,
    },
    Game:{
        velocityDescendingInitial:175,
        velocityDescendingCurrent:175,
        scoreApple:1,
        scoreHeight:0,
    },
    
};

var Plataformas=[
    [0,150,300,450],
    [0,150,300,600],
    [0,150,450,600],
    [0,300,450,600],
    [150,300,450,600],
    [0,300,600],
    [0,300,450],
    [0,150,450],
    [150,450,600],
    [150,300,600],
    [150,300,450]
];

var Manzanas=[
    [675],
    [525],
    [375],
    [225],
    [75],
    [225,525],
    [225,675],
    [375,675],
    [75,375],
    [75,525],
    [75,675]
];

var pathSprite = 'Games/AppleBird/assets/images';
var pathAudio = 'Games/AppleBird/assets/audio';

var Sprites={
    background:pathSprite+'/Background.png',
    player:pathSprite+'/player1.png',
    apple:pathSprite+'/apple.png',
    clouds_json:pathSprite+'/clouds.json',
    clouds_png:pathSprite+'/Clouds.png',
    platform1:pathSprite+'/platform1.png',
    loadBar:pathSprite+'/loadBar.png',
    heart:pathSprite+'/heart.png',
};

var Audios={
    snd_ambiental:pathAudio+'/Ambiental2.wav',
    snd_death:pathAudio+'/DeathEffect.wav',
    snd_apple:pathAudio+'/DeathEffect.wav',
};
