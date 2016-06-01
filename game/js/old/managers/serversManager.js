
ServersManager = function()
{
    this._gameMgr = new GameManager();
    this._factoryEntity = new FactoryEntity();
}

ServersManager.prototype.create = function()
{
    this._gameMgr.create();
    this._factoryEntity.create();
}

ServersManager.prototype.update = function()
{
    this._gameMgr.update();
    this._factoryEntity.update();     
}

Object.defineProperty(ServersManager.prototype,"gameMgr",{
        get : function(){return this._gameMgr;}
});

Object.defineProperty(ServersManager.prototype,"factoryEntity",{
        get : function(){return this._factoryEntity;}
});

Object.defineProperty(ServersManager.prototype,"instance",{
        get : function(){return this._instance;}
});
