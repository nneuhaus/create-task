///////////////////// CONSTANTS /////////////////////////////////////
const topLeft= document.querySelector("#topleft");
const topRight= document.querySelector("#topright");
const bottomLeft= document.querySelector("#bottomleft");
const bottomRight=document.querySelector("#bottomright");
const start=document.querySelector("#start")
const turnCounter = document.querySelector("#turn");
///////////////////// APP STATE (VARIABLES) /////////////////////////
let order = [] //array
let turn;
let on = false;
let light;
let win;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////
function play() {
  win = false;
  order = [];
  playerOrder = [];
  light = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function turn() {
  on = false;

  if (light == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[light] == 1) one();
      if (order[light] == 2) two();
      if (order[light] == 3) three();
      if (order[light] == 4) four();
      light++;
    }, 200);
  }
}

function clearColor() {
  topLeft.style.backgroundColor = "green";
  topRight.style.backgroundColor = "red";
  bottomLeft.style.backgroundColor = "yellow";
  bottomRight.style.backgroundColor = "blue";
}

function lightColor() {
  topLeft.style.backgroundColor = "lightgreen";
  topRight.style.backgroundColor = "lightred";
  bottomLeft.style.backgroundColor = "lightyellow";
  bottomRight.style.backgroundColor = "lightblue";
}
