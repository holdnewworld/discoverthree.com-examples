
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  // orbit and map controls do this for us,
  // for fly controls we need to target the camera manually
  app.camera.lookAt( 0, 0, 0 );

  // setup the fly controls. Our App skipped
  // setting up OrbitControls since we didn't load the script,
  // allowing us to set up a different controls manually
  app.controls = new THREE.FlyControls( app.camera );
  app.controls.movementSpeed = 10;
  app.controls.domElement = app.container;
  app.controls.rollSpeed = Math.PI / 24;
  app.controls.autoForward = false;
  app.controls.dragToLook = false;

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );

  app.start();
}

init();
