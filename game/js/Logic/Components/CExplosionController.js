var Components = Components || [];

Components.CExplosionController = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity;
}

Components.CExplosionController.prototype = Object.create(Componente.prototype, 
{
    create:
    {
        value:function()
        {
            //Esta
            this._entity.entityGraphic = game.add.sprite(this._entity.getPosition.x-5,this._entity.getPosition.y-10, getAttributeEntity("nombreSprite",this._entityType));
            this._entity.entityGraphic.animations.add('explode',null,70,false);
            this._entity.entityGraphic.animations.play('explode');
            
            game.time.events.add(Phaser.Timer.SECOND * 0.5, this.deadEntity, this);
        }
    },
    deadEntity:
    {
        value:function()
        {
            console.log("destroy");
            this._entity.entityGraphic.destroy();
        }
    }
});


