import { Sky } from "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/objects/Sky.js/+esm"
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/+esm';

export function addSky(scene) {
  const sky = new Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);
  const phi = THREE.MathUtils.degToRad(90);
	const theta = THREE.MathUtils.degToRad(180);
  const sunPos = new THREE.Vector3();
	sunPos.setFromSphericalCoords( 1, phi, theta );

	sky.material.uniforms['sunPosition'].value.copy(sunPos);
  return sky;
}