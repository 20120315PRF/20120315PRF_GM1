
entityFactory = function(game){
    
    //Variables del juego
    this.game = game;

    this.player = new Player(this.game);
    this.HUD = new HUD(this.game);
    this.explosion = new explosion(this.game);
    this.bulletPlayer = new bulletPlayer(this.game,this.explosion);
    this.bulletEnemy = new bulletEnemy(this.game,this.explosion);
    this.enemiesDummy = new enemyDummy(this.game);

}

entityFactory.prototype.create = function(){
    this.player.create();
    this.explosion.create();
    this.bulletPlayer.create();
    this.enemiesDummy.create();
    this.bulletEnemy.create();
    this.HUD.create();
}

entityFactory.prototype.update = function(){
    this.player.update(this.bulletPlayer);     
    this.enemiesDummy.update(Managers.enemyMgr.velocityInitialsShootEnemyDummy,this.bulletEnemy);
    this.bulletPlayer.update(this.enemiesDummy);
    this.bulletEnemy.update(this.player);
}



