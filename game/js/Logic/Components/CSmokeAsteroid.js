var Components = Components || [];

Components.CSmokeAsteroid = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

Components.CSmokeAsteroid.prototype = 
{
    create:function()
    {
        this.emitter = game.add.emitter(game.world.centerX, game.world.centerY,400);
        this.emitter.makeParticles('smokeAsteroids');
        this.emitter.gravity = 200;
        this.emitter.livespan = 1000;
        this.emitter.setAlpha(1,0,1000);
        this.emitter.setScale(0.2, 0, 0.1, 0, 1000);

        this.emitter.start(false, 1000, 50);
    },
    
    update:function()
    {
        var px = this._entity.entityGraphic.body.velocity.x;
        var py = this._entity.entityGraphic.body.velocity.y;
        
        px*=-1;
        py*=-1;
        
        this.emitter.minParticleSpeed.set(px, py);
        this.emitter.maxParticleSpeed.set(px, py);

        this.emitter.emitX = this._entity.entityGraphic.x;
        this.emitter.emitY = this._entity.entityGraphic.y;
    },

    deadEntity:function()
    {
        this.emitter.destroy();
    }
};

