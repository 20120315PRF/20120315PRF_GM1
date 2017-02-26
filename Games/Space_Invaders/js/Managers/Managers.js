
ManagersClass = function(game, entityFactory){
    
    this.gameMgr = new GameManager(game, entityFactory);        
    this.enemyMgr = new enemyManager(game, entityFactory);
}

ManagersClass.prototype.create = function(){
    this.gameMgr.create();
    this.enemyMgr.create();
}

ManagersClass.prototype.update = function(){
    this.gameMgr.update();     
    this.enemyMgr.update();
};



