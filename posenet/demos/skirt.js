import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xd3d3d3);

var loader = new GLTFLoader().setPath("models/dress/");
loader.load("dress.gltf", function (gltf) {
  gltf.scene.traverse(function (child) {
    if (child.isMesh) {
      // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
      // roughnessMipmapper.generateMipmaps( child.material );
    }
  });

  scene.add(gltf.scene);

  roughnessMipmapper.dispose();

  render();
});

camera.position.z = 5000;

var animate = function () {
  requestAnimationFrame(animate);

  skirt.rotation.x += 0.01;
  skirt.rotation.y += 0.01;

  renderer.render(scene, camera);
};
//animate();
