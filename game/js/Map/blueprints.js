var Blueprints = new Map();

Blueprints.set("Player" , 
               [
                   {name:"CGraphics", object:Components.CGraphics},
                   //{name:"CAnimation", object:CAnimation},
                   {name:"CPhysics", object:Components.CPhysics},
                   {name:"CPlayerController", object:Components.CPlayerController},               
               ]
              );

Blueprints.set("Bullet",
               [
                    //{name:"CGraphicsGroup",object:CGraphicsGroup},
                    {name:"CBulletController",object:Components.CBulletController},
                ]
              );

Blueprints.set("AsteroidSmall",
               [
                    {name:"CAsteroidController",object:Components.CAsteroidController},
                    {name:"CAsteroidPhysic",object:Components.CAsteroidPhysic},
                ]
              );

Blueprints.set("AsteroidMedium",
               [
                    {name:"CAsteroidController",object:Components.CAsteroidController},
                    {name:"CAsteroidPhysic",object:Components.CAsteroidPhysic},
                ]
              );

Blueprints.set("AsteroidLarge",
               [
                    {name:"CAsteroidController",object:Components.CAsteroidController},
                    {name:"CAsteroidPhysic",object:Components.CAsteroidPhysic},
                ]
              );