import type { Engine, Scene as BabylonScene } from '@babylonjs/core';

/**
 * Manages the render loop and delta time
 */
export class RenderSystem {
  private engine: Engine;
  private scene: BabylonScene;
  private lastTime = 0;
  private deltaTime = 0;

  constructor(engine: Engine, scene: BabylonScene) {
    this.engine = engine;
    this.scene = scene;
  }

  /**
   * Get the time elapsed since the last frame (in seconds)
   */
  public getDeltaTime(): number {
    return this.deltaTime;
  }

  /**
   * Start the render loop
   */
  public startRenderLoop(onFrame: (deltaTime: number) => void) {
    this.lastTime = performance.now();

    this.engine.runRenderLoop(() => {
      const currentTime = performance.now();
      this.deltaTime = (currentTime - this.lastTime) / 1000;
      this.lastTime = currentTime;

      this.scene.render();
      onFrame(this.deltaTime);
    });
  }

  /**
   * Stop the render loop
   */
  public stopRenderLoop() {
    this.engine.stopRenderLoop();
  }
}
