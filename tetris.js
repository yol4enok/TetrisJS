   jQuery(document).ready(function() {
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       || 
			  window.webkitRequestAnimationFrame || 
			  window.mozRequestAnimationFrame    || 
			  window.oRequestAnimationFrame      || 
			  window.msRequestAnimationFrame     || 
			  function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();
  


var canvas, context, currentX, currentY, grid, shape, speed;
var speed 
var prevTime;
var curTime;
var color = {
	r:0,
	g:0,
	b:0
};
var KEY_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var patternShapes = [
    [ 
    [1, 1],
   [1, 1]
  ], 
  [
   [0, 0, 0],
   [0, 0, 1],
   [1, 1, 1]
  ],
  [
   [0, 0, 0],
   [1, 0, 0],
   [1, 1, 1]
  ],

  [
   [1, 1, 1],
   [0, 1, 0],
   [0, 0, 0]
  ],

  [
   [0, 1, 0],
   [1, 1, 0],
   [1, 0, 0]
  ], 
 [
   [0, 1, 0],
   [0, 1, 1],
   [0, 0, 1]
  ], 

  [
   [1, 1, 1, 1],
   [0, 0, 0, 0],
   [0, 0, 0, 0],
   [0, 0, 0, 0]
  ],
];


   function Shape (positionX, positionY, cellwidth, cellheight, matrixPattern){

		this.positionY = positionY;
		this.positionX = positionX;
		this.cellwidth = cellwidth;
		this.cellheight =cellheight;
		var len  = matrixPattern[0].length;
		this.width = len;
		this.height = len ;
		var matrix = [];
		for (var i=0; i<len;++i){
			matrix[i]=[];
			for (var j=0; j<len;++j){
		 		matrix[i][j] = matrixPattern[i][j];
		 	}
		}
		
		this.matrix = matrix;

   }
	
	Shape.prototype.setPosition = function(positionX, positionY) {
     	this.positionX = positionX;
     	this.positionY = positionY;
	}

		
	
	Shape.prototype.rotate = function() {
     ///повернуть матрицю класа шейп (мембер this.matrix)

		var len = this.matrix[0].length;
        var tempmatrix = createMatrix(len, len);

		
		for(var i=0; i<len; ++i) {
			//tempmatrix[i] = [];
			for (var j=0; j < len; ++j){
			tempmatrix[len-j-1][i]=this.matrix[i][j];
		    }
		}

		this.matrix = tempmatrix;

   	}

   	Shape.prototype.move = function(dx,dy) {
        this.positionX += dx;
        this.positionY +=dy;
	}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
}

init();
animate();

function init() {

	canvas = document.getElementById( 'example' );
	canvas.width = 256;
	canvas.height = 256;

	context = canvas.getContext( '2d' );
	currentX = 0;
	currentY = 0;

	context.fillStyle = '#000000';
	context.fillRect( 0, 0, 255, 255 );
	  prevTime = curTime = 0;

	grid = new gameGrid(canvas.width, canvas.height, 16, 16);

	shape = new Shape(0, -10, grid.cellW, grid.cellH,  patternShapes[2]);

	var myTimer = window.setInterval(function(){
		console.log('timer');
		update();
	}, 500);

	//clearTimeout(myTimer);

	console.log(shape);
	//shape.setPosition(0,6);
	//shape.rotate();
	//matrix[1][1] = 1;
	console.log(grid);
}

function animate() {
	requestAnimFrame( animate );
	draw();
}

function draw() {
  //console.log(grid.canvH);
	curTime = new Date().getTime();
  var dt = curTime - prevTime;
	if(dt >= 16) {
	
	context.fillStyle = 'black';
	context.fillRect( 0, 0, canvas.width, canvas.height );
	
	drawobject(shape.positionX, shape.positionY,shape.width,shape.height,shape.cellwidth, shape.cellheight, shape.matrix);
		}
	}
	function gameGrid (canvW,canvH,cellwidth,cellheight){
		this.canvW = canvW;
		this.canvH = canvH;
		this.cellW = cellwidth;
		this.cellH = cellheight;
		this.gridWidth = canvW/cellwidth;
		this.gridHeight = canvH/cellheight;
		
		this.matrix = createMatrix(this.gridWidth, this.gridHeight);
	}

	function createMatrix(n, m) { 
		var matrix=[];
		for  (var i=0; i<n; ++i){
			matrix[i]=[];
			for (var j=0; j<m; ++j){
				matrix[i][j]=0;
		  }
		}

		return matrix;
	}


  function drawobject (positionX, positionY,gridWidth,gridHeight,cellW, cellH, matrix){
	for (var i=0; i<gridWidth;++i){
	  for (var j=0; j<gridHeight;++j){
		if (matrix[i][j] == 1) {
		  var x = (positionX + i)*cellW;
		  var y = (positionY + j)*cellH;
		  context.fillStyle ='#ff3df0';
		  context.fillRect(x,y,cellW, cellH);

		}

	  }
	}

  }
function update() {
	console.log(shape);
    shape.move(0,1);

}
function handler(event) {
	switch(event.keyCode) {
	  case KEY_CODE.LEFT:
	  shape.move(-1,0);
	      break;
	  case KEY_CODE.UP:
	   shape.rotate();
	  break;
	  case KEY_CODE.RIGHT:
	    shape.move(1,0);
	  break;
	  case KEY_CODE.DOWN:
	    shape.move(0,1);
	  break;
	  default:
	  break;
	}
}
window.addEventListener('keydown', handler, false);

});

  

  
  