// Construct players
const playerX = "x";
const playerO = "o";

// There are 8 winning combinations, we keep them in an array
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

// We need a list of squares

let squares = Array.from(document.querySelectorAll(".square"));
console.log(squares);

let counter = 0;
function whosTurn() {
  for (let i = 0; i < 9; i++) {
    if (counter === 0 || counter % 2 === 0) {
      counter += 1;
      playGame(playerX);
    } else {
      counter += 1;
      playGame(playerO);
    }
  }
}

function playGame(player) {
  console.log(`${player}'s turn.`);
}

// document.querySelector();
// square[0].innerText = "X";
// let clicked;
// let clickedSquare;

// // We are interested in clicks of the squares only
// window.addEventListener("click", function (event) {
//   if (event.target.classList[0] === "square") {
//     clickedSquare = event.target.classList[1];
//     clickedSquareValue = event.target;

//     console.log(`Square ${clickedSquare} was clicked`, clickedSquareValue);

//     // has square been clicked before?
//   }
// });

// console.log(clicked);
// // Build an empty array for 9 spaces so we can fill in the x's and o's
// // their index will align with the div class numbers
// let playArr = ["", "", "", "", "", "", "", "", ""];

// // Play the game
// function playGame() {
//   console.log("Square clicked");
// }

// Result output at the end of the game (win, lose, draw)

// function endOfGame()
