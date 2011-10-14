$(function() {
$("body").prepend('<canvas id="drawing_surface" style="position:absolute;top:0;left:0;z-index:-1"></canvas>')
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
    ctx.strokeStyle = "rgb(195,195,195)";
    for (key in points) {    
        for (var i = 0; i < points[key].length; i++) {
            drawLine(xy(key), xy(points[key][i]));
            drawCircle(xy(points[key][i]))
        }
        drawCircle(xy(key));
    }
}

var drawNavDots = function() {
    var navPositions = []
    $("#nav ul li").each(function() {
        var position = $(this).offset();
        navPositions.push([ position['left'], position['top'] + 11 ])
    });
    for (var i = 0; i < navPositions.length; i++) {
        /* wobble */
        navPositions[i][0] = navPositions[i][0] - 20 + 16 * Math.sin(i);
        }
    for (var i = 0; i < navPositions.length; i++) {
        try {
            drawLine(navPositions[i], navPositions[i+1]);
        }
        catch (error) {
            // when there is no i+1
        }
        drawCircle(navPositions[i]);
    }
}

drawBackground();
drawNavDots();
});