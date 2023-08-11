
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
 //não lembro como se faz isso >:(

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
Matter.Body.rotate(rotator1, angle1)
push();
translate(rotator1.position.x, rotator1.position.y); rotate(angle1);
rect(0,0,150,20); pop();
angle1 +0.2;



