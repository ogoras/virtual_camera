function perspectiveProject(vertex) {
    var x = vertex.x;
    var y = vertex.y;
    var z = - vertex.z;
    var angle = camera.angledegrees / 180 * Math.PI;
    var d = 1 / Math.tan(angle / 2);
    var X = x*d/z;
    var Y = y*d/z;
    return {x: X, y: Y, z: z};
}

export var camera = {
    //viewing angle
    angledegrees : 150,
    project : perspectiveProject
}