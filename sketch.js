var bg,bg_img;
var sleep,sleepImg;
var brush,brushImg;
var gym,gymImg;
var eat,eatImg;
var bathImg;
var moveImg;
var astro


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(300,200,50,50);
  bg.addImage("bg",bg_img);
  bg.scale = 0.15;

  astro = createSprite(300,230)
  astro.addAnimation("sleep",sleepImg)
  astro.scale = 0.1;

}

function preload(){

bg_img = loadImage("iss.png");
sleepImg = loadAnimation("sleep.png");
brushImg = loadAnimation("brush.png");
gymImg = loadAnimation("gym1.png","gym2.png");
eatImg = loadAnimation("eat1.png","eat2.png");
bathImg = loadAnimation("bath1.png","bath2.png");
moveImg = loadAnimation("move.png","move1.png","move.png");

}

function draw() {
  background("white");  


  if(keyDown("M")){
    astro.addAnimation("mill",moveImg)
  astro.changeAnimation("mill")
  astro.velocityX = 0
  astro.VelocityY = 0
  }

if(keyDown("UP_ARROW")){
  astro.addAnimation("brush",brushImg)
astro.changeAnimation("brush")
astro.velocityX = 0
astro.VelocityY = 0
}

if(keyDown("DOWN_ARROW")){
  astro.addAnimation("Gym",gymImg)
astro.changeAnimation("Gym")
astro.velocityX = 0
astro.VelocityY = 0
}


if(keyDown("RIGHT_ARROW")){
  astro.addAnimation("bath",bathImg)
astro.changeAnimation("bath")
astro.velocityX = 0
astro.VelocityY = 0
}


if(keyDown("LEFT_ARROW")){
  astro.addAnimation("eat",eatImg)
astro.changeAnimation("eat")
astro.velocityX = 0
astro.VelocityY = 0
}



  drawSprites();

textSize(15)  
fill("white")  
text("Instructions:",20,20)
text("Up Arrow = Brushing",20,40)
text("Down Arrow = Gymming",20,60)
text("Right Arrow = Bathing",20,80)
text("left Arrow = Eating",20,100)
text("M Key = Moving",20,120)


}