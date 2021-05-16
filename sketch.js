
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5,roof;
var engine,world,rope1,rope2,rope3,rope4,rope5;
function preload(){
 // paperimg=loadImage("paper.png");
 // dustbin.png=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(350,400,25);
bob2= new Bob(450,400,25);
bob3= new Bob(400,400,25);
bob4=new Bob(300,400,25);
bob5=new Bob(500,400,25);
roof=new Roof(400,150,400,30);
rope1=new ROPE(bob1.body,roof.body,-bob1.radius*2,0);
rope2=new ROPE(bob2.body,roof.body,bob2.radius*2,0);
rope3=new ROPE(bob3.body,roof.body,0,0);
rope4=new ROPE(bob4.body,roof.body,-bob4.radius*4,0);
rope5=new ROPE(bob5.body,roof.body,bob5.radius*4,0);


	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-200,y:200})
  
	}
}
