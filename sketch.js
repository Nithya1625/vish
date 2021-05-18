var vv
var vvimg,gra

function preload(){
gra = loadImage("gra.jpg")
  vvimg = loadImage("greet.jpg")
}


function setup() {
  createCanvas(1200,1000);
 vv= createSprite(600, 500, 50, 50);
 vv.addImage("vv",vvimg)
 vv.scale=1.5
}

function draw() {
  background("pink");  
  drawSprites();
  textSize(70)
  fill("purple")
  text("Vishmaya .You are the best!!!",200,180)
  
  textSize(50)
  fill("blue")
  text("From,",200,280)
  text("Nithya mam",200,330)
}