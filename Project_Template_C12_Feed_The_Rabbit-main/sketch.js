var garden,rabbit;
var gardenImg,rabbitImg;
var apel;
var apell
var eavs
var leave;
var blueLeaf
var umberLeaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apell=loadImage("apple.png")
  eavs=loadImage("leaf.png")
  blueLeaf=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


apel = createSprite(300,100,100,100)
  apel.scale=0.09;
  apel.addImage("pic",apell);



  leave=createSprite(100,100,20,20)
leave.addImage("pic",eavs)
leave.scale=.1

umberLeaf=createSprite(230,100,100,100)
umberLeaf.addImage("pic",blueLeaf)
umberLeaf.scale=.1
apel.velocityY=3
leave.velocityY=3
umberLeaf.velocityY=25





}


function draw() {
  background("Green");
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  createApples();

rabbit.x=mouseX
if (apel.y>400){
  apel.y=0
  if (umberLeaf.y>100){
    umberLeaf.y=0
 if (leave.y>400){
    leave.y=0
 } 
}
}

function createApples() {
  apel.x=Math.round(random(0,400))
  
   
 

}

function createLeaves() {
leave.x=Math.round(randomn(0,40))
}

}

