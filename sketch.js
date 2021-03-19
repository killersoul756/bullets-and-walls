var bullet,wall;
var speed,thickness,weight;

function setup() {
  createCanvas(1600,400);
 
 thickness=random(22,83);

 wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white"

 bullet=createSprite(50,200,50,10);
  bullet.shapeColor="white"

 speed=random(223,321)
 bullet.velocityX=speed;

 weight=random(30,52) 

}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="lime"
  }
  if(damage>180){
    bullet.shapeColor="white"
  }
  drawSprites();
 }

function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x + lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;

}
