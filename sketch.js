function preload() {
  //load game assets
  frog = loadImage("images/frog.png")
  wormImg = loadImage("images/worm.png")
  swampImage = loadImage("images/swamplmg.png")
 
}
var swampImage;
var frog;
var wormImg;
var player;
var wormGroup;
var score=0;
var swamp;

function setup() {
  createCanvas(600,600)
  swamp = createSprite(600,600)
  swamp.addImage(swampImage)
  player=createSprite(50,50,30,40)
  wormGroup= new Group()
  player.addImage(frog) 
  

}
function draw() {
  background("black")
  player.x=mouseX
  player.y=mouseY
  if(player.x>=300&&player.y>=400){
    text("NO Cheating",200,200)
    player.x=50
    player.y=50
  }
  worms()
  drawSprites()
 stroke("red")
 noFill()
 ellipse(400,500,40,30)
 textSize(24)
 text("Score is :"+score,450,50)
 for(var i=0;i<wormGroup.length;i++)
 {
   var temp=wormGroup.get(i)
   if(player.isTouching(temp))
   {
     score=score+1;
     temp.destroy()
     temp=null
   }
 }
}
function worms()
{
  if(frameCount%30==0){
    var worm;
    worm.addImage(wormImg)
    worm=createSprite(400,500,10,5)
    worm.shapeColor="yellow"
    worm.velocityX=random(-10,10)
    worm.velocityY=random(-10,-1)
    wormGroup.add(worm)
  }
}

