import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/+esm';
const loader = new THREE.TextureLoader();
const imgSrcs = {
  "a": "./img.png",
  "b": "https://cdn.glitch.global/31bace21-7962-42b9-9d94-1ac0006e3342/327367b3-978f-4b07-bf13-371f63c77ca8.image.png?v=1733871567569"
}
const imgTextures = {}
for (const [key, url] of Object.entries(imgSrcs)) {
  imgTextures[key] = await new Promise(res => loader.load(url, res));
}
console.log(imgTextures);
export function addImg(imgKey, w, h, scene) {
  const imgTexture = imgTextures[imgKey];
  if (!imgTexture) throw new Error("img " + imgKey + "not found");
  const imgMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    map: imgTexture,
  });
  const imgGeom = new THREE.PlaneGeometry(w, h);
  const imgMesh = new THREE.Mesh(imgGeom, imgMat);
  scene.add(imgMesh);
  return imgMesh;
}