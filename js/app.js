///////////////////// CONSTANTS /////////////////////////////////////
const topLeft= document.querySelector("#topleft");
const topRight= document.querySelector("#topright");
const bottomLeft= document.querySelector("#bottomleft");
const bottomRight=document.querySelector("#bottomright");
const beginButton=document.querySelector("#begin")
const turnCounter = document.querySelector("#turn");
const readyButton = document.querySelector("#on");

///////////////////// APP STATE (VARIABLES) /////////////////////////
let order = [] //array
let turn;
let ready = false;
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

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////
function startGame() {
  for (i=0;i<=9;i++){
    beginRound(i);
  };
};

function beginRound(roundNumber) {
  for (i=0;i<=roundNumber;i++) {
    lightsUp();
  };
};

function lightsUp() {
  var lightNumber=Math.random();
  var lightUp;
  if (lightNumber <= 0.25) {
    lightUp="green";
  }
  else if (lightNumber <=0.5 && lightNumber > 0.25) {
    lightUp="red";
  }
  else if (lightNumber <=0.75 && lightNumber >0.5){
    lightUp="blue";
  }
  else if (lightNumber<=1 && lightNumber >0.75){
    lightsUp="yellow";
  }
  else(){
    lightUp="yellow";
  };
}

function gameOn() {
  if (startButton=true) {
    console.log("testagain");
  }
}
