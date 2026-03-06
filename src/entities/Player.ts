import type { Scene as BabylonScene, Vector3 } from '@babylonjs/core';
import { Color3, MeshBuilder, StandardMaterial } from '@babylonjs/core';

import { Entity } from './Entity';

/**
 * Example player entity with movement
 */
export class Player extends Entity {
  private moveSpeed: number;

  constructor(scene: BabylonScene, position: Vector3) {
    // Create player mesh (sphere)
    const mesh = MeshBuilder.CreateSphere('player', { diameter: 1 }, scene);
    const material = new StandardMaterial('playerMaterial', scene);
    material.diffuseColor = new Color3(1, 0.4, 0.4);
    material.specularColor = new Color3(0.5, 0.5, 0.5);
    mesh.material = material;
    mesh.position = position;

    super(mesh);

    this.moveSpeed = 5;
  }

  /**
   * Move the player in a direction
   */
  public move(direction: Vector3, deltaTime: number) {
    const movement = direction.scale(this.moveSpeed * deltaTime);
    this.mesh.position.addInPlace(movement);
  }

  /**
   * Set movement speed
   */
  public setSpeed(speed: number) {
    this.moveSpeed = speed;
  }

  /**
   * Update player
   */
  public override update() {
    // Override for player-specific update logic
  }
}
