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

  imgBG   = loadImage('assets/dtec_favicon.PNG');


}
width = 670;
height = 350;
spriteX = 238;
spriteY=92

cnv = new Canvas(width, height);

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