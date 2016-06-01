var _numStars = 12;
var _finished = false;
var scoreText;
var timeText;
GameManager = function()
{

}

GameManager.prototype.create = function()
{
    game.world.setBounds(0, 0, game.world.width + 100, game.world.height);

    this.sky = game.add.sprite(0,0,'sky2');
    this.sky.scale.setTo(1.2,1.2);
    
	game.add.sprite(520,10,'sun_shiny');
    
    this.snd_main = game.add.audio('snd_game');
    this.snd_main.onStop.add(function() {this.snd_main.play();}, this);
    this.snd_main.play();
    
    game.time.boot();
    
    scoreText = game.add.text(16,16,'Stars: 12', { fontSize:'32px',fill:'#fff'});
	timeText = game.add.text(200,16,'Time: 0', { fontSize:'32px',fill:'#fff'});
    scoreText.fixedToCamera = true;
    timeText.fixedToCamera = true;
    
    this.textFullScreen = game.add.text(630, 10, "R to Resize Screen", { font: "12px Arial", fill: "#ffffff", align: "center" });
    this.textFullScreen.fixedToCamera = true;
}

GameManager.prototype.update = function()
{
    if(_finished)
    {
        player.updatePhysic();
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        {
            _finished = false;
            _numStars = 12;
            this.snd_main.mute = 0;
            serversManager.factoryEntity.get(EntityEnum.Star).create(); 
            
            player.spriteEntity.x = 32;
            player.spriteEntity.y = 450;
            
            this.gameOverText.text = '';
            
            game.time.boot();
            
            scoreText.text = 'Stars: '+_numStars;
        }        
    }
    else{
        timeText.text = 'Time: '+Math.round(game.time.totalElapsedSeconds() *1000)/1000;
        player.update();
    }
}

GameManager.prototype.collectStar = function()
{
    --_numStars;
    scoreText.text = 'Stars: '+_numStars;
    
    if(_numStars == 0)
    {
        _finished = true;
        this.snd_main.mute = 1;
        
        player.spriteEntity.frame = 4;
        player.spriteEntity.animations.stop();   
        player.spriteEntity.body.velocity.x = 0;
        
        var lastTime = Math.round(game.time.totalElapsedSeconds()*1000)/1000;
		this.gameOverText = game.add.text(game.world.width / 2 , game.world.height / 2, 'TIME: ' + lastTime +' seconds\nGAME OVER\nPress SPACE to restart',{ font: '22px Lucida Console', fill: '#fff', align: 'center'});
        this.gameOverText.fixedToCamera = true;
        //Add time to list of webpage
        addTime(lastTime);
    }
}

Object.defineProperty(GameManager.prototype,"isFinished",{
        get : function(){return _finished;}
});


