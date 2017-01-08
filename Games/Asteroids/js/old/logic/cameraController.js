CameraController = function()
{
    
}

CameraController.prototype.create = function()
{
    game.world.camera.follow(player.spriteEntity);
}

CameraController.prototype.update = function()
{
    
}