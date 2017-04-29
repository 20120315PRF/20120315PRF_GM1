
Clouds = function(game){
    this.game = game;
}

Clouds.prototype.create = function(){
    cloud1 = this.game.add.sprite(450,100,'cloudsSprites','cloud1');
    cloud2 = this.game.add.sprite(450,500,'cloudsSprites','cloud2');
    cloud3 = this.game.add.sprite(50,300,'cloudsSprites','cloud3');
    cloud4 = this.game.add.sprite(50,-100,'cloudsSprites','cloud4');
    cloud5 = this.game.add.sprite(450,-300,'cloudsSprites','cloud5');
    cloud6 = this.game.add.sprite(50,-500,'cloudsSprites','cloud6');
    
    this.clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6];

    for (i = 0; i < this.clouds.length; i++) { 
        this.clouds[i].scale.setTo(1.5,1.5);
    };
}
Clouds.prototype.update = function(){
    for (i = 0; i < this.clouds.length; i++) { 
        this.clouds[i].position.y += 5;
        
        if (this.clouds[i].position.y > 625)
        {
            this.clouds[i].position.y = -500
        }
    }; 
}