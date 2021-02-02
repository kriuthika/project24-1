const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var iron,hammer,plane,rubber,stone;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    iron1 = new Iron(700,320,70,70);
    iron2 = new Iron(960,320,70,70);

    iron3 = new Iron(500,240,70,70);
hammer1 = new Hammer(400,240,100,20)
plane = new Plane(600,height,1200,20);
rubber1 = new Rubber(100,500,60);
stone1 = new Stone(200,200,100,100);
sand1 = new Sand(505,450,10);
sand2 = new Sand(510,450,10);
sand3 = new Sand(515,450,10);
sand4 = new Sand(520,450,10);
sand5 = new Sand(525,450,10);
sand6 = new Sand(515,445,10);
sand7 = new Sand(520,445,10);
sand8 = new Sand(525,445,10);
sand9 = new Sand(530,445,10);
sand10 = new Sand(535,445,10);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);


    iron1.display();
    hammer1.display();
plane.display();
rubber1.display();
stone1.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
sand10.display();
}