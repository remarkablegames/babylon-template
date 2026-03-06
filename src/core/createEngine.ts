import { Engine } from '@babylonjs/core';

/**
 * Creates and configures the Babylon.js Engine
 */
export function createEngine(canvas: HTMLCanvasElement): Engine {
  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: false,
    stencil: true,
    disableWebGL2Support: false,
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    engine.resize();
  });

  return engine;
}
