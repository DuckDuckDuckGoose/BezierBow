import * as THREE from "https://cdn.skypack.dev/three@v0.135.0";
import {GLTFLoader} from "https://cdn.skypack.dev/three@v0.135.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const light = new THREE.PointLight(0xff0000, 1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new GLTFLoader();

camera.position.z = 5;
light.position.z = 5;
scene.add(light);
scene.add(camera)


function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
