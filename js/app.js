///////////////////// CONSTANTS /////////////////////////////////////
const buttonGreen= document.querySelector("#topleft");
const buttonRed= document.querySelector("#topright");
const buttonYellow= document.querySelector("#bottomleft");
const buttonBlue=document.querySelector("#bottomright");
const beginButton=document.querySelector("#begin")
const turnCounter = document.querySelector("#turn");
const startButton = document.querySelector("#startButton");
///////////////////// APP STATE (VARIABLES) /////////////////////////
let order = [] //array
let turn;
let on = false;
let light;
let win;
var light1=Math.random();
var light2=Math.random();
var light3=Math.random();
var light4=Math.random();
var light5=Math.random();
var light6=Math.random();
var light7=Math.random();
var light8=Math.random();
var light9=Math.random();
var light10=Math.random();
let lights =[light1, light2, light3, light4, light5, light6, light7, light8, light9, light10];
let colors = [];
for (i=0; i<=lights.length; i++){
  if (lights[i] <= 0.25) {
    colors[i]="green";
  }
  else if (lights[i] <=0.5 && lights[i] > 0.25) {
    colors[i]="red";
  }
  else if (lights[i] <=0.75 && lights[i] >0.5){
    colors[i]="blue";
  }
  else if (lights[i] <= 1 && lights[i] > 0.75){
    colors[i]="yellow";
  }
  else {
    break;
  };
}
var greenButton = document.getElementById("buttonGreen");
var redButton = document.getElementById("buttonRed");
var blueButton = document.getElementById("buttonBlue");
var yellowButton = document.getElementById("buttonYellow");

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////

///////////////////// FUNCTIONS /////////////////////////////////////
function startGame() {
  for (i = 1; i<=10; i++){
    console.log("begin round " + i);
    beginRound(i);
  };
};

function beginRound(roundNumber) {
  for (j = 1; j <= roundNumber; j++) {
    console.log("light up " + j);
    lightsUp(j);
  };

};

function gameOn() {
  on = true;
}



function lightsUp(number) {
  var lightUp = colors[number - 1];
  switch (lightUp) {
    case "green":
      setTimeout(greenLight(), 500);
      setTimeout(console.log("g"), 500);
      break;
    case "red":
      setTimeout(redLight(), 500);
      setTimeout(console.log("r"), 500);
      break;
    case "blue":
      setTimeout(blueLight(), 500);
      setTimeout(console.log("b"), 500);
      break;
    case "yellow":
      setTimeout(yellowLight(), 500);
      setTimeout(console.log("y"), 500);
      break;
    default:
      break;
  }
  setTimeout((console.log("done waiting"), 500));
}

function clearGreen(){
  document.getElementById("buttonGreen").style.backgroundColor = "#659965";
}

function greenLight(){
  document.getElementById("buttonGreen").style.backgroundColor = "#23db23";
  setTimeout(clearGreen, 2000);
}

function clearRed(){
  document.getElementById("buttonRed").style.backgroundColor = "#8f3535";
}

function redLight(){
  document.getElementById("buttonRed").style.backgroundColor = "#d43131";
  setTimeout(clearRed, 2000);
}
function clearBlue(){
  document.getElementById("buttonBlue").style.backgroundColor = "#4988a6";
}

function blueLight(){
  document.getElementById("buttonBlue").style.backgroundColor = "#2d5ecf";
  setTimeout(clearBlue, 2000);
}
function clearYellow(){
  document.getElementById("buttonYellow").style.backgroundColor = "#c4bf49";
}

function yellowLight(){
  document.getElementById("buttonYellow").style.backgroundColor = "#f0e946";
  setTimeout(clearYellow, 2000);
}

function followGreen(){
  greenLight();
  setTimeout(console.log("g"), 150);
}

function followRed(){
  redLight();
  setTimeout(console.log("r"), 150);
}

function followBlue(){
  blueLight();
  setTimeout(console.log("b"), 150);
}

function followYellow(){
  yellowLight();
  setTimeout(console.log("y"), 150);
}

// function betweenClicks() {
  //var waitTime
//  switch (waitTime) {
//    case "round1":

  //}
//}
