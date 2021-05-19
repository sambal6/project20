
var bgImg
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catI = loadAnimation("images/cat1.png")
    mouseI = loadAnimation("images/mouse1.png")
   mouseI2 = loadAnimation("images/mouse2.png","images/mouse3.png")
   catI2 = loadAnimation("images/cat2.png","images/cat3.png")
   catI3 = loadAnimation("images/cat4.png")
   mouseI3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(800,550)
  cat.addAnimation("c",catI);
  cat.scale = 0.2

  mouse = createSprite(200,550);
  mouse.addAnimation("m",mouseI)
  mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0
        cat.addAnimation("c",catI3)
        cat.changeAnimation("C")
        cat.x = 300
        mouse.addAnimation("m",mouseI3)
        mouse.changeAnimation("m")
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("m",mouseI2)
 mouse.changeAnimation("m")
    mouse.frameDelay = 25;
}
if(keyCode === LEFT_ARROW){
    cat.addAnimation("c",catI2)
    cat.changeAnimation("c")
    frameDelay = 25
    cat.velocityX = -2
}
}

