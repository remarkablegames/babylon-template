import './style.css';

import { settings } from './config';
import { createEngine, createScene } from './core';
import { InputSystem, RenderSystem } from './systems';

// Get canvas element
const canvas = document.getElementById('game') as HTMLCanvasElement;

// Create engine
const engine = createEngine(canvas);

// Create scene
const scene = createScene(engine);

// Enable inspector in development (excluded from production)
if (settings.debug) {
  void import('@babylonjs/inspector').then(({ ShowInspector }) => {
    ShowInspector(scene, {});
  });
}

// Create systems
new InputSystem(scene);
const renderSystem = new RenderSystem(engine, scene);

// Start render loop
renderSystem.startRenderLoop(() => {
  // Update systems
  // Add your game update logic here
});

// Handle visibility change (pause when tab is hidden)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    engine.stopRenderLoop();
    return;
  }

  renderSystem.startRenderLoop(() => {
    // Update logic
  });
});
