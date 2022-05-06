import { loadSolidsFromFile } from './loading.js';
import { camera } from './camera.js';
import { drawSolid } from './drawing.js';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var solids = loadSolidsFromFile("solids.txt");
console.log(solids);

// fill the canvas with black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "white";
ctx.lineWidth = 2;

// project the solids onto the canvas using perspective projection
for (var solid of solids) {
    drawSolid(canvas, solid, camera);
}