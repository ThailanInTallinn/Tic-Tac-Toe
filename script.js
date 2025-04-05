const Gameboard = (function () {
  const gameboard = [];

  function addToBoard(player) {
    if (gameboard.length < 9) {
      gameboard.push(player);
    } else {
      console.error("The gameboard is full.");
    }
  }

  const getBoard = () => gameboard;

  return { addToBoard, getBoard };
})();

function createUser(name, symbol) {
  let userScore = 0;
  let userStatus = 0;
  const addScore = () => userScore++;
  const getScore = () => userScore;
  const addStatus = () => userStatus++;
  const getStatus = () => userStatus;
  return { name, symbol, getStatus, getScore, addScore, addStatus };
}

function gameControl(
  playerOne,
  playerTwo = createUser("CPU", playerOne.symbol == "X" ? "O" : "X"),
  gameboard
) {}
