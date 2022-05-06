import { loadSolidsFromFile } from './loading.js';
import { camera } from './camera.js';
import { drawer } from './drawing.js';
import { translate, rotate } from './transform.js';

var canvas = document.getElementById("myCanvas");

var solids = loadSolidsFromFile("solids.txt");

drawer.initDrawer(canvas);

console.log(drawer)
// project the solids onto the canvas using perspective projection
drawer.drawSolids(solids, camera);

// translate the world on arrow keys
document.addEventListener("keydown", function(event) {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":
            translate(solids, 0, 0, 1);
            break;
        case "ArrowDown":
            translate(solids, 0, 0, -1);
            break;
        case "ArrowLeft":
            translate(solids, 1, 0, 0);
            break;
        case "ArrowRight":
            translate(solids, -1, 0, 0);
            break;
        case "PageUp":
            translate(solids, 0, -1, 0);
            break;
        case "PageDown":
            translate(solids, 0, 1, 0);
            break;
        default:
            return
    }
    drawer.clearCanvas();
    drawer.drawSolids(solids, camera);
})