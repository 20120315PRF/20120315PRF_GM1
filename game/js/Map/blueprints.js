var Blueprints = new Map();

Blueprints.set("Player" , 
               [
                   {name:"CGraphics", object:CGraphics},
                   //{name:"CAnimation", object:CAnimation},
                   {name:"CPhysics", object:CPhysics},
                   {name:"CPlayerController", object:CPlayerController},               
               ]
              );

Blueprints.set("Bullet",
               [
                    //{name:"CGraphicsGroup",object:CGraphicsGroup},
                    {name:"CBulletController",object:CBulletController},
                ]
              );

Blueprints.set("AsteroidSmall",
               [
                    {name:"CAsteroidController",object:CAsteroidController},
                    {name:"CAsteroidPhysic",object:CAsteroidPhysic},
                ]
              );

Blueprints.set("AsteroidMedium",
               [
                    {name:"CAsteroidController",object:CAsteroidController},
                    {name:"CAsteroidPhysic",object:CAsteroidPhysic},
                ]
              );

Blueprints.set("AsteroidLarge",
               [
                    {name:"CAsteroidController",object:CAsteroidController},
                    {name:"CAsteroidPhysic",object:CAsteroidPhysic},
                ]
              );

Blueprints.set("Explosion",
               [
                    {name:"CExplosionController",object:CExplosionController},
                ]
              );