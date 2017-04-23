var Configuracion={
    Player:{
        speedX:400,
        scaleX:1,
        scaleY:1,
        gravity:0,
        collideWorldBounds:0,
        padding:16,
    },
    Game:{
        velocityDescending:5,
        dificulty:1,
        scoreApple:1
    },
    
};

var pathSprite = 'Games/AppleBird/assets/images';
var pathAudio = 'Games/AppleBird/assets/audio';

var Sprites={
    background:pathSprite+'/Background.png',
    player:pathSprite+'/player1.png',
    apple:pathSprite+'/apple.png',
    clouds_json:pathSprite+'/Clouds.json',
    clouds_png:pathSprite+'/Clouds.png',
    platform:pathSprite+'/platform.png',
    loadBar:pathSprite+'/loadBar.png',
};

var Audios={
    snd_ambiental:pathAudio+'/Ambiental2.wav',
    snd_death:pathAudio+'/DeathEffect.wav',
    snd_apple:pathAudio+'/DeathEffect.wav',
};
