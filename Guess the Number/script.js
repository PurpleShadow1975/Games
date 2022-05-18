//choose a random number
let randomNumber = Math.trunc(Math.random() * 50) + 1;
let checkButton = document.querySelector(".checkButton");

let localHighScore = getHighScore();

document.querySelector(".againButton").addEventListener("click", gameReset);
document
  .querySelector(".checkButton")
  .addEventListener("click", compareNumbers);

//script that changes the name
const nameData = document.querySelector('#nameData')
const changeNameButton = document.querySelector('.changeName')  
const nameBox = document.querySelector('#nameData')
document.querySelector('.changeName').addEventListener("click",changeName)

function changeName(){
  document.querySelector('.replies').textContent = 'What should I call you?'
  changeNameButton.textContent = 'Call me..'
  nameBox.classList.toggle('newName')
  if(nameData.value != false){
    document.querySelector('.replies').textContent = `Hello, ${nameData.value}`
    localStorage.setItem('name',nameData.value)
    nameBox.value = ''
    changeNameButton.textContent = 'Actually, call me...'
  }
}

// name change script end

// name recall

function rememberMe(){
  if(localStorage.getItem('name') != undefined){
  document.querySelector('.replies').textContent = `Welcome back, ${localStorage.getItem('name')}`
  }
}
rememberMe();
document.querySelector('.highscore').textContent = localHighScore;

function compareNumbers() {
  const guessedNumber = Number(document.querySelector(".guessedNumber").value);

  if (!guessedNumber || guessedNumber > 50) {
    document.querySelector(".comment").textContent = "choose 1 - 50";
  } else if (guessedNumber === randomNumber) {
    document.querySelector(".comment").textContent = "you won!";
    updateHighScore();
    winningScreen();
  } else if (guessedNumber > randomNumber) {
    document.querySelector(".comment").textContent = "⬇";
    document.querySelector(".comment").style.color = "lightblue";
    updateScore();
  } else {
    document.querySelector(".comment").textContent = "⬆";
    document.querySelector(".comment").style.color = "lightblue";
    updateScore();
  }
}

function updateScore() {
  let score = Number(document.querySelector(".score").textContent);
  if (score === 1) {
    document.querySelector(".comment").textContent = "game over!";
    losingScreen();
    document.querySelector(".score").textContent = 0;
  } else {
    score -= 1;
    document.querySelector(".score").textContent = score;
  }
}

function updateHighScore() {
  let currScore = Number(document.querySelector(".score").textContent);
  let currHighScore = Number(document.querySelector(".highscore").textContent);
  if (currScore > currHighScore) {
    document.querySelector(".highscore").textContent = currScore;
    setNewHighscore(currScore);
  }
}

function getHighScore () {
  if (!localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", 0);
    return 0;
  } else {
    return localStorage.getItem("highscore");
  }
}

function setNewHighscore(score) {
  localStorage.setItem('highscore', score);
}

function gameReset() {
  document.querySelector(".guessedNumber").value = "";
  document.querySelector(".comment").textContent = "start";
  document.querySelector(".score").textContent = 50;
  randomNumber = Math.trunc(Math.random() * 50) + 1;
  checkButton.disabled = false;
  document.querySelector(".secretNumber").textContent = "???";
  document.querySelector(".comment").style.color = "#fff";
  document.querySelector("header").style.backgroundColor = "#fff";
}

function losingScreen() {
  document.querySelector(".comment").style.color = "red";
  document.querySelector("header").style.backgroundColor = "red";
  document.querySelector(".secretNumber").textContent = randomNumber;
  checkButton.disabled = true;
}

function winningScreen() {
  document.querySelector(".comment").style.color = "green";
  document.querySelector("header").style.backgroundColor = "green";
  document.querySelector(".secretNumber").textContent = randomNumber;
  checkButton.disabled = true;
}
