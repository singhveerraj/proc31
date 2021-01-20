const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;




function setup() {
  createCanvas(500,800);
  
  

 engine = Engine.create();
 world = engine.world;

ground = new Ground(200,755,605,40);

for(var k = 0; k <= this.width; k = k + 70){
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight-10));
}
for(var j = 40; j <=width; j = j+50){
  plinkos.push(new Plinko(j,75));
  
}
for(var j = 15; j <=width - 10; j = j+50){
  plinkos.push(new Plinko(j,175));
  
}
for(var j = 40; j <=width; j = j+50){
  plinkos.push(new Plinko(j,275));
  
}
for(var j = 15; j <=width - 10; j = j+50){
  plinkos.push(new Plinko(j,375));
  
}


Engine.run(engine);
}

function draw() {
  background(0); 
  ground.display(); 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-15,width/2+15),10,10));
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j < particles.length; j++){
  particles[j].display();
 }
 
  drawSprites();
}

