var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 50, 80);//25
  fixedRect.shapeColor="blue";
  movingRect=createSprite(600,200,60,30);//30
  movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  console.log(movingRect.x-fixedRect.x);

  drawSprites();
}