import type { Engine } from '@babylonjs/core';
import {
  Color3,
  Color4,
  HemisphericLight,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Vector3,
} from '@babylonjs/core';

import { createCamera } from './createCamera';

/**
 * Creates the default scene with a rotating cube
 */
export function createScene(engine: Engine): Scene {
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.1, 0.1, 0.15, 1);

  // Create camera
  const camera = createCamera(scene);
  scene.activeCamera = camera;

  // Create light
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // Create rotating cube
  const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
  const material = new StandardMaterial('boxMaterial', scene);
  material.diffuseColor = new Color3(0.4, 0.8, 1);
  material.specularColor = new Color3(0.2, 0.2, 0.2);
  box.material = material;

  // Animation loop
  scene.registerBeforeRender(() => {
    box.rotation.y += 0.01;
    box.rotation.x += 0.005;
  });

  return scene;
}
