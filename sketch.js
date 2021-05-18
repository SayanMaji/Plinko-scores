const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particle;
var plinko = [];
var division =[];
var divisionHeight = 300;
var gameState = "play";
var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //Creating Divisions
  for(var k =0; k<=width; k=k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  //Creating Plinkos
  for (var j =15; j<=width; j=j+50){
    plinko.push(new Plinkos(j,75))
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,175));
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,275));
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,375));
  }

  
  
  base =new Ground(10,800,1200,20);

}
function draw() {
  Engine.update(engine)
  background("yellow");  
  
  for(var k =0; k<division.length; k++){
    division[k].display();
  }
  for(var i=0; i<plinko.length; i++){
    plinko[i].display();
  }
  strokeWeight(2);
  line(0,450,1200,450);

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>460){

      if(particle.body.position.x < 300){
        score = score +500;
        particle = null;
      }
      else if(particle.body.position.x > 301 && particle.body.position.x <600){
        score = score +100;
        particle = null;
      }
      else {
        score = score +100;
        particle = null;
      }
    }
  }
  textSize(25);
   text("SCORE :"+ score,500,450);
base.display();
 drawSprites();
}

function mousePressed(){
  if(gameState === "play"){
    particle = new particle(mouseX,10,10,10);
  }
}