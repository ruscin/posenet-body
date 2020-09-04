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

var loader = new GLTFLoader();
loader.load(
  "/models/ready-models/helmet.gltf",
  function (gltf) {
    console.log(gltf.scene.children[0]);
    var skirt = gltf.scene.children[0];
    skirt.scale.set(0.5, 0.5, 0.5);
    //scene.add(skirt);
    skirt.position.z = -10;

    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);

  skirt.rotation.x += 0.01;
  skirt.rotation.y += 0.01;

  renderer.render(scene, camera);
};
//animate();
