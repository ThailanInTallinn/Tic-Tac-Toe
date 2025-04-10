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

function updateBoard(boardPosition, player) {
  const square = document.createElement("p");
  const board = document.querySelector("#gameboard_container");
  switch (boardPosition) {
    case 0:
      Gameboard.addToBoard(0, 0, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 1:
      Gameboard.addToBoard(0, 1, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 2:
      Gameboard.addToBoard(0, 2, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 3:
      Gameboard.addToBoard(1, 0, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;

    case 4:
      Gameboard.addToBoard(1, 1, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 5:
      Gameboard.addToBoard(1, 2, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 6:
      Gameboard.addToBoard(2, 0, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 7:
      Gameboard.addToBoard(2, 1, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
    case 8:
      Gameboard.addToBoard(2, 2, player);
      square.innerText = player.symbol;
      if (!(board.children[boardPosition].innerText == 'X') && !(board.children[boardPosition].innerText == 'O')) {
        board.replaceChild(square, board.childNodes[boardPosition]);
      }
      break;
  }
}

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
      header.innerText = `${Gameboard.getBoard()[i][0].name} is the winner!`;
      Gameboard.getBoard()[i][0].setWin();
      return true;
    } else if (Gameboard.getBoard()[0][i].symbol == Gameboard.getBoard()[1][i].symbol && Gameboard.getBoard()[1][i].symbol == Gameboard.getBoard()[2][i].symbol) {
      header.innerText = `${Gameboard.getBoard()[0][i].name} is the winner!`;
      Gameboard.getBoard()[0][i].setWin();
      return true;
    }

  }

  if (Gameboard.getBoard()[0][0].symbol == Gameboard.getBoard()[1][1].symbol && Gameboard.getBoard()[1][1].symbol == Gameboard.getBoard()[2][2].symbol) {
    header.innerText = `${Gameboard.getBoard()[0][0].name} is the winner!`;
    Gameboard.getBoard()[0][0].setWin();
    return true;
  }

  if (Gameboard.getBoard()[0][2].symbol == Gameboard.getBoard()[1][1].symbol && Gameboard.getBoard()[1][1].symbol == Gameboard.getBoard()[2][0].symbol) {
    header.innerText = `${Gameboard.getBoard()[0][2].name} is the winner!`;
    Gameboard.getBoard()[0][2].setWin();
    return true;
  }

  return false;
}

let outterCounter = 0;

function gameControl(
  playerOne,
  playerTwo = createUser("CPU", playerOne.symbol == "X" ? "O" : "X"),
  e
) {

  if (outterCounter % 2 == 0 && !(checkMatchWinner())) {
    updateBoard(Number(e.target.innerText), playerOne);
    header.innerText = `${playerTwo.name}, it's your turn!`;
  } else if (outterCounter % 2 != 0 && !(checkMatchWinner())) {
    updateBoard(Number(e.target.innerText), playerTwo);
    header.innerText = `${playerOne.name}, it's your turn!`;
  }

  outterCounter += 1;


  if (outterCounter >= 4) {
    checkMatchWinner();
  } else if (outterCounter == 8 && !(checkMatchWinner())) {
    header.innerText = "It's a tie!";
    return;
  }


}


let secondCounter = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const basePlayer = createUser("Void", `${secondCounter}`);
    secondCounter++;
    Gameboard.addToBoard(i, j, basePlayer);
    const board = document.querySelector("#gameboard_container");
    const square = document.createElement("p");
    square.classList.add("non-player");
    square.innerText = basePlayer.symbol;
    board.appendChild(square);
  }
}

let firstPlayer = createUser("Thailan", "X");
let secondPlayer = createUser("Blanda", "O");

const board = document.querySelector("#gameboard_container");
const header = document.querySelector("header h1");

header.addEventListener("click", (e1) => {
  header.innerText = `${firstPlayer.name}, it's your turn!`;
  board.addEventListener("click", (e2) => {
    gameControl(firstPlayer, secondPlayer, e2);
  })
})
