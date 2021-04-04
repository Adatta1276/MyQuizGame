//create checkboxes using p5
//delete the already made contestant node and all nested data in database, may fix bug
var contestantNumber,database,quiz,questions,question1,q2,q3,q4,q5,q6,q7,q8,q9,q10,contestant_main,canvas;
var contestantCounter;
var allContestants;
var newPlayerExample;
var contestant;
var  question;
//questions = [], question = var;

var GameState = 0;

var quizObj;

var playerCount;
/*function preload() {

}*/

function setup() {
  database = firebase.database();
  canvas = createCanvas(1920,1080);
  canvas.mousePressed(screenFull);

  quizObj = new Quiz();
  
  //question = new Question1(700,175);
  //newPlayerExample = new Contestant();

}

function draw() {
background("blue");
//console.log(GameState);

/*quizObj.getState();
quizObj.start();*/

if(playerCount === 4) {
  GameState = 1;

}

if(GameState === 1) {
  //othwerwise comment getstate in draw()
  quizObj.getState();
  quizObj.update();
  quizObj.start();
}





fill("red");
textSize(20);
noStroke();
text("x : "+mouseX,40,1050);
text("y : "+mouseY,140,1050);



}







function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}


























































































































