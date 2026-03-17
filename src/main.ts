import { createEngine, createScene } from './core';

const canvas = document.querySelector<HTMLCanvasElement>('#game');
const spinner = document.querySelector<HTMLDivElement>('#spinner');

if (!canvas) {
  throw new Error('Game canvas not found');
}

const engine = createEngine(canvas);
const scene = createScene(engine);

// Hide spinner when scene is ready
scene.onReadyObservable.addOnce(() => {
  spinner?.remove();
});

// Enable inspector only in development (excluded from production build)
if (import.meta.env.DEV) {
  void import('@babylonjs/inspector').then(({ ShowInspector }) => {
    ShowInspector(scene, {});
  });
}

function startRenderLoop() {
  engine.runRenderLoop(() => {
    scene.render();
  });
}

startRenderLoop();

// Pause when tab is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    engine.stopRenderLoop();
    return;
  }
  startRenderLoop();
});
