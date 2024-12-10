import { TextGeometry } from "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/geometries/TextGeometry.js/+esm"
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/+esm';
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three@0.163.0/examples/jsm/loaders/FontLoader.js/+esm"

const loader = new FontLoader();
const json = await (await fetch("./font-architectsdaughter.json")).text();
const fontArchDau = loader.parse(JSON.parse(json));

export function addText(text, scene, color) {
  const textGeom = new TextGeometry(text, {
		font: fontArchDau,
		size: 2,
		depth: .2,
		curveSegments: 12,
	});
  textGeom.computeBoundingBox();
  textGeom.translate(-textGeom.boundingBox.max.x / 2, 0, 0);
  

  const material = new THREE.MeshPhysicalMaterial({
    color: color ?? "white",
    clearcoat: .55,
    metalness: 1
  });
  const textMesh = new THREE.Mesh(textGeom, material);
  textMesh.position.z = -10;
  scene.add(textMesh);
  return textMesh;
}