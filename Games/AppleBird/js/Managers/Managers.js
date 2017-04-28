
ManagersClass = function(game, entityFactory){
    
//    this.gameMgr = new GameManager(game, entityFactory); 
    this.mapMgr = new MapManager(game, entityFactory); 
}

ManagersClass.prototype.create = function(){
//    this.gameMgr.create();
    this.mapMgr.create();
}

ManagersClass.prototype.update = function(){
//    this.gameMgr.update();  
    this.mapMgr.update(); 
}
ManagersClass.prototype.getMapMgr= function()
{
    return this.mapMgr;
};
