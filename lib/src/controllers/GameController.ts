module breakout {
  "use strict";

  import Pools = breakout.Pools;
  import Systems = entitas.Systems;
  import Entity = entitas.Entity;

  /**
   * Game Controller
   */
  export class GameController {

    systems:Systems;

    start() {

      this.systems = this.createSystems(Pools.pool);
      this.systems.initialize();

    }

    createSystems(pool) {
      return new Systems()
        .add(pool.createSystem(breakout.InitializeLevel))
        .add(pool.createSystem(breakout.Renderer))
        .add(pool.createSystem(breakout.AnimationUpdater))
        .add(pool.createSystem(breakout.SpriteBodyUpdater))
        .add(pool.createSystem(breakout.BlockHit))
        .add(pool.createSystem(breakout.PaddleHit))
        .add(pool.createSystem(breakout.PaddleMovement))
        .add(pool.createSystem(breakout.BallDeathChecker))
        .add(pool.createSystem(breakout.LevelChanger))
        .add(pool.createSystem(breakout.AddViewSystem))
        .add(pool.createSystem(breakout.DestroySystem));

    }

    update(delta:number) {
      this.systems.execute();
    }
    
    /**
     * Stop the entitas engine
     */
    stop() {
      var entities = Pools.pool.getEntities();
      for (var i = 0, entitiesLength = entities.length; i < entitiesLength; i++) {
        var e:Entity = entities[i];
        e.setDestroy(true);
      }
      /**
      * Reset entitas memory
      * todo: is there a better way to do this?
      */
      Pools._pool = null;
      Entity.alloc = null;    
    }
  }
}
