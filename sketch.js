
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var plane
var stone
var rubber
var sand1
var sand2
var sand3
var sand4
var sand5
var sand6
var sand7
var sand8
var sand9
var sand10
var iron

function setup() {
	createCanvas(1600, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      hammer = new Hammer(400,500,150,50)
	  plane = new Plane(800,990,1600,20)
    stone = new Stone(500,0,150,150)
    rubber = new Rubber(462,251,70)
    sand1 = new Sand1(500,258,15)
    sand2 = new Sand2(715,258,15)
    sand3 = new Sand3(730,258,15)
    sand4 = new Sand4(745,258,15)
    sand5 = new Sand5(760,258,15)
    sand6 = new Sand6(775,258,15)
    sand7 = new Sand7(790,258,15)
    sand8 = new Sand8(805,258,15)
    sand9 = new Sand9(820,258,15)
    sand10 = new Sand10(835,258,15)
    iron = new Iron(1000,200,200,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer.display()
  plane.display()
  stone.display()
  rubber.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  iron.display()
  drawSprites();
 
}



