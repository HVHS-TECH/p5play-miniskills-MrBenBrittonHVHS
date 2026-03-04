/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");

function preload() {

 // imgBG   = loadImage('assets/dtec_favicon.PNG');


}


cnv = new Canvas(windowWidth-4,windowHeight-4);
//create a line of 10 sprites across the top of the screen
/* for (var i = 0; i < 10; i++) {
  var block = new Sprite(340, i*80 + 40, i*50, 50);
  block.color = color(255, 0, 0); // Red color
} */


//create a grid of 100 sprites starting at the top of the screen
for (var i = 0; i < 10; i++) {
	blockColor = color(random(255), random(255), random(255))
  for (var j = 0; j < 10; j++) {
    var block = new Sprite(j*80 + 40, i*80 + 40, 50, 50);
    block.color = blockColor;
  }
}
/* 
var i;
for (i = 0; i < 10; i++) {
	console.log("for loop: "+i);
}
var i = 0;
while (i < 10) {
	console.log("while loop: "+i);
	i++
}
var i = 0;
do {
	console.log("do-while loop: "+i);
	i++
}while (i < 10); */
/*
red = new Sprite(spriteX/2,spriteY/2, spriteX, spriteY);
red.color = 'red';

green = new Sprite(width- spriteX/2,spriteY/2, spriteX, spriteY);
green.color = 'green';

blue = new Sprite(width- spriteX/2,height-spriteY/2, spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite(spriteX/2,height-spriteY/2, spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite(width/2,height/2, spriteX, spriteY);
purple.color = 'purple'; 

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);
*/
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('cyan'); 

	

}

/*******************************************************/
//  END OF APP
/*******************************************************/