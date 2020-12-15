 var score = 0;

var death = 0;
function preload(){
  player = loadImage("bike.png");
  obstacle1 = loadImage("download.png");
  track = loadImage("track.jpg");
  gold = loadImage("gold.png"); 
  ground = loadImage("ground.png");
}

function setup() {
  c2 = createSprite(720,-3710,10000,1)
  createCanvas(displayWidth-30, displayHeight-210);
 obstacle=createSprite(950,-550.15,500,60);
 obstacle.visible=false;
 ob = createSprite(450,-1550,500,60);
 ob.visible=false;
 ob1 = createSprite(950,-2550,500,60);
 ob1.visible=false;
 ob2 = createSprite(450,-2900,500,60);
 ob2.visible=false;
  //obstacle.addImage(obstacle1);
  //obstacle1.scale=2;
  bike = createSprite(720,630);
  bike.addImage(player);
  gold1 = createSprite(320,-1000,40,40);
  gold1.addImage(gold);
  gold2 = createSprite(700,-1900,40,40);
  gold2.addImage(gold);
  gold3 = createSprite(900,-2400,40,40);
  gold3.addImage(gold);
  gold4 = createSprite(400,-3000,40,40);
  gold4.addImage(gold);
  gold5 = createSprite(800,-3400,40,40);
  gold5.addImage(gold);
  gold6 = createSprite(500,-500,40,40);
  gold6.addImage(gold);
  c = createSprite(bike.x,bike.y,1,1);
 c2.visible=false;
}
 


function draw() {
  background(ground);
  
  image(track,0,-displayHeight*4-170,displayWidth,displayHeight*5);
  image(obstacle1,700,-650.150,550);
  image(obstacle1,200,-1650.150,550);
  image(obstacle1,700,-2650.150,550);
  image(obstacle1,200,-3000.150,550);
  textSize(20);
  if(keyWentDown(UP_ARROW)){
    bike.velocityY=-20;
    c.velocityY=-20;
  }
  if(keyWentUp(UP_ARROW)){
    bike.velocityY=0;
    c.velocityY=0;
  }

  if(keyWentDown(LEFT_ARROW)){
    bike.velocityX=-5;
  }
  if(keyWentUp(LEFT_ARROW)){
    bike.velocityX=0;
  }

  if(keyWentDown(RIGHT_ARROW)){
    bike.velocityX=5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    bike.velocityX=0;
  }
   
  if(bike.isTouching(gold1)){
    score=score+=1;
    gold1.destroy();
   
  }
  if(bike.isTouching(gold2)){
    score=score+=1;
    gold2.destroy();
    
  }
  if(bike.isTouching(gold3)){
    score=score+=1;
    gold3.destroy();
    
  }
  if(bike.isTouching(gold4)){
    score=score+=1;
    gold4.destroy();
    
  }
  if(bike.isTouching(gold5)){
    score=score+=1;
    gold5.destroy();
    
  }
  if(bike.isTouching(gold6)){
    score=score+=1;
    gold6.destroy();
    
  }
  if(bike.isTouching(c2)&&score===6){
    
    alert("YAY!! You completed the game");
    }
    if(bike.isTouching(c2)&&score<6){
      
      alert("OOPS!! You did not collect the golds!");
      }
    
  textSize(30);
  fill("red");
  text("score : " + score,c.x+550,c.y-300);
   text("Death : " + death,c.x-690,c.y-300)
   
  if(bike.isTouching(obstacle)){
    textSize(30);
  
    death+=1;
    bike.x=720;
    bike.y=630;
    c.x=720;
    c.y=630;
  }
  
  if(bike.isTouching(ob)){
    textSize(30);
  
    death+=1;
    bike.x=720;
    bike.y=630;
    c.x=720;
    c.y=630;
  }
  if(bike.isTouching(ob1)){
    textSize(30);
  
    death+=1;
    bike.x=720;
    bike.y=630;
    c.x=720;
    c.y=630;
  }
  if(bike.isTouching(ob2)){
    textSize(30);
  
    death+=1;
    bike.x=720;
    bike.y=630;
    c.x=720;
    c.y=630;
  }
  if(death===3){
    
    alert("OOPS! You Loose");
  }
   
   
  //camera.position.x=displayWidth/2
  camera.position.y=bike.y;
   drawSprites();
  }

  
  
  


