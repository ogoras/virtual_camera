import { loadSolidsFromFile } from './loading.js';
import { camera } from './camera.js';
import { drawer } from './drawing.js';
import { translate, rotate } from './transform.js';

var canvas = document.getElementById("myCanvas");
var zoom = document.getElementById("zoom-display");
zoom.textContent = "Current zoom: " + camera.angledegrees;

var solids = loadSolidsFromFile("solids.txt");

drawer.initDrawer(canvas);

drawer.drawSolids(solids, camera);

document.addEventListener("keydown", function(event) {
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
        case "a":
            rotate(solids, "y", -15);
            break;
        case "d":
            rotate(solids, "y", 15);
            break;
        case "w":
            rotate(solids, "x", -15);
            break;
        case "s":
            rotate(solids, "x", 15);
            break;
        case "q":
            rotate(solids, "z", -15);
            break;
        case "e":
            rotate(solids, "z", 15);
            break;
        case "+":
            if (camera.angledegrees > 5) {
                camera.angledegrees -= 5;
                zoom.textContent = "Current zoom: " + camera.angledegrees;
            }
            break;
        case "-":
            if (camera.angledegrees < 175) {
                camera.angledegrees += 5;
                zoom.textContent = "Current zoom: " + camera.angledegrees;
            }
            break;
        case "0":
            camera.angledegrees = 120;
            zoom.textContent = "Current zoom: " + camera.angledegrees;
            break;
        case "Home":
            solids = loadSolidsFromFile("solids.txt");
            break;
        case "h":
            //toggle help window
            var help = document.getElementById("help");
            if (help.style.display === "none") {
                help.style.display = "block";
            } else {
                help.style.display = "none";
            }
            break
        case "z":
            //toggle zoom display
            if (zoom.style.display === "none" || zoom.style.display === "") {
                zoom.style.display = "block";
            } else {
                zoom.style.display = "none";
            }
            break
        case "Escape":
            close();
        default:
            return
    }
    drawer.clearCanvas();
    drawer.drawSolids(solids, camera);
})