var Blueprints = new Map();

Blueprints.set("Player" , 
               [
                   {name:"CGraphics", object:Components.CGraphics},
                   {name:"CPhysics", object:Components.CPhysics},
                   {name:"CPlayerController", object:Components.CPlayerController},               
               ]
              );

Blueprints.set("Bullet",
               [
                    {name:"CBulletController",object:Components.CBulletController},
                ]
              );

Blueprints.set("Enemy",
               [
                    {name:"CGraphics", object:Components.CGraphics},
                    {name:"CPhysics", object:Components.CPhysics},
                    {name:"CEnemyController", object:Components.CEnemyController},
                ]
              );

Blueprints.set("Explosion",
               [
                    {name:"CExplosionController",object:Components.CExplosionController},
                ]
              );