const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stand;
var engine, world, ground, shape;
var stand1, stand2;
var polygon;
var slingshot;

function preload(){
    shape = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,600);
    //rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground()

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,250,10);

    slingshot = new SlingShot(this.polygon, {x:100, y:200});

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);






}


function draw(){

background("brown")

    stand1.display();
    stand2.display();

    ground.display();
    slingshot.display();

    imageMode(CENTER);
    image(shape, polygon.position.x, polygon.position.y, 40, 40);

    
}