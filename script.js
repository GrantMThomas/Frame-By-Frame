var canvasWidth = 700;
var canvasHeight = 393.75;

var canvasDiv = document.getElementById('canvasDiv');
//alert(canvasDiv);
//canvas = document.createElement('canvas');
canvas = document.getElementById("canvas");
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

/////
var purple = "#cb3594";
var green = "#659b41";
var yellow = "#ffcf33";
var brown = "#986928";
var red = "#FF0000";

var currentcolor = red;
currentcolor = "#000000";
var clickColor = new Array();
var clickSize = new Array();
var curSize = 5;

function update(jscolor){
    currentcolor = "#" + jscolor;
}

function changeSize(num){
    if(num < 1){
        num = 1;
    }
    curSize = num;
    
}
/////

$('#clear').click(function(){
    var con = confirm("Are you sure you want to clear the whole image?");
    if(con){
        context.clearRect(0, 0, canvas.width, canvas.height);
        clickX = new Array();
        clickY = new Array();
        clickDrag = new Array();
        clickColor = new Array();
        clickSize = new Array();
    }
    
});


$('#canvas').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
          
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
  });

  $('#canvas').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });

  $('#canvas').mouseup(function(e){
    paint = false;
  });

  $('#canvas').mouseleave(function(e){
    paint = false;
  });

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(currentcolor);
  clickSize.push(curSize);
}

function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    
    //context.strokeStyle = "#df4b26";
    
    context.lineJoin = "round";
    //context.lineWidth = 5;
              
    for(var i=0; i < clickX.length; i++) {		
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.lineWidth = clickSize[i];
       context.strokeStyle=clickColor[i];
       context.stroke();
    }
    
  }


