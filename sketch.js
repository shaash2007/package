var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;
	
	box = createSprite(104,620,40,100)
	box.shapeColor="red"
	var box_options = { isStatic: true }
	box2 = createSprite(280,650,400,40)
	box2.shapeColor="red"
	boxBase = Bodies.rectangle(280,650,400,40, {isStatic:true}) 
	World.add(world,boxBase);
	box3 = createSprite(450,620,40,100)
	box3.shapeColor="red"

	ground = Bodies.rectangle(104,620,40,100,box_options);
World.add(world,box);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	//package.restitution :7.0


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}
	engine = Engine.create();
	world = engine.world;

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



