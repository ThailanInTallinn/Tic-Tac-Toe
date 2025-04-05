const Gameboard = (function() {
  const gameboard = [[], [], []];

  function addToBoard(positionX, positionY, playerSymbol) {
    if (positionX > 2 || positionX < 0) {
      console.error("Positon X out of bounds.");
    } else if (positionY > 2 || positionY < 0) {
      console.error("Position Y out of bounds.");
    } else {
      gameboard[positionY][positionX] = playerSymbol;
    }
  }

  const getBoard = () => gameboard;

  return { addToBoard, getBoard };
})();

function createUser(name, symbol) {
  let userScore = 0;
  const addScore = () => userScore++;
  const getScore = () => userScore;
  return { name, symbol, getScore, addScore };
}

function gameControl(
  playerOne,
  playerTwo = createUser("CPU", playerOne.symbol == "X" ? "O" : "X"),
  gameboard
) { }
