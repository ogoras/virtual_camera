var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = c.width;
var height = c.height;

// fill the canvas with black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, c.width, c.height);

//set line color to white
ctx.strokeStyle = "white";
//set stroke width to 2
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(width*0.4, height*0.5);
ctx.lineTo(width*0.6, height*0.5);
ctx.stroke();