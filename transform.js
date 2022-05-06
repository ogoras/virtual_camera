export function translate(solids, x, y, z) {
    var matrix = [
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ]
    applyMatrix(solids, matrix)
}

export function rotate(solids, axis, angledegrees) {
    var matrix
    var angle = angledegrees / 180 * Math.PI
    switch (axis) {
        case "x":
            matrix = [
                [1, 0, 0, 0],
                [0, Math.cos(angle), -Math.sin(angle), 0],
                [0, Math.sin(angle), Math.cos(angle), 0],
                [0, 0, 0, 1]
            ]
            break;
        case "y":
            matrix = [
                [Math.cos(angle), 0, Math.sin(angle), 0],
                [0, 1, 0, 0],
                [-Math.sin(angle), 0, Math.cos(angle), 0],
                [0, 0, 0, 1]
            ]
            break;
        case "z":
            matrix = [
                [Math.cos(angle), -Math.sin(angle), 0, 0],
                [Math.sin(angle), Math.cos(angle), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ]
            break;
    }
    applyMatrix(solids, matrix)
}

function applyMatrix(solids, matrix) {
    for (var solid of solids) {
        for (var vertex of solid.vertices) {
            var v = [vertex.x, vertex.y, vertex.z, 1]
            var newV = matrixMultiply(matrix, v)
            vertex.x = newV[0]/newV[3]
            vertex.y = newV[1]/newV[3]
            vertex.z = newV[2]/newV[3]
        }
    }
}

function matrixMultiply(matrix, vector) {
    var result = [0, 0, 0, 0]
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            result[i] += matrix[i][j] * vector[j]
        }
    }
    return result
}