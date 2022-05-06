import { loadSolidsFromFile } from './loading.js';
import { camera } from './camera.js';
import { drawer } from './drawing.js';

var canvas = document.getElementById("myCanvas");

var solids = loadSolidsFromFile("solids.txt");

drawer.init_drawer(canvas);

console.log(drawer)
// project the solids onto the canvas using perspective projection
drawer.drawSolids(solids, camera);