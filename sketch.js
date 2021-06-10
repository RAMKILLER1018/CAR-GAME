var hypnoticBall, database;
var position;
var playerCount;
var gameState = 0;
var form,game,player;
var allPlayers;
var cars;
var car1,car2,car3,car4;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight);

game = new Game();
game.getState();
game.start();
}

function draw(){
  if(playerCount===4){
    game.updateState(1)
  }
if(gameState===1){
  game.play();
}
}
