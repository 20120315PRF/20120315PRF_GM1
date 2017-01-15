
enemyDummy2 = function(game){
    this.game = game;
    this.numDescending = 30;
    this.finishedRound = 1;
    this.aux_velocityShootEnemyDummy = 0;
    //this.bulletPlayer = new bulletPlayer(game);
}

enemyDummy2.prototype.create = function(){
    
    this.enemiesDummy2 = this.game.add.group();
    this.enemiesDummy2.enableBody = true;
    this.enemiesDummy2.physicsBodyType = Phaser.Physics.ARCADE;
    
    this.enemiesDummy2.position.x = this.game.width*0.2;
    //Animacion 
    //Se moverá horizontalmente 100 unidades, el tiempo 1 segundo, el efecto phaser.easing, 
    this.animacion = this.game.add.tween(this.enemiesDummy2).to({x:100},1500,Phaser.Easing.Linear.None, true, 0, 1500, true);
    //Le decimos a la animacion, que en cada loop descienda:
    this.animacion.onRepeat.add(this.descender,this);
    
    this.initializeNewGroup(-0.15);
}

enemyDummy2.prototype.descender=function()
{
    if(this.numDescending!=0 && this.enemiesDummy2.position.y > 40)    
    {
        this.enemiesDummy2.y += Configuracion.Game.velocityDescendingEnemies;
        --this.numDescending;
    }
    
}
enemyDummy2.prototype.update = function(velocityShootEnemyDummy, bulletsObject){
    if(this.game.time.now>this.aux_velocityShootEnemyDummy+200 && this.enemiesDummy2.position.y > 40)    
    {
        var shooter = this.findEnemyShooter();
        if (shooter)
        {
            bulletsObject.fireBullet(shooter.body.x+16,shooter.body.y+16,shooter.rotation);
            this.aux_velocityShootEnemyDummy = this.game.time.now + velocityShootEnemyDummy+200;
        } 
    }
    
    if(this.enemiesDummy2.position.y < 40.1)
    {
        this.enemiesDummy2.position.y += 1.7;
        
        if(this.enemiesDummy2.position.y>40)
        {
            this.animacion.resume();
        }
    }
    
    this.setRotation();
    
}
enemyDummy2.prototype.setRotation = function()
{
    var livingEnemies = [];

    this.enemiesDummy2.forEachAlive(function(enemyDummy){
        livingEnemies.push(enemyDummy);
    });
    for(var i =0;i<livingEnemies.length;++i)
    {
        var positionEnemy= this.enemiesDummy2.toGlobal(livingEnemies[i].position);
        var player = Managers.enemyMgr.entityFactory.player.player;
        livingEnemies[i].rotation = Math.atan2(player.position.y - positionEnemy.y,player.position.x - positionEnemy.x);
    }
}

enemyDummy2.prototype.findEnemyShooter = function()
{
    var livingEnemies = [];

    this.enemiesDummy2.forEachAlive(function(enemyDummy){
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
    var enemy = this.enemiesDummy2.create(posX,posY,'enemy2Sprite');
    //Le decimos al enemigo que tenga su punto de apoyo en el medio
    enemy.angle = 90;
    enemy.anchor.setTo(0.5,0.5);
}


enemyDummy2.prototype.getEnemiesDummy2 = function()
{
    return this.enemiesDummy2;
}

enemyDummy2.prototype.indicateFinished = function()
{
    this.finishedRound = 1;
}

enemyDummy2.prototype.initializeNewGroup = function(height)
{
    if(this.finishedRound)
    {
        this.enemiesDummy2.position.y = this.game.height*height;
        var counter = 0;
        for(var y = 0; y<6;++y)    
            {
                for(var x = 0; x<7;++x)    
                {
                    if(Configuracion.Map.MapOrderCreateEnemyDummy2[counter]<=Managers.enemyMgr.round &&
                      Configuracion.Map.MapOrderCreateEnemyDummy2[counter] != 0)
                    {
                        var enemyDummy_exist = this.enemiesDummy2.getFirstExists(false);
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
