///////////////////// CONSTANTS /////////////////////////////////////
const topLeft= document.querySelector("#topleft");
const topRight= document.querySelector("#topright");
const bottomLeft= document.querySelector("#bottomleft");
const bottomRight=document.querySelector("#bottomright");
const start=document.querySelector("#start")
const turnCounter = document.querySelector("#turn");
const readyButton = document.querySelector("#on");

///////////////////// APP STATE (VARIABLES) /////////////////////////
let order = [] //array
let turn;
let ready = false;
let light;
let win;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////

readyButton.addEventListener('click', (event) => {
  if (start.checked == true) {
    ready = true;
    turnCounter.innerHTML = "-";
  } else {
    ready = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

start.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

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

function playTurn() {
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

topLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

topRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bottomLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bottomRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function correctClick() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    lightColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        light = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    light = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}
