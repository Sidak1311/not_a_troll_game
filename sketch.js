//IF YOU ARE READING THIS BEFORE THE GAME YOU SPOILED IT i mean the game
var ball,score,gameState

function setup() {
  createCanvas(800, 800);
  ball = createSprite(random(0,750),random(0,550),50,50)
  ball.shapeColor = 'red'
  score = 0
  gameState = 'notStarted'
}


function draw() {
  background(100);
  if(gameState === 'notStarted'){
    text("Press sqaure atleast 50 times before you leave(it say different things)",400,400)
  }
  if(mousePressedOver(ball)){
    ball.x = random(0,750)
    ball.y = random(0,750)
    score += 5
    gameState = 'started'
  }
  if(score > 9){
    text("Achivements: Done timepass",100,50)
  }
  if(score > 14){
    text("Most people would have left you know",100,65)
  }
  if(score > 25){
    text("Why are you still here?",100,80)
  }
  if(score > 29){
    text(">:(",100,105)
  }
  if(score > 34){
    text("Why are you like this",100,120)
  }
  if(score > 49){
    text("I'm out",100,140)
  }
  if(score > 100){
    text("FINE YOU WIN. here is a text for you",100,155)
    text("YOU WIN -_-",400,400)
  }
  drawSprites()
  text("Score: "+score,400,50)
}
