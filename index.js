import * as RODIN from 'rodin/core';
RODIN.start();

const sphere = new R.Sphere(10, new THREE.MeshPhongMaterial({
    side: THREE.double  
}));

sphere.position.set(0,0,-20);
R.Scene.add(sphere);