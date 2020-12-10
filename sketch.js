
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,350,50);
	ground = new Roof(400,690,800,50);
	bob1 = new Bob(250,100)
	bob2 = new Bob(320,100)
	bob3 = new Bob(390,100)
	bob4 = new Bob(460,100)
	bob5 = new Bob(530,100)
	rope1 = new Rope({x:250,y:100},bob1.body);
	rope2 = new Rope({x:320,y:100},bob2.body);
	rope3 = new Rope({x:390,y:100},bob3.body);
	rope4 = new Rope({x:460,y:100},bob4.body);
	rope5 = new Rope({x:530,y:100},bob5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:60,y:0})
  }
  //if(keyWentUp(UP_ARROW)){
  //Matter.Body.applyForce(bob5.body,bob5.body.position,{x:0,y:0})
  //}
  
 
 
}



