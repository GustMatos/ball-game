const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;

var wallL
var wallR
var roof
var ground

var ball;
var score = 0;

function setup(){
 createCanvas(1080, 720);
 engine = Engine.create();
 world = engine.world;

 var ball_options = {
    restitution: 0.2
 }
var ground_options = {
   isStatic: true
}

 ball = Bodies.circle(500, 500, 50, ball_options)
 World.add(world, ball)
 ground = Bodies.rectangle(540, 720, 1080, 50, ground_options)
 World.add(world, ground)
 wallL = Bodies.rectangle(0, 360, 50, 1000, ground_options)
 World.add(world, wallL)
 wallR = Bodies.rectangle(1080, 360, 50, 1000, ground_options)
 World.add(world, wallR)
 roof = Bodies.rectangle(0, 0, 2000, 50, ground_options)
 World.add(world, roof)
}

function draw(){
 background("#000000");


if (keyDown(65)){
   Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: -0.03, y: 0})
}
if (keyDown(68)){
   Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.03, y: 0})
}
if (keyDown(87)){
   Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.035})
}
if (keyDown(83)){
   Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: 0.03})
}
if (Matter.Collision.collides(ball, ground)!= null){
 console.log("teste")
}
 ellipse(ball.position.x, ball.position.y, 50)
 rect(ground.position.x - 540, ground.position.y - 50, 1080, 50)
 rect(wallL.position.x, wallL.position.y - 360, 50, 1000)
 rect(wallR.position.x - 50, wallR.position.y - 360, 50, 1000)
 rect(roof.position.x, roof.position.y, 1080, 50)

 Engine.update(engine);
}
function collide(bodyA, bodyB){
   Matter.set.collides()
}