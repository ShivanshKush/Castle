const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,block1,block2,block3,block4
var block5,cone1;

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(500,690,1000,10);
    block1 = new Block(500,580,100,350);
    block2 = new Block(530,580,100,450);
    block3 = new Block(480,580,100,450);
    block4 = new Block(460,580,100,550);
    block5 = new Block(560,580,100,550);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  drawSprites();
}