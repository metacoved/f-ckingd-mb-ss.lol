import { PLANE, ThreeInfiniteGrid } from "https://cdn.jsdelivr.net/npm/@chronosai/three-infinite-grid@0.1.2/+esm"
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.163.0/+esm';

export function addGrids(scene) {
  const gridColor = new THREE.Color("#777");
  const grid = new ThreeInfiniteGrid({
    chunks: new THREE.Vector2(100, 100),  //2000x2000 units size     
    plane: PLANE.XZ,
    scale: 1,
    majorGridFactor: 1,
    minorLineWidth: 0.01,
    majorLineWidth: 0.01,
    axisLineWidth: 0.01,
    minorLineColor: gridColor,
    majorLineColor: gridColor,
    xAxisColor: gridColor,
    yAxisColor: gridColor,
    zAxisColor: gridColor,
    centerColor: gridColor,
    opacity: 1,
  });
  const topGrid = new ThreeInfiniteGrid({
    chunks: new THREE.Vector2(100, 100),  //2000x2000 units size     
    plane: PLANE.XZ,
    scale: 1,
    majorGridFactor: 1,
    minorLineWidth: 0.01,
    majorLineWidth: 0.01,
    axisLineWidth: 0.01,
    minorLineColor: gridColor,
    majorLineColor: gridColor,
    xAxisColor: gridColor,
    yAxisColor: gridColor,
    zAxisColor: gridColor,
    centerColor: gridColor,
    opacity: 1,
  });
  grid.position.y = -2;
  topGrid.position.y = 2;
  scene.add(grid, topGrid);
}