//implement function
export function loadSolidsFromFile(filename) {
    var solids = [];
    var fileContent = readFile(filename);
    var blocks
    // check if file contains \r\n
    var newLine = fileContent.indexOf("\r\n");
    if (newLine == -1) {
        blocks = fileContent.split("\n\n");
    }
    else {
        blocks = fileContent.split("\r\n\r\n");
    }
    console.log(blocks);
    for (var i = 0; i < blocks.length; i++) {
        var lines = blocks[i].split("\n");
        var solid = {
            "edges": [],
            "vertices": []
        };
        for (var line of lines) {
            if (line.length == 0)
                continue;
            var parts = line.split(" ");
            if (parts[0][0] == "V") {
                solid.vertices.push({x: parseFloat(parts[1]), y: parseFloat(parts[2]), z: parseFloat(parts[3])});
            }
            else if (parts[0][0] == "E") {
                solid.edges.push({V1: parseInt(parts[1]), V2: parseInt(parts[2])});
            }
        }
        solids.push(solid);
    }
    return solids
}

function readFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
      console.log(result);
    }
    return result;
  }