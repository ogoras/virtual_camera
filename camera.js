function perspectiveProject(vertex) {
    var x = vertex.x;
    var y = vertex.y;
    var z = - vertex.z;
    var x2 = x * camera.focalLength() / z;
    var y2 = y * camera.focalLength() / z;
    console.log(x2, y2);
    return {x: x2, y: y2};
}

export var camera = {
    //viewing angle
    zoom : 10,
    project : perspectiveProject,
    //calculate focal length from zoom
    focalLength : function() {
        return (camera.zoom / 180) * Math.PI;
    }
}