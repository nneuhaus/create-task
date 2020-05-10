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
let ready = true;
let playerClick;
let newNumber = -1;
let genNumber = 0;
var light1 = (Math.random() * 4);
var light2 = (Math.random() * 4);
var light3 = (Math.random() * 4);
var light4 = (Math.random() * 4);
var light5 = (Math.random() * 4);
var light6 = (Math.random() * 4);
var light7 = (Math.random() * 4);
var light8 = (Math.random() * 4);
var light9 = (Math.random() * 4);
var light10 = (Math.random() * 4);
let lights =[light1, light2, light3, light4, light5, light6, light7, light8, light9, light10];
let colors = [];
for (i=0; i<=lights.length; i++){
  if (lights[i] <= 1) {
    colors[i]="green";
  }
  else if (lights[i] <=2 && lights[i] > 1) {
    colors[i]="red";
  }
  else if (lights[i] <=3 && lights[i] > 2) {
    colors[i]="blue";
  }
  else if (lights[i] <= 4 && lights[i] > 3) {
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

if ((yellowButton)||(redButton)||(blueButton)||(greenButton)) {
  yellowButton.addEventListener("click", evaluateInput);
  redButton.addEventListener("click", evaluateInput);
  blueButton.addEventListener("click", evaluateInput);
  greenButton.addEventListener("click", evaluateInput);
} else {
  yellowButton.addEventListener("click", evaluateInput);
  redButton.addEventListener("click", evaluateInput);
  blueButton.addEventListener("click", evaluateInput);
  greenButton.addEventListener("click", evaluateInput);
}

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////
//MAKE CLICK INTITIATE ACTION
///////////////////// FUNCTIONS ////////////////////////////////////

function roundOne() {
  beginRound(1);
  };

function evaluateInput() {
  console.log("evaluate");
  if (genNumber == newNumber) {
    console.log("partial success");
    beginRound();
  } else {
    console.log("uh oh");
  }
}

function roundTwo(){
  beginRound(2);
}

/*function continueGame() {
  for (i = 2; i<=10; i++){
    console.log("begin round " + i);
    beginRound(i);
  };
};
*/
function beginRound(roundNumber) {
  for (j = 1; j <= roundNumber; j++) {
    console.log("light up " + j);
    lightsUp(j);
    };
};


/*function gameOn() {
  on = true;
}

function waitRound(x) {
  for (k = 1; k <= x; k++) {

    console.log("testa" + k);
  }
}*/

function lightsUp(number) {
  var lightUp = colors[number - 1];
  console.log(ready);
    if (ready == true) {
      switch (lightUp) {
        case "green":
          setTimeout(greenLight(), 500);
          setTimeout(console.log("g"), 500);
          genNumber = 1;
          break;
        case "red":
          setTimeout(redLight(), 500);
          setTimeout(console.log("r"), 500);
          genNumber = 2;
          break;
        case "blue":
          setTimeout(blueLight(), 500);
          setTimeout(console.log("b"), 500);
          genNumber = 3;
          break;
        case "yellow":
          setTimeout(yellowLight(), 500);
          setTimeout(console.log("y"), 500);
          genNumber = 4;
          break;
        default:
          break;
        }
    }
  }

function clearGreen(){
  ready = true;
  document.getElementById("buttonGreen").style.backgroundColor = "#659965";
}

function greenLight(){
  ready = false;
  document.getElementById("buttonGreen").style.backgroundColor = "#23db23";
  setTimeout(clearGreen, 2000);
}

function clearRed(){
  ready = true;
  document.getElementById("buttonRed").style.backgroundColor = "#8f3535";
}

function redLight(){
  ready = false;
  document.getElementById("buttonRed").style.backgroundColor = "#d43131";
  setTimeout(clearRed, 2000);
}
function clearBlue(){
  ready = true;
  document.getElementById("buttonBlue").style.backgroundColor = "#4988a6";
}

function blueLight(){
  ready = false;
  document.getElementById("buttonBlue").style.backgroundColor = "#2d5ecf";
  setTimeout(clearBlue, 2000);
}
function clearYellow(){
  ready = true;
  document.getElementById("buttonYellow").style.backgroundColor = "#c4bf49";
}

function yellowLight(){
  ready = false;
  document.getElementById("buttonYellow").style.backgroundColor = "#fff06e";
  setTimeout(clearYellow, 2000);
}

function followGreen(){
  greenLight();
  setTimeout(console.log("g"), 150);
  ready = true;
  newNumber = 1;
}

function followRed(){
  redLight();
  setTimeout(console.log("r"), 150);
  ready = true;
  newNumber = 2;
}

function followBlue(){
  blueLight();
  setTimeout(console.log("b"), 150);
  ready = true;
  newNumber = 3;
}

function followYellow(){
  yellowLight();
  setTimeout(console.log("y"), 150);
  ready = true;
  newNumber = 4;
}
