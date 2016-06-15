
var emitter;

CExplosionController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

CExplosionController.prototype.create = function()
{
 
        //Esta
    var exp = game.add.sprite(pos.x-5,pos.y-10, getAttributeEntity("Explosion",this._entityType));
	exp.animations.add('explode',null,50,false);
    exp.animations.play('explode');
}

CExplosionController.prototype.update = function()
{  

}
CExplosionController.prototype.explode = function (pos) {  

}

