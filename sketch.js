var doodler,doodlerimg,doodlerimg2
var plateform,plateformimg,platformgroup
var bg,backgroundimg
var invisibleblock, invisibleblocGroup
var score=0;
var gamestate="play";
var monster, monsterimg1,monsterimg2,monsterimg3,monsterimg4
function preload(){
backgroundimg=loadImage("background.png");
doodlerimg=loadAnimation("doodler-guy.png");
plateformimg=loadImage("platform.png")
doodlerimg2=loadAnimation("doodler-guy2.png")
/*monsterimg1=loadImage("monster 1.png")
monsterimg2=loadImage("monster 2.png")
monsterimg3=loadImage("monster 3.png")
monsterimg4=loadImage("monster4.png")*/
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
monsterGroup=new Group()
invisibleMonsterGroup=new Group()
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
    doodler.velocityY=-15
}


doodler.velocityY+=0.8
if(doodler.isTouching(invisibleblockGroup)){
    doodler.y=400
}
if(frameCount%60===0){
    score+=1
}
if(doodler.isTouching(invisibleMonsterGroup)){
    
}

platform()
drawSprites()
fill("red")
textSize(30)
text("Score :"+score,10,30)
}

function platform(){
if(frameCount%100===0){
plateform=createSprite(150,-10)
plateform.addImage(plateformimg)
plateform.velocityY=1;
plateform.x=Math.round(random(50,500))
plateform.depth=doodler.depth-1
plateform.lifetime=630
platformGroup.add(plateform)
invisibleblock=createSprite(plateform.x,10)
invisibleblock.width=plateform.width
invisibleblock.height=1
invisibleblock.visible=false
invisibleblock.velocityY=1
invisibleblockGroup.add(invisibleblock)
if(frameCount%240===0){
    monster=createSprite(plateform.x,-25)
    monster.velocityY=1
    monster.scale=0.3
var rand=Math.round(random(1,4))
/*switch(rand){
    case 1: monster.addImage(monsterimg1)
    break;
    case 2: monster.addImage(monsterimg2)
    break;
    case 3: monster.addImage(monsterimg3)
    break;
    case 4: monster.addImage(monsterimg4)
    break;
    default: break;

}*/
monster.lifetime=650
monsterGroup.add(monster)
invisibleMonster=createSprite(plateform.x,-10)
invisibleMonster.width=50
invisibleMonster.height=1
invisibleMonster.visible=false
invisibleMonster.velocityY=1
invisibleMonster.lifetime=650
invisibleMonsterGroup.add(invisibleMonster)

}
}
}