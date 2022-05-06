import { loadSolidsFromFile } from './loading.js';
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = c.width;
var height = c.height;

var solids = loadSolidsFromFile("solids.txt");
console.log(solids);

// fill the canvas with black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, c.width, c.height);

ctx.strokeStyle = "white";
ctx.lineWidth = 2;

// project the solids onto the canvas using perspective projection
for (var solid of solids) {
    //load and project the vertices
    var vertices = [];
    for (var vertex of solid.vertices) {
        vertices.push(project(vertex));
    }
    for (var edge of solid.edges) {
        var v1 = vertices[edge.V1];
        var v2 = vertices[edge.V2];
        drawLine(v1, v2);
    }
}


ctx.beginPath();
ctx.moveTo(width*0.4, height*0.5);
ctx.lineTo(width*0.6, height*0.5);
ctx.stroke();