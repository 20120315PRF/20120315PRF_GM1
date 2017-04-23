
ManagersClass = function(game, entityFactory){
    
    this.gameMgr = new GameManager(game, entityFactory);    
}

ManagersClass.prototype.create = function(){
    this.gameMgr.create();
}

ManagersClass.prototype.update = function(){
    this.gameMgr.update();    
};



