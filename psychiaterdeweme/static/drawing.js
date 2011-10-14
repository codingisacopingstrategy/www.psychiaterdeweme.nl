$(function() {
$("body").prepend('<canvas id="drawing_surface" style="position:absolute;top:0;left:0;"></canvas>')
var cnvs = document.getElementById("drawing_surface");
var ctx = cnvs.getContext("2d");
ctx.canvas.width = $("body").width();
ctx.canvas.height = $(document).height();

var xy = function(xyString) {
    values = xyString.split('_');
    values[0] = values[0] * 20;
    values[1] = values[1] * 20;
    return values;
}

var choosePoint = function(list) {
    return xy(list[Math.floor(Math.random() * list.length)])
}

var drawLine = function(xyFrom, xyTo) {
    ctx.beginPath();
    ctx.moveTo(xyFrom[0], xyFrom[1]);
    ctx.lineTo(xyTo[0], xyTo[1]);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

var drawCircle = function(xyCenter) {
    ctx.beginPath();
    ctx.arc(xyCenter[0], xyCenter[1], 3, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

var points = {
  "12_12": [
    "15_10",
    "17_11"
  ],
  "10_10": [
    "12_8",
    "12_12"
  ],
  "12_8": [
    "15_10",
    "15_7"
  ],
  "15_10": [
    "17_11"
  ]
}

var beginPoints = ["10_10"]
var endPoints = ["17_11"]

var drawBackground = function() {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.strokeStyle = "rgb(0,0,0)";
    for (key in points) {    
        drawCircle(xy(key));
        for (var i = 0; i < points[key].length; i++) {
            drawLine(xy(key), xy(points[key][i]));
            drawCircle(xy(points[key][i]))
        }
    }
}

drawBackground();
});