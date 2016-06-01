Player = function()
{

}

Player.prototype.create = function(positionX, positionY)
{
   
    if(positionX == null && positionY == null)
    {
        positionX = 32;
        positionY = 450;
    }
    //Esta
    this._playerSprite = game.add.sprite(32,450, 'playerImage');
    //ESTA
    game.physics.arcade.enable(this._playerSprite);
    
    this._playerSprite.body.bounce.y = 0.2; 
    this._playerSprite.body.gravity.y = 500;
    
    //ESTA
	this._playerSprite.body.collideWorldBounds = true;
    
    //ESTA
    this._playerSprite.animations.add('left',[0,1,2,3],10,true);
	this._playerSprite.animations.add('right',[5,6,7,8],10,true);

}

Player.prototype.update = function()
{
    
    game.physics.arcade.collide(this._playerSprite,serversManager.factoryEntity.getEntity(EntityEnum.Platform));

    this._playerSprite.body.velocity.x = 0;

    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A) )
    {
        this._playerSprite.body.velocity.x = -200;

        this._playerSprite.animations.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this._playerSprite.body.velocity.x = 200;

        this._playerSprite.animations.play('right');
    }
    else
    {
        this._playerSprite.animations.stop();

        this._playerSprite.frame = 4;
    }

    if((game.input.keyboard.isDown(Phaser.Keyboard.UP) ||game.input.keyboard.isDown(Phaser.Keyboard.W)) && this._playerSprite.body.touching.down)
    {
        this._playerSprite.body.velocity.y = -400;
        
    }

}

Player.prototype.updatePhysic = function()
{
    game.physics.arcade.collide(this._playerSprite,serversManager.factoryEntity.getEntity(EntityEnum.Platform));
    
}
Object.defineProperty(Player.prototype,"spriteEntity",{
        get : function(){return this._playerSprite;}
});
