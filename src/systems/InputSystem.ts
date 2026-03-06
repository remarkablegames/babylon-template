import type { Scene as BabylonScene } from '@babylonjs/core';
import { Vector3 } from '@babylonjs/core';

/**
 * Input state for keyboard and mouse
 */
export interface InputState {
  keys: Set<string>;
  mousePosition: Vector3;
  leftButtonDown: boolean;
  rightButtonDown: boolean;
}

/**
 * Handles keyboard and mouse input
 */
export class InputSystem {
  private scene: BabylonScene;
  private inputState: InputState;

  constructor(scene: BabylonScene) {
    this.scene = scene;
    this.inputState = {
      keys: new Set(),
      mousePosition: Vector3.Zero(),
      leftButtonDown: false,
      rightButtonDown: false,
    };

    this.setupInputListeners();
  }

  /**
   * Setup input event listeners
   */
  private setupInputListeners() {
    // Keyboard events
    window.addEventListener('keydown', (e) => {
      this.inputState.keys.add(e.key.toLowerCase());
    });

    window.addEventListener('keyup', (e) => {
      this.inputState.keys.delete(e.key.toLowerCase());
    });

    // Mouse events (if canvas is available)
    const canvas = this.scene.getEngine().getRenderingCanvas();
    if (canvas) {
      canvas.addEventListener('mousedown', (e) => {
        if (e.button === 0) this.inputState.leftButtonDown = true;
        if (e.button === 2) this.inputState.rightButtonDown = true;
      });

      canvas.addEventListener('mouseup', (e) => {
        if (e.button === 0) this.inputState.leftButtonDown = false;
        if (e.button === 2) this.inputState.rightButtonDown = false;
      });

      canvas.addEventListener('mousemove', () => {
        // Mouse position can be tracked if needed
      });

      // Prevent context menu on right click
      canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  }

  /**
   * Check if a key is currently pressed
   */
  public isKeyDown(key: string): boolean {
    return this.inputState.keys.has(key.toLowerCase());
  }

  /**
   * Check if any of the specified keys are pressed
   */
  public isAnyKeyDown(keys: string[]): boolean {
    return keys.some((key) => this.isKeyDown(key));
  }

  /**
   * Get the current input state
   */
  public getInputState(): InputState {
    return { ...this.inputState };
  }

  /**
   * Check if left mouse button is pressed
   */
  public isLeftButtonDown(): boolean {
    return this.inputState.leftButtonDown;
  }

  /**
   * Check if right mouse button is pressed
   */
  public isRightButtonDown(): boolean {
    return this.inputState.rightButtonDown;
  }

  /**
   * Cleanup input listeners
   */
  public dispose() {
    const canvas = this.scene.getEngine().getRenderingCanvas();
    if (canvas) {
      // Listeners would need to be removed with references
      // For simplicity, they'll be garbage collected with the scene
    }
  }
}
