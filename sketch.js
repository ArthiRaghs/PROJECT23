/****************SUPPLY MISSION 2 03 DEC 2020**************************** */

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftbox,rightbox,midbox;
var leftboxSprite,rightboxSprite,midboxSprite;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 //middle box
	 midboxSprite=createSprite(400,650,200,20);
	 midboxSprite.shapeColor=color(255,0,0);
	 midbox=Bodies.rectangle(400,635,200,20,{isStatic:true});
	 World.add(world,midbox);
//left box
	 leftboxSprite=createSprite(300,610,20,100);
	 leftboxSprite.shapeColor=color(255,0,0);
	 leftbox=Bodies.rectangle(320,610,20,100,{isStatic:true});
	 World.add(world,leftbox);
//right box
	 rightboxSprite=createSprite(500,610,20,100);
	 rightboxSprite.shapeColor=color(255,0,0);
	 rightbox=Bodies.rectangle(480,610,20,100,{isStatic:true});
	 World.add(world,rightbox);
	/*ground=new Ground(width/2, 650, width, 10);
	ground.shapeColor=color(255);
	box1=new Box(400,630,200,20);
	box2=new Box(310,600,20,100);
	box3=new Box(500,600,20,100);*/
	
	
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
 // Engine.update(engine);
 rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  /*box1.display();
  box2.display();
  box3.display();
  ground.display();*/
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }
  if(keyCode === LEFT_ARROW)
  {
	  helicopterSprite.x= helicopterSprite.x-20;
	  translation={x:-20,y:0};
	  Matter.Body.translate(packageBody, translation)
  }
  if(keyCode === RIGHT_ARROW)
  {
	helicopterSprite.x= helicopterSprite.x+20;
	translation={x:20,y:0};
	Matter.Body.translate(packageBody, translation)
  }
}
  



