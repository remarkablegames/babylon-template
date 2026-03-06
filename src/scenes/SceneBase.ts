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
  onActivate() {
    // Override for scene activation
  }

  /**
   * Called when the scene is deactivated
   */
  onDeactivate() {
    // Override to cleanup
  }

  /**
   * Called every frame while the scene is active
   */
  onUpdate() {
    // Override for per-frame logic
  }

  /**
   * Cleanup when scene is destroyed
   */
  dispose() {
    this.scene.dispose();
  }
}
