const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject;
var groundObject;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	//creating all classes
	paper = new Paper(200,450,50);
	ground = new Ground(600,height,1200,20);

	//horizontal
	redBox1 = new Dustbin(890, 615, 190, 70);

    //left
	redBox2 = new Dustbin(800, 610, 30, 190);

	//right
	redBox3 = new Dustbin(1000, 610, 30, 190);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(23, 32, 42 );
 
  //display
  paper.display();
  ground.display();

  redBox1.display();
  redBox2.display();
  redBox3.display();
}

//up arrow key
function keyPressed() 
{
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-125});

  }
}


