const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
  backgroundImg = loadImage("background.png");
  //Cargar imagenes de fruta y canasta (g)

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Crear cuerpo circular

  
//Crear slingShot
  

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

  imageMode(CENTER)
    //Mostrar imagenes de fruta y canasta (g)

  //slingShot.display();
}
//Crear function mouseDragged

//Crear function mouseReleased
