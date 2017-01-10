
enemyDummy = function(game){
    this.game = game;
    this.numDescending = 30;
    
    this.aux_velocityShootEnemyDummy = 0;
    //this.bulletPlayer = new bulletPlayer(game);
}

enemyDummy.prototype.create = function(){
    
    this.enemiesDummy = this.game.add.group();
    this.enemiesDummy.enableBody = true;
    this.enemiesDummy.physicsBodyType = Phaser.Physics.ARCADE;
    
    for(var y = 0; y<6;++y)    
    {
        for(var x = 0; x<7;++x)    
        {
            this.createEnemyDummy(x*80, y*30);
        }
    }
    this.enemiesDummy.position = new Phaser.Point(this.game.width*0.2,this.game.height*0.08);
    
    //Animacion 
    //Se moverá horizontalmente 100 unidades, el tiempo 1 segundo, el efecto phaser.easing, 
    var animacion = this.game.add.tween(this.enemiesDummy).to({x:100},1500,Phaser.Easing.Linear.None, true, 0, 1500, true);
    //Le decimos a la animacion, que en cada loop descienda:
    animacion.onRepeat.add(this.descender,this);

}

enemyDummy.prototype.descender=function()
{
    if(this.numDescending!=0)    
    {
        this.enemiesDummy.y += Configuracion.Game.velocityDescendingEnemies;
        --this.numDescending;
    }
    
}
enemyDummy.prototype.update = function(velocityShootEnemyDummy, bulletsObject){
    if(this.game.time.now>this.aux_velocityShootEnemyDummy)    
    {
        var shooter = this.findEnemyShooter();
        if (shooter)
        {
            bulletsObject.fireBullet(shooter.body.x+16,shooter.body.y+16,shooter.rotation/2*-1);
            this.aux_velocityShootEnemyDummy = this.game.time.now + velocityShootEnemyDummy;
        } 
    }

}


enemyDummy.prototype.findEnemyShooter = function()
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
        gameMgr.playerKill();
    }
    
    return shooter;
}
enemyDummy.prototype.createEnemyDummy = function(posX, posY){
    var enemy = this.enemiesDummy.create(posX,posY,'enemy1Sprite');
    enemy.angle = -180;
    //Le decimos al enemigo que tenga su punto de apoyo en el medio
    enemy.anchor.setTo(0.5);
}


enemyDummy.prototype.getEnemiesDummy = function()
{
    return this.enemiesDummy;
}
