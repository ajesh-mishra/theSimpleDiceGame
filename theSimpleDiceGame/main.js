var activePlayer, currentScore, roundScore

var player0Panel = document.querySelector(".player-0-panel");
var player1Panel = document.querySelector(".player-1-panel");
var playerCurrentBox = document.querySelector(".player-current-box");
var player2Score = document.querySelector(".player2score");
var btnRoll = document.querySelector(".btn-roll");
var btnNew = document.querySelector(".btn-new")
var btnHold = document.querySelector(".btn-hold");

resetScore();

btnRoll.addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;

  diceImage = document.querySelector(".dice");
  diceImage.style.display = "block";
  diceImage.src = "dice-" + dice + ".png";

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  roundScore[activePlayer] += currentScore;
  document.querySelector("#score-" + activePlayer).textContent = roundScore[activePlayer];

  if (roundScore[activePlayer] >= 20) {
    player0Panel.classList.toggle("active");
    player1Panel.classList.toggle("active");
    document.querySelector("#score-" + activePlayer).textContent = roundScore[activePlayer] + " WON!";
    playerCurrentBox.style.display = 'none';
    player2Score.style.display = 'none';
    btnHold.style.display = 'none';
    btnRoll.style.display = 'none';
  }

  switchPlayer();
});

document.querySelector(".btn-new").addEventListener('click', function() {
  resetScore();

  player0Panel.classList.add("active");
  player1Panel.classList.remove("active");
  playerCurrentBox.style.display = 'block';
  player2Score.style.display = 'block';
  btnHold.style.display = 'block';
  btnRoll.style.display = 'block';
});

function switchPlayer() {
  currentScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = 0;
  document.querySelector(".dice").style.display = "none";
  player0Panel.classList.toggle("active");
  player0Panel.classList.toggle("active");
  activePlayer = Math.abs(activePlayer - 1);
}

function resetScore() {

  activePlayer = 0;
  currentScore = 0;
  roundScore = [0, 0];

  document.querySelector(".dice").style.display = "none";
  document.querySelector("#score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
}
