import type { Engine, Scene as BabylonScene } from '@babylonjs/core';

/**
 * Base class for all game scenes
 */
export abstract class SceneBase {
  protected scene: BabylonScene;
  protected engine: Engine;

  constructor(engine: Engine, scene: BabylonScene) {
    this.engine = engine;
    this.scene = scene;
  }

  /**
   * Called when the scene is activated
   */
  public onActivate() {
    // Override for scene activation
  }

  /**
   * Called when the scene is deactivated
   */
  public onDeactivate() {
    // Override to cleanup
  }

  /**
   * Called every frame while the scene is active
   */
  public onUpdate() {
    // Override for per-frame logic
  }

  /**
   * Cleanup when scene is destroyed
   */
  public dispose() {
    this.scene.dispose();
  }
}
