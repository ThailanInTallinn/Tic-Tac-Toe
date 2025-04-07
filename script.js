const Gameboard = (function() {
  const gameboard = [[], [], []];

  function addToBoard(positionY, positionX, player) {
    if (positionX > 2 && positionX < 0) {
      console.error("Positon X out of bounds.");
      return false;
    } else if (positionY > 2 && positionY < 0) {
      console.error("Position Y out of bounds.");
      return false;
    } else {
      gameboard[positionY][positionX] = player;
      return true;
    }
  }

  const getBoard = () => gameboard;

  return { addToBoard, getBoard };
})();

function createUser(name, symbol) {
  let userScore = 0;
  let won = false;
  const setWin = () => won = getWin() ? false : true;
  const getWin = () => won;
  const addScore = () => userScore++;
  const getScore = () => userScore;
  return { name, symbol, getScore, addScore, setWin, getWin };
}

function checkMatchWinner() {

  for (let i = 0; i < 3; i++) {
    if (Gameboard.getBoard()[i][0].symbol == Gameboard.getBoard()[i][1].symbol && Gameboard.getBoard()[i][1].symbol == Gameboard.getBoard()[i][2].symbol) {
      console.log(`${Gameboard.getBoard()[i][0].name} is the winner!`);
      Gameboard.getBoard()[i][0].setWin();
      return true;
    } else if (Gameboard.getBoard()[0][i].symbol == Gameboard.getBoard()[1][i].symbol && Gameboard.getBoard()[1][i].symbol == Gameboard.getBoard()[2][i].symbol) {
      console.log(`${Gameboard.getBoard()[0][i].name} is the winner!`);
      Gameboard.getBoard()[0][i].setWin();
      return true;
    }

  }

  if (Gameboard.getBoard()[0][0].symbol == Gameboard.getBoard()[1][1].symbol && Gameboard.getBoard()[1][1].symbol == Gameboard.getBoard()[2][2].symbol) {
    console.log(`${Gameboard.getBoard()[0][0].name} is the winner!`);
    Gameboard.getBoard()[0][0].setWin();
    return true;
  }

  if (Gameboard.getBoard()[0][2].symbol == Gameboard.getBoard()[1][1].symbol && Gameboard.getBoard()[1][1].symbol == Gameboard.getBoard()[2][0].symbol) {
    console.log(`${Gameboard.getBoard()[0][2].name} is the winner!`);
    Gameboard.getBoard()[0][2].setWin();
    return true;
  }

  return false;
}


function gameControl(
  playerOne,
  playerTwo = createUser("CPU", playerOne.symbol == "X" ? "O" : "X"),
) {
  let positionX;
  let positionY;

  let outterCounter = 0;

  while (!(playerOne.getWin()) && !(playerTwo.getWin())) {

    if (outterCounter % 2 == 0) {
      positionX = Number(prompt(`${playerOne.name}, pick your X position`));
      positionY = Number(prompt(`${playerOne.name}, pick your Y position`));
      Gameboard.addToBoard(positionY, positionX, playerOne);
    } else {
      positionX = Number(prompt(`${playerTwo.name}, pick your X position`));
      positionY = Number(prompt(`${playerTwo.name}, pick your Y position`));
      Gameboard.addToBoard(positionY, positionX, playerTwo);
    }

    outterCounter += 1;


    if (outterCounter >= 4) {
      checkMatchWinner();
    }

  }

}


let secondCounter = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const basePlayer = createUser("Void", `A${secondCounter}`);
    secondCounter++;
    Gameboard.addToBoard(i, j, basePlayer);
  }
}

let firstPlayer = createUser("Thailan", "X");
let secondPlayer = createUser("Blanda", "O");
gameControl(firstPlayer, secondPlayer);

