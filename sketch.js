
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Ball(100,600,40);
	bob2 = new Ball(140,600,40);
	bob3 = new Ball(180,600,40);
	bob4 = new Ball(220,600,40);
	bob5 = new Ball(260,600,40);

	roof = new Roof(170,100,300,20)
	
	rope1 = new Rope(bob1.body,roof.body,-70,5);
	rope2 = new Rope(bob2.body,roof.body,-35,5);
	rope3 = new Rope(bob3.body,roof.body,-2,5);
	rope4 = new Rope(bob4.body,roof.body,35,5);
	rope5 = new Rope(bob5.body,roof.body,70,5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



