
enemyDummy2 = function(game){
    this.game = game;
    this.numDescending = 30;
    this.finishedRound = 1;
    this.aux_velocityShootEnemyDummy = 0;
    //this.bulletPlayer = new bulletPlayer(game);
}

enemyDummy2.prototype.create = function(){
    
    this.enemiesDummy = this.game.add.group();
    this.enemiesDummy.enableBody = true;
    this.enemiesDummy.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.enemiesDummy.position.x = this.game.width*0.2;
    //Animacion 
    //Se moverá horizontalmente 100 unidades, el tiempo 1 segundo, el efecto phaser.easing, 
    this.animacion = this.game.add.tween(this.enemiesDummy).to({x:100},1500,Phaser.Easing.Linear.None, true, 0, 1500, true);
    //Le decimos a la animacion, que en cada loop descienda:
    this.animacion.onRepeat.add(this.descender,this);
    
    this.initializeNewGroup(-0.15);
    
    return this.enemiesDummy;
}

enemyDummy2.prototype.descender=function()
{
    if(this.numDescending!=0 && this.enemiesDummy.position.y > 40)    
    {
        this.enemiesDummy.y += Configuracion.Game.velocityDescendingEnemies;
        --this.numDescending;
    }
    
}
enemyDummy2.prototype.update = function(velocityShootEnemyDummy, bulletsObject){
    if(this.game.time.now>this.aux_velocityShootEnemyDummy && this.enemiesDummy.position.y > 40)    
    {
        var shooter = this.findEnemyShooter();
        if (shooter)
        {
            bulletsObject.fireBullet(shooter.body.x+16,shooter.body.y+16,shooter.rotation/2*-1);
            this.aux_velocityShootEnemyDummy = this.game.time.now + velocityShootEnemyDummy;
        } 
    }
    
    if(this.enemiesDummy.position.y < 40.1)
    {
        this.enemiesDummy.position.y += 1.7;
        
        if(this.enemiesDummy.position.y>40)
        {
            this.animacion.resume();
        }
    }

}


enemyDummy2.prototype.findEnemyShooter = function()
{
    var livingEnemies = [];

    this.enemiesDummy.forEachAlive(function(enemyDummy){
        livingEnemies.push(enemyDummy);
    });

    var shooter = undefined;
    if (livingEnemies.length > 0)
    {
        var random = rand(0,livingEnemies.length-1);
        shooter=livingEnemies[random];
    }
    else{
        
        //TODO
        //gameMgr.playerKill();
        Managers.enemyMgr.countLivingZero();
        this.initializeNewGroup(-0.45);    
    }
    
    return shooter;
}
enemyDummy2.prototype.createEnemyDummy = function(posX, posY){
    var enemy = this.enemiesDummy.create(posX,posY,'enemy1Sprite');
    enemy.angle = -180;
    //Le decimos al enemigo que tenga su punto de apoyo en el medio
    enemy.anchor.setTo(0.5);
}


enemyDummy2.prototype.getEnemiesDummy = function()
{
    return this.enemiesDummy;
}

enemyDummy2.prototype.indicateFinished = function()
{
    this.finishedRound = 1;
}

enemyDummy2.prototype.initializeNewGroup = function(height)
{
    if(this.finishedRound)
    {
        this.enemiesDummy.position.y = this.game.height*height;
        var counter = 0;
        for(var y = 0; y<6;++y)    
            {
                for(var x = 0; x<7;++x)    
                {
                    if(Configuracion.Map.MapOrderCreateEnemyDummy2[counter]>Managers.enemyMgr.round)
                    {
                        var enemyDummy_exist = this.enemiesDummy.getFirstExists(false);
                        if(enemyDummy_exist)
                        {
                            enemyDummy_exist.reset(x*80, y*30);
                        }
                        else{this.createEnemyDummy(x*80, y*30);}
                    }
                    ++counter;
                }
            }

        
        this.numDescending = 30;
        this.animacion.pause();

        this.finishedRound = 0;
    }
}
