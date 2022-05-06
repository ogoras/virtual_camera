export function drawSolid(canvas, solid, camera) {
    //load and project the vertices
    var vertices = [];
    for (var vertex of solid.vertices) {
        vertices.push(camera.project(vertex));
    }
    for (var edge of solid.edges) {
        var v1 = vertices[edge.V1];
        var v2 = vertices[edge.V2];
        drawLine(canvas, v1, v2);
    }
}

function drawLine(c, v1, v2) {
    var width = c.width;
    var height = c.height;
    var ctx = c.getContext("2d");
    var xcenter = width / 2;
    var ycenter = height / 2;
    var scale = Math.max(width, height) / 2;
    var x1 = v1.x*scale + xcenter;
    var y1 = -v1.y*scale + ycenter;
    var x2 = v2.x*scale + xcenter;
    var y2 = -v2.y*scale + ycenter;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}