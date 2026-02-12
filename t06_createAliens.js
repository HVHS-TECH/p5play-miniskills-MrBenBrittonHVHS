/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
console.log("setup: ");
cnv = new Canvas(500, 800);
world.gravity.y = 10;


box = new Sprite(50,50,100,200,'k');

box.color = 'red';
box.rotationSpeed = 2;

box.vel.x = 2;


circle = new Sprite(200,200,100, 'd');

circle.color = 'blue';
/*
platform_1 = new Sprite(60, 300, 300, 5, 'k');
platform_1.rotation = 5;

platform_2 = new Sprite(250, 450, 200, 5, 'k');
platform_2.bounciness = 1;

platform_3 = new Sprite(400, 600, 400, 5, 'k');
platform_3.rotation =-15;
platform_3.friction = 10
*/
wallLH  = new Sprite(0, height/2, 5, height, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(width, height/2, 5, height, 'k');

wallTop = new Sprite(width/2, 0, width, 5, 'k');

wallBot = new Sprite(width/2, height, width, 5, 'k');
for (var i = 0; i < 10; i++) {

  alien = new Sprite(random(0,width),random(height,0),10);

const VELARRAY = [-1, 1];

randNum = random(4, 7) * random(VELARRAY);

  alien.vel.x = randNum;
randNum = random(4, 7) * random(VELARRAY);

  alien.vel.y = randNum;

  alien.bounciness = 1;

  alien.friction = 0;

}
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