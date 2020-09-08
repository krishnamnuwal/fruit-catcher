var bg
var form;
var game;
var database;
var gameState=0;
var player;
var playerCount=0;




function preload(){
bg=loadImage("images/forest.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight);
database=firebase.database();
game=new Game();
game.getState();
game.start();

}

function draw(){
background(bg)

}





























