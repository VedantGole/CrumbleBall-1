
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bu, ck, et, cBall;
var ground, groundSprite

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	//Creating the bucket
	 bu = new Box(650,670,200,20);
	 ck = new Box(560,630,20,100);
	 et = new Box(760,630,20,100); 

	 //Creating the crumpled Ball
	 cBall = new Ball(123, 668, 10);

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //console.log(mouseX, mouseY);


  bu.display();
  ck.display();
  et.display();
  cBall.display();
  ground.display();

  
  

  drawSprites();
} 

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(cBall.body, cBall.body.position,{x:15, y:-15})
	}
}



