function drawSolids(solids, camera) {
    for (var solid of solids) {
        drawSolid(solid, camera)
    }
}

function drawSolid(solid, camera) {
    var vertices = []
    for (var vertex of solid.vertices) {
        vertices.push(camera.project(vertex))
    }
    for (var edge of solid.edges) {
        var v1 = vertices[edge.V1]
        var v2 = vertices[edge.V2]
        drawLine(v1, v2)
    }
}

function drawLine(v1, v2) {
    var scale = drawer.scale
    var xcenter = drawer.xcenter
    var ycenter = drawer.ycenter
    drawer.ctx.beginPath()
    drawer.ctx.moveTo(v1.x*scale + xcenter,  -v1.y*scale + ycenter)
    drawer.ctx.lineTo(v2.x*scale + xcenter, -v2.y*scale + ycenter)
    drawer.ctx.stroke()
}

function initDrawer(canvas) {
    var c = drawer.canvas = canvas
    var width = drawer.width = c.width
    var height = drawer.height = c.height
    var ctx = drawer.ctx = c.getContext("2d")
    drawer.xcenter = width / 2
    drawer.ycenter = height / 2
    var scale = drawer.scale = Math.max(width, height) / 2

    // fill the canvas with black
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
}

function clearCanvas () {
    var c = drawer.canvas
    var ctx = drawer.ctx
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, c.width, c.height)
}

export var drawer = {
    drawSolids: drawSolids,
    initDrawer: initDrawer,
    drawSolid: drawSolid,
    drawLine: drawLine,
    clearCanvas: clearCanvas,
    canvas : null,
    width : 0.0,
    height : 0.0,
    ctx : null,
    xcenter : 0.0,
    ycenter : 0.0,
    scale : 0.0
}