import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer({alpha:false});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x3d3d3d,1)
document.body.appendChild(renderer.domElement);

var skirt;

var loader = new GLTFLoader();

// Load a glTF resource
loader.load(
  // resource URL
  "models/dress/clothes_no_back.gltf",
  // called when the resource is loaded
  function (gltf) {
    scene.add(gltf.scene);
    skirt = gltf.scene;
    console.log("skirt", skirt);
    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
  },
  // called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
    console.log(error);
  }
);

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame(animate);

  skirt.rotation.x += 0.01;
  skirt.rotation.y += 0.01;
  skirt.scale.set(0.01,0.01,0.01);

  renderer.render(scene, camera);
};

animate();
