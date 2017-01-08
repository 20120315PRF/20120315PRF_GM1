Stars = function()
{
    this.stars = null;
}

Stars.prototype.create = function()
{
    if(this.stars == null)
    {
        this.stars = game.add.group();

        this.stars.enableBody = true;
    }
    
    for(var i=0; i < 12; ++i)
    {
        var star = this.stars.create(i*73,0,'star');
        
        star.body.gravity.y = 200;
        
        star.body.bounce.y = 0.2+ (1-(i*0.1)) *0.2;
    }
    
    this.snd_getStar = game.add.audio('snd_star');
}

Stars.prototype.update = function()
{
    game.physics.arcade.collide(this.stars,serversManager.factoryEntity.getEntity(EntityEnum.Platform));
    
    game.physics.arcade.overlap(player.spriteEntity,this.stars,this.collectStar, null,this);
}

Stars.prototype.collectStar = function(playerSprite, star)
{
    this.snd_getStar.play();
    
    star.kill();
    
    //Indicamos al gameManager que actualice la puntuación
    serversManager.gameMgr.collectStar();
}

Object.defineProperty(Stars.prototype,"spriteEntity",{
        get : function(){return this.stars;}
});
