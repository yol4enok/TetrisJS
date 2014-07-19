   jQuery(document).ready(function() {
  /*var canvas = document.getElementById("example");
	ctx     = canvas.getContext('2d');
	
  	ctx.fillRect(0, 0, example.width, example.height);
    
    jQuery(ctx).animate({color : "#FFFFFF"}, 1000);
  	//ctx.fillRect(1, 1, example.width, example.height);
    /*function step(x,y) {
  requestAnimationFrame(step);
  for (x=0 , x =< example.width,++x){
    for (y=0, y=< example.height,++y){
      ctx.fillstyle()
    }
  }
}
step();*/

  //})
// requestAnim shim layer by Paul Irish
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
  


var canvas, context, currentX, currentY;

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
}

function animate() {
    requestAnimFrame( animate );
    draw();
}

function draw() {

    if (currentX < canvas.width - 1) {
      currentX++;
    }

    if (currentY < canvas.height - 1) {
      currentY++;
    }

    context.fillStyle = '#FFFFFF';
    context.fillRect( 0, 0, currentX, currentY );

    if (currentX === canvas.width - 1 && currentY === canvas.height -1 ) {
      currentX = 0;
      currentY = 0;
      
      context.fillStyle = '#000000';
      context.fillRect( 0, 0, 255, 255 );
    }


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

  })

 


 

