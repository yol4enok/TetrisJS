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
  


var canvas, context, currentX, currentY, grid, matrix,shape;

var prevTime;
var curTime;
var color = {
	r:0,
	g:0,
	b:0
};

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
	var patternShapes =[ [1, 1,1],[1,1,1],[1,1,1] ];
  
	shape = new Shape(0, 8, grid.cellW, grid.cellH, grid.gridWidth, grid.gridHeight, patternShapes);
	//matrix[1][1] = 1;
	console.log(grid);
}

function animate() {
	requestAnimFrame( animate );
	draw();
}

function draw() {
  /*console.log(grid.canvH);
	curTime = new Date().getTime();
  var dt = curTime - prevTime;
	if(dt >= 16) {
	if (currentX < canvas.width - 1) {
	  currentX++;
	}

	if (currentY < canvas.height - 1) {
	  currentY++;
	}
	color.r += 0.01 * dt;
	color.g += 0.01 * dt;
	color.b += 0.01 * dt;
	if(color.r > 255) {
	  color.r = color.g = color.b = 0;
	}
	context.fillStyle = rgbToHex(color.r, color.g, color.b);
	context.fillRect( 0, 0, canvas.width, canvas.height );*/
	
	drawobject(shape.positionX, shape.positionY,shape.width,shape.height,shape.cellwidth, shape.cellheight, shape.matrix);
	
/*    if (currentX === canvas.width - 1 && currentY === canvas.height -1 ) {
		  currentX = 0;
		  currentY = 0;
		  
		  context.fillStyle = '#000000';
		  context.fillRect( 0, 0, 255, 255 );
		} */
		/*prevTime = curTime;
	}*/

	/*var time = new Date().getTime() * 0.002;
	var x = Math.sin( time ) *128;
	var y = Math.cos( time * 0.9 ) * 96 + 128;*/
	/*var time = new Date().getTime() * 0.002;
	var x =0;
	var y =0;
	for (var x, x<canvas.width,++x){
	  for (var y, y<canvas.heigth,++y){
		  context.fillRect(x,y,x+1,)
	  }

	}*/
	/*context.fillStyle = '#000000';
	context.fillRect( 0, 0, 255, 255 );


	context.fillStyle = '#FFFFFF';
	context.beginPath();
	context.arc( x, y, 10, 0, Math.PI * 2, true );

	ty
	context.closePath();
	context.fill();*/

}

	function gameGrid (canvW,canvH,cellwidth,cellheight){
		this.canvW = canvW;
		this.canvH = canvH;
		this.cellW = cellwidth;
		this.cellH = cellheight;
		this.gridWidth = canvW/cellwidth;
		this.gridHeight = canvH/cellheight;
		matrix=[];
		for  (var i=0; i<this.gridWidth; ++i){
			matrix[i]=[];
			for (var j=0; j<this.gridHeight; ++j){
				matrix[i][j]=0;
		  }
		}
		this.matrix = matrix;
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

   function Shape (positionX, positionY, cellwidth, cellheight, width, height, matrixPattern){

		this.positionY = positionY;
		this.positionX = positionX;
		this.cellwidth = cellwidth;
		this.cellheight =cellheight;
		this.width = width;
		this.height = height;
		var len  = matrixPattern[0].length;
		for (var i=0; i<len;++i){
			matrix[i]=[];
			for (var j=0; j<len;++j){
		 		matrix[i][j] = matrixPattern[i][j];
		 	}
		}
				this.matix = matrix;

   }
});


  
  
  