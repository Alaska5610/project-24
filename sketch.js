
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1 , side2 , bottom;
var ground1;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	ground1 = new ground(600,500,1200,50);

	engine = Engine.create();
	world = engine.world;

	

	side1 = createSprite(480, 430,20,100);
	side1.shapeColor = ("midnightBlue");
	side2 = createSprite(730,430,20,100);
	side2.shapeColor = ("midnightblue");
	bottom = createSprite(595,470,250,20);
	bottom.shapeColor = ("MidnightBlue");

	paper1 = new paper(100 , 10,30);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  Engine.update(engine);
  
  paper1.display();
  ground1.display();

  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body , paper1.body.position , {x:10 , y:-5})
	}
}



