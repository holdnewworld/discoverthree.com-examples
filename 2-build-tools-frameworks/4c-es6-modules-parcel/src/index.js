import { Color } from 'three';
import App from './vendor/App.module.js';

import initLights from './lights.js';
import loadModels from './models.js';

function init() {

  const app = new App( '#container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 7.5 );

  initLights( app.scene );
  loadModels( app.scene );

  app.start();

}

init();
