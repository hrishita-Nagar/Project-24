
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin1 = new Dustbin(720,650,300,25);
	dustbin2 = new Dustbin(570,550,25,200);
	dustbin3 = new Dustbin(870,550,25,200);

	ground = new Ground(500,675,1000,20);

	ball = new Ball(30,553,25,25);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		 
		Matter.Body.applyForce(ball.body,ball.body.position,{x:105,y:-118})
	}
}



