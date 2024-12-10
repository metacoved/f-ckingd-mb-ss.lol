import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/+esm';
import { addGrids } from "./grids.js";
import { addText } from "./text.js";
import { addImg } from "./img.js";
import { addSky } from "./sky.js";
import { runAni } from "./ani.js";
import { playSound } from "./music.js";

await new Promise(res => {
  document.body.onpointerup = () => {
    setTimeout(res, 3000)
  }
});
setTimeout(() => playSound("spring"), 700);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = -100;
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
renderer.domElement.id = "cvs";

document.body.appendChild( renderer.domElement );

addSky(scene);
addGrids(scene);

// lights
const light = new THREE.AmbientLight(0xffffff, 1);
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5);
directionalLight.position.y = 20;
directionalLight.position.x = 20;
directionalLight.position.z = 12;
const directionalLightTarget = new THREE.Object3D();
directionalLightTarget.position.copy(new THREE.Vector3(0, 0, -10));
directionalLight.target = directionalLightTarget;
scene.add(light, directionalLightTarget, directionalLight);

const text = addText("happy birthday!!!", scene);

runAni([
  { dur: 0, to: [0, 0, 100] },
  { dur: 1, to: [1, 0, 0] },
  { dur: 2, to: [0, 0, 0] },
  { dur: 1, to: [1, 1, 1] },
  { dur: .7, to: [1, 1, -399] },
], text);

const text2 = addText("jk", scene, "orange");
runAni([
  { dur: 0, to: [-100, -3, -7] },
  { dur: 4, to: [0, 2, -2] },
  { dur: 2, to: [1, 1, 0] },
  { dur: 2, to: [100, 1, 0] },
], text2);
setTimeout(() => playSound("vineboom"), 3700);
const text3 = addText("Add Text", scene, "green");
runAni([
  { dur: 0, to: [-100, -4, -7] },
  { dur: 4, to: [0, 2, -2] },
  { dur: 2, to: [1.5, 1, 0] },
  { dur: 2, to: [100, 1, 0] },
], text3);


camera.position.z = 5;

const img = addImg("a", 12, 12, scene);
runAni([
  { dur: 0, to: [-100, 100, 0] },
  { dur: 5, to: [2, -6, -13] },
  { dur: 4, to: [-6, 5, -5], run: () => img.rotation.y += .02 },
  { dur: 3, to: [5, 2, -1] },
  { dur: 2, to: [0, .5, 2], run: () => {img.rotation.z += .01; img.rotation.x += .002} },
  { dur: 1, to: [0, -9999, 2] },
], img);

const jumpscare = addImg("b", 12, 12, scene);
runAni([
  { dur: 0, to: [0, 1000, 0] },
  { dur: 7.5, to: [0, 600, 0] },
  { dur: 0, to: [0, 0, 20] },
  { dur: 2, to: [0, 0, 2.5] },
  { dur: 1, to: [9, 0, 2.5] },
  { dur: 1, to: [0, 999, 2.5] },
], jumpscare);
setTimeout(() => playSound("fnaf"), 9400);
setTimeout(() => playSound("numa"), 11500);

const text4 = addText("that was funny lol", scene, "fuchsia");
runAni([
  { dur: 0, to: [300, 300, 300] },
  { dur: 12, to: [10, -2, -20] },
  { dur: 3, to: [0, 3, 1] },
  { dur: 2, to: [-2, .2, -6] },
  { dur: 1, to: [-9999, 1, 0] },
], text4);

setTimeout(() => window.location = "https://www.google.com/search?q=how+to+make+a+pipe+bomb", 17500);
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
  text2.rotation.y += .03;
	renderer.render(scene, camera);
}
document.body.onclick = null;