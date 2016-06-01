Scenery = function()
{
    this._platforms = null;
    
    Object.defineProperty(this,"platforms",{
        get : function(){return this._platforms;}
    });
}

Scenery.prototype.create = function()
{
    this._platforms = game.add.group();
    
	this._platforms.enableBody = true;

	var ground = this._platforms.create(0,game.world.height - 64, 'ground');
	ground.scale.setTo(2,1);
	ground.body.immovable = true;

	//Ahora creamos dos plataformas:
	var ledge = this._platforms.create(-150,250,'ground');
	ledge.scale.setTo(1,0.5);
	ledge.body.immovable = true;
	ledge = this._platforms.create(400,400,'ground');
	ledge.scale.setTo(1,0.5);
	ledge.body.immovable = true;

}


Scenery.prototype.update = function()
{

}

Object.defineProperty(Scenery.prototype,"spriteEntity",{
        get : function(){return this._platforms;}
});

