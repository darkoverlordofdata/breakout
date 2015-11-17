module breakout {

  import Pools = breakout.Pools;
  import Systems = entitas.Systems;

  export class GameController {

    systems:Systems;

    start() {

      this.systems = this.createSystems(Pools.pool);
      this.systems.initialize();

    }

    update(delta:number) {
      this.systems.execute();
    }

    createSystems(pool) {
      return new Systems()
        // Input
        .add(pool.createSystem(breakout.PlayerInputSystem))

        // Update
        .add(pool.createSystem(breakout.MovementSystem))
        .add(pool.createSystem(breakout.CollisionSystem))
        .add(pool.createSystem(breakout.SoundEffectSystem))

        // Render
        .add(pool.createSystem(breakout.AddViewSystem))
        .add(pool.createSystem(breakout.SpriteRenderSystem))
        .add(pool.createSystem(breakout.HudRenderSystem))

        // Destroy
        .add(pool.createSystem(breakout.DestroySystem));

    }
  }
}