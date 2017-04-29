
Apple = function(game){
    this.game = game;
}

Apple.prototype.create = function(){
    this.apples = this.game.add.group();
    this.apples.enableBody = true;
    this.apples.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.apples.createMultiple(30, 'appleSprite');
}
Apple.prototype.update = function(){

}