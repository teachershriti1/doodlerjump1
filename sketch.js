var doodler,doodlerimg,doodlerimg2
var plateform,plateformimg,platformgroup
var bg,backgroundimg
var invisibleblock, invisibleblocGroup
var score=0;
var gamestate="play";

function preload(){
backgroundimg=loadImage("background.png");
doodlerimg=loadAnimation("doodler-guy.png");
plateformimg=loadImage("platform.png")
doodlerimg2=loadAnimation("doodler-guy2.png")
}
function setup(){
 createCanvas(600,600)   
 bg=createSprite(300,300);
bg.addImage("bg",backgroundimg)
bg.velocityY=1;
bg.scale=1.5
doodler=createSprite(200,300);
doodler.addAnimation("doodler_right",doodlerimg)
doodler.addAnimation("doodler_left",doodlerimg2)
doodler.scale=0.6
platformGroup=new Group()
invisibleblockGroup=new Group()
}
function draw(){
background("black")
if(bg.y>300){
bg.y=200
}
if(keyDown("left")){
doodler.changeAnimation("doodler_left",doodlerimg2)
doodler.x=doodler.x-3
}
if(keyDown("right")){
    doodler.changeAnimation("doodler_right",doodlerimg2)
    doodler.x=doodler.x+3
}
if(keyDown("space")){
    doodler.velocityY=-5
}
if(doodler.isTouching(platformGroup)){
    doodler.velocityY=-7
}

if(doodler.isTouching(invisibleblockGroup)){
    doodler.vlocityY+=3
}
doodler.velocityY+=0.8
platform()
drawSprites()
}
function platform(){
if(frameCount%120===0){
plateform=createSprite(150,-10)
plateform.addImage(plateformimg)
plateform.velocityY=1;
plateform.x=Math.round(random(50,500))
plateform.depth=doodler.depth-1
plateform.lifetime=630
platformGroup.add(plateform)
invisibleblock=createSprite(plateform.x,0)
invisibleblock.width=plateform.width
invisibleblock.height=1
invisibleblock.velocityY=1
invisibleblockGroup.add(invisibleblock)
}
}