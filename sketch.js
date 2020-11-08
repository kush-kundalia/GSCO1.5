var car,wall;
var speed ,weight;


function setup() {
  createCanvas(800,800);
  speed=random(55,90);
  weight=random(400,1500)
  car=createSprite(400, 200, 30, 15);
  
  car.velocityX=speed;
  
  wall=createSprite(790,200,60,height/2);
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);
  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor=color("red");
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=color("yellow");
    }
    if(deformation<100){
      car.shapeColor=color("green");
    }
  }
  
  
  drawSprites();
}
