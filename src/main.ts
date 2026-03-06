import './style.css';

import { ShowInspector } from '@babylonjs/inspector';

import { settings } from './config';
import { createEngine, createScene } from './core';
import { InputSystem, RenderSystem } from './systems';

/**
 * Babylon.js Template - Main Entry Point
 *
 * This template provides a structured foundation for building
 * Babylon.js games with a modular architecture.
 */

// Get canvas element
const canvas = document.getElementById('game') as HTMLCanvasElement;

// Create engine
const engine = createEngine(canvas);

// Create scene
const scene = createScene(engine);

// Enable inspector in debug mode
if (settings.debug) {
  ShowInspector(scene, {});
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
  } else {
    renderSystem.startRenderLoop(() => {
      // Update logic
    });
  }
});
