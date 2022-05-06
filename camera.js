function perspectiveProject(vertex) {
    var x = vertex.x;
    var y = vertex.y;
    var z = - vertex.z;
    var angle = camera.angle;
    return {x: vertex.x/angle, y: vertex.y/angle};
}

export var camera = {
    //viewing angle
    angle : 10,
    project : perspectiveProject
}