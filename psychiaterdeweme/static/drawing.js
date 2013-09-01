$(function() {
var cnvs = document.getElementById("drawing_surface");
// Enable canvas explorer for IE:
if (typeof G_vmlCanvasManager != "undefined") {
    cnvs = window.G_vmlCanvasManager.initElement(cnvs);
}

var ctx = cnvs.getContext("2d");
ctx.canvas.width = $("body").width();
ctx.canvas.height = $(document).height();

var xy = function(xyString) {
    values = xyString.split('_');
    return values;
}

var choosePoint = function(list) {
    return list[Math.floor(Math.random() * list.length)]
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
  "525_137": [
    "527_97"
  ],
  "64_60": [
    "96_62",
    "70_87"
  ],
  "141_21": [
    "150_39",
    "168_26"
  ],
  "186_86": [
    "212_98",
    "208_67",
    "203_119"
  ],
  "325_125": [
    "336_105",
    "346_121"
  ],
  "231_42": [
    "249_25",
    "277_60"
  ],
  "38_70": [
    "64_60",
    "70_87"
  ],
  "100_111": [
    "130_85",
    "110_127"
  ],
  "336_105": [
    "346_121",
    "366_79"
  ],
  "114_52": [
    "120_24",
    "150_60",
    "130_85",
    "150_39"
  ],
  "499_100": [
    "527_97",
    "502_121"
  ],
  "350_46": [
    "357_18",
    "386_33",
    "386_54",
    "366_79"
  ],
  "263_105": [
    "291_103",
    "263_82",
    "266_127"
  ],
  "393_80": [
    "403_53",
    "423_81"
  ],
  "158_86": [
    "186_86",
    "166_60"
  ],
  "302_113": [
    "306_81",
    "325_125",
    "336_105"
  ],
  "480_105": [
    "499_100"
  ],
  "404_20": [
    "460_11",
    "428_43"
  ],
  "333_57": [
    "350_46"
  ],
  "74_24": [
    "96_62",
    "114_52",
    "120_24"
  ],
  "142_120": [
    "157_108",
    "167_140"
  ],
  "52_38": [
    "64_60",
    "74_24"
  ],
  "291_103": [
    "306_81",
    "302_113"
  ],
  "498_76": [
    "499_100",
    "513_54"
  ],
  "224_80": [
    "263_82",
    "231_42",
    "244_110"
  ],
  "203_119": [
    "212_98",
    "221_143"
  ],
  "12_32": [
    "38_70",
    "52_38"
  ],
  "403_53": [
    "404_20",
    "428_43",
    "423_81"
  ],
  "191_49": [
    "231_42",
    "208_67"
  ],
  "224_17": [
    "249_25",
    "231_42"
  ],
  "366_79": [
    "393_80",
    "377_114"
  ],
  "249_25": [
    "288_32",
    "277_60"
  ],
  "513_54": [
    "527_97"
  ],
  "403_134": [
    "457_137",
    "438_113"
  ],
  "377_114": [
    "392_102",
    "403_134"
  ],
  "300.109_81.5298": [
    "300.109_81.5298",
    "300.109_81.5298"
  ],
  "460_11": [
    "484_19",
    "467_36"
  ],
  "484_19": [
    "490_46"
  ],
  "467_36": [
    "484_19",
    "490_46"
  ],
  "244_110": [
    "263_105",
    "266_127"
  ],
  "157_108": [
    "203_119",
    "167_140",
    "186_86",
    "158_86"
  ],
  "266_127": [
    "285_135"
  ],
  "306_81": [
    "332_79"
  ],
  "460_75": [
    "498_76",
    "480_105",
    "467_36"
  ],
  "428_43": [
    "467_36",
    "444_61"
  ],
  "490_46": [
    "513_54",
    "498_76"
  ],
  "449_91": [
    "480_105",
    "460_75"
  ],
  "70_87": [
    "95_85"
  ],
  "49_141": [
    "66_119",
    "84_152"
  ],
  "285_135": [
    "319_147",
    "302_113"
  ],
  "166_60": [
    "168_26",
    "191_49",
    "186_86"
  ],
  "212_98": [
    "244_110",
    "224_80"
  ],
  "357_18": [
    "377_15"
  ],
  "386_33": [
    "404_20",
    "386_54"
  ],
  "386_54": [
    "403_53",
    "393_80"
  ],
  "121_145": [
    "142_120",
    "167_140"
  ],
  "89_130": [
    "110_127",
    "100_111"
  ],
  "37_106": [
    "66_119",
    "70_87",
    "38_70"
  ],
  "263_82": [
    "277_60",
    "306_81"
  ],
  "312_18": [
    "333_57",
    "350_46",
    "357_18"
  ],
  "377_15": [
    "386_33",
    "404_20"
  ],
  "300_55": [
    "333_57",
    "306_81"
  ],
  "457_137": [
    "502_121",
    "480_105"
  ],
  "319_147": [
    "358_139",
    "325_125"
  ],
  "84_152": [
    "121_145",
    "89_130"
  ],
  "24_143": [
    "49_141",
    "37_106"
  ],
  "168_26": [
    "191_49",
    "224_17"
  ],
  "208_67": [
    "231_42",
    "212_98",
    "224_80"
  ],
  "130_85": [
    "150_60",
    "158_86",
    "142_120"
  ],
  "221_143": [
    "244_110",
    "266_127"
  ],
  "444_61": [
    "467_36",
    "449_91",
    "460_75"
  ],
  "96_62": [
    "114_52"
  ],
  "150_60": [
    "166_60",
    "158_86"
  ],
  "392_102": [
    "438_113",
    "393_80",
    "423_81",
    "403_134"
  ],
  "346_121": [
    "377_114",
    "358_139"
  ],
  "277_60": [
    "300_55"
  ],
  "332_79": [
    "333_57",
    "366_79",
    "336_105"
  ],
  "150_39": [
    "168_26",
    "150_60"
  ],
  "110_127": [
    "142_120",
    "121_145"
  ],
  "167_140": [
    "221_143",
    "203_119"
  ],
  "120_24": [
    "141_21"
  ],
  "66_119": [
    "70_87",
    "89_130",
    "100_111"
  ],
  "438_113": [
    "449_91",
    "457_137"
  ],
  "358_139": [
    "377_114",
    "403_134"
  ],
  "502_121": [
    "525_137"
  ],
  "95_85": [
    "96_62",
    "130_85",
    "100_111"
  ],
  "288_32": [
    "312_18",
    "300_55"
  ],
  "423_81": [
    "444_61",
    "438_113",
    "449_91"
  ]
}


var beginPoints = ["12_32", "38_70", "37_106", "24_143"]
var endPoints = ["513_54", "527_97", "525_137"]

var drawBackground = function() {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.strokeStyle = "rgb(195,195,195)";
    for (key in points) {    
        for (var i = 0; i < points[key].length; i++) {
            drawLine(xy(key), xy(points[key][i]));
            // drawCircle(xy(points[key][i]))
        }
        // drawCircle(xy(key));
    }
}

var drawNavDots = function() {
    ctx.save();
    ctx.translate(-200 , 100 );
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.strokeStyle = "rgb(195,195,195)";
    var navPositions = []
    $("#nav ul li").each(function() {
        var position = $(this).offset();
//        position['left'] = position['left'] + $("canvas").offset()['left'];
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
    ctx.restore()
}

// drawBackground();
drawNavDots();
$(window).resize(function() {
    // fill over previous navdots
    ctx.fillStyle = "rgb(255,255,255)";
    var top = $("#nav ul").offset()['top'];
    var height = $("#nav ul").height();
    ctx.fillRect(0, top, 400, height);
    // new navdots
    drawNavDots();
});

var point, pointA, pointB;

var proceed = function() {
    if (typeof point === "undefined" || $.inArray(point, endPoints) !== -1) {
        drawBackground();
        point = choosePoint(beginPoints);
    }    
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.strokeStyle = "rgb(0,0,255)";
    pointA = point;
    pointB = choosePoint(points[pointA]);
    drawLine(xy(pointA),xy(pointB));
//    drawCircle(xy(pointA));
//    drawCircle(xy(pointB));
    point = pointB;
};

window.setInterval(proceed, 500);
});