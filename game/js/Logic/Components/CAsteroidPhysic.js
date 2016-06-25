var Components = Components || [];

Components.CAsteroidPhysic = function(entityType,entity)
{
    this._entityType = entityType;
    this._entity = entity; 
}

Components.CAsteroidPhysic.prototype = 
{
    create:function()
    {
        this.snd_dead = game.add.audio('snd_dead');
    },
    
    update:function()
    {
        if(!globalVar.shipIsVulnerable)
        {
            game.physics.arcade.overlap(globalVar.player.entityGraphic,this._entity.entityGraphic,this.collision,null,this);
        }
        game.physics.arcade.overlap(Logic.EntityFactory.getinstance().Groups.get("Bullet"),this._entity.entityGraphic,this.collision,null,this);
    },
    
    collision:function(other,asteroidSprite)
    {
        var pos = asteroidSprite.position;
        other.kill();
   
        Logic.EntityFactory.getinstance().deleteEntity(this._entity,asteroidSprite);

        var exp = game.add.sprite(pos.x-5,pos.y-10, getAttributeEntity("Explosion",this._entityType));
        exp.animations.add('explode',null,70,false);
        exp.animations.play('explode');

        if(hasAttributeEntity("sizeLess",this._entityType))
        {
            var ent = getAttributeEntity("sizeLess",this._entityType);

            Logic.EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));

            Logic.EntityFactory.getinstance().createEntity(ent,new Phaser.Point(pos.x+10, pos.y+10));
        }

        if(other == globalVar.player.entityGraphic)
        {
            Managers.GameManager.getinstance().destroyShip();
            this.snd_dead.play();
        }
        else{
            Managers.GameManager.getinstance().addScore = getAttributeEntity("score",this._entityType);
        }

        if (globalVar.asteroidGroup && !globalVar.asteroidGroup.countLiving()) 
        {
            Managers.GameManager.getinstance().nextLevel();
        }
    },
    deadEntity:function()
    {
        
    }
};

