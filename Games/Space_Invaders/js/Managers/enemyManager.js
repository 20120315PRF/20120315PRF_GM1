
enemyManager = function(game, entityFactory){
    
    //Variables del juego
    this.game = game;
    this.entityFactory = entityFactory;
    
    this.round = 1;
    this.velocityInitialsShootEnemyDummy = Configuracion.Game.velocityInitialsShootEnemyDummy;
}

enemyManager.prototype.create = function(){
    
}

enemyManager.prototype.update = function(){

}

enemyManager.prototype.countLivingZero = function()
{
    if(this.entityFactory.enemiesDummy.enemiesDummy.countLiving() == 0 && this.entityFactory.enemiesDummy2.enemiesDummy2.countLiving() == 0)
    {
        this.round +=2;
        if (this.velocityInitialsShootEnemyDummy>1700)
        {
            this.velocityInitialsShootEnemyDummy -= 150; //Resto esto al tiempo de tiro de los enemigos
        } 
        this.entityFactory.enemiesDummy.indicateFinished();
        this.entityFactory.enemiesDummy2.indicateFinished();
    }
};


