var gameState = 0
var player, playerImg
var island, island2, island3, island4, island5, islandImg
var gameOver, gameOverImg
var restart, restartImg
var deaths=0
var ladder, ladderImg

function preload(){
  playerImg = loadImage("player.png")
  islandImg = loadImage("island.png")
  gameOverImg = loadImage("gameover.png")
  restartImg = loadImage("restart.png")
  ladderImg = loadImage("ladder.png")
}

function setup(){
createCanvas(500,500)

player = createSprite(150,250,20,20)
player.addImage("player",playerImg)
player.scale = 0.5
player.setCollider("rectangle",20,10,120,150)



island = createSprite(150,400,300,15)
island.addImage("island",islandImg)
island.scale = 0.8
island.setCollider("rectangle",0,0,100,60);

island2 = createSprite(450,320,300,15)
island2.addImage("island",islandImg)
island2.scale = 0.4
island2.setCollider("rectangle",0,0,50,60);


island3 = createSprite(150,200,300,15)
island3.addImage("island",islandImg)
island3.scale = 0.8
island3.setCollider("rectangle",0,0,100,60);


island4 = createSprite(450,200,300,15)
island4.addImage("island",islandImg)
island4.scale = 0.4
island4.setCollider("rectangle",0,0,50,20);

island5 = createSprite(50,450,300,15)
island5.addImage("island",islandImg)
island5.scale = 0.4
island5.setCollider("rectangle",0,0,120,20);
island5.visible = false


gameOver = createSprite(250,100,50,50);
gameOver.addImage("Game over", gameOverImg);
gameOver.scale = 0.8


restart = createSprite(250,250,50,50);
restart.addImage("restart", restartImg);
restart.scale = 0.4

ladder = createSprite(50,50,75,50);
ladder.addImage("ladder", ladderImg);
ladder.setCollider("rectangle",-10,15,50,120)
}

function draw(){
background(50);
text("Deaths: "+ deaths,400,50)
if (gameState==0){
gameOver.visible = false
restart.visible = false
player.collide(island)
player.collide(island2)
player.collide(island3)
player.collide(island5)
if (player.y<170){
  player.collide(island4)
}
player.velocityY = player.velocityY + 0.15

if (keyDown("LEFT_ARROW")){
  player.x=player.x-5
}
if (keyDown("RIGHT_ARROW")){
  player.x=player.x+5
}
if (keyDown("SPACE")){
  player.velocityY=-5
}}

if (player.isTouching(ladder)){
  gameState=0.5
}
if (gameState==0.5){
  island.visible=false
  island2.visible=false
  island3.visible=false
  island4.visible=false
  ladder.visible=false
  gameOver.visible = false
  restart.visible = false
  player.velocityY = player.velocityY + 0.15

  if (keyDown("LEFT_ARROW")){
    player.x=player.x-5
  }
  if (keyDown("RIGHT_ARROW")){
    player.x=player.x+5
  }
  if (keyDown("SPACE")){
    player.velocityY=-5
  }
}


if (player.y>550){
  gameState=1
}
if (gameState==1){
  gameOver.visible = true
  restart.visible = true
}
if (mousePressedOver(restart)){
  reset();
}

drawSprites();
}
function reset(){
  gameState = 0
  island.visible=true
  island2.visible=true
  island3.visible=true
  island4.visible=true
  ladder.visible=true
  player.x = 150
  player.y = 250
  gameOver.visible = false
  restart.visible = false
  deaths=deaths+1
}

