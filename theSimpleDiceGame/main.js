document.querySelector(".dice").style.display = "none";

document.querySelector("#score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var activePlayer = 0;
var currentScore = 0;
var roundScore = [0, 0];

document.querySelector(".btn-roll").addEventListener("click", function () {
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

document.querySelector(".btn-hold").addEventListener("click", function () {
  roundScore[activePlayer] += currentScore;
  document.querySelector("#score-" + activePlayer).textContent = roundScore[activePlayer];

  if (roundScore[activePlayer] >= 20) {
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector("#score-" + activePlayer).textContent = roundScore[activePlayer] + " WON!";
    document.querySelector(".player-current-box").style.display = 'none';
    document.querySelector(".player2score").style.display = 'none';
    document.querySelector(".btn-hold").style.display = 'none';
    document.querySelector(".btn-roll").style.display = 'none';
  }

  switchPlayer();
});

document.querySelector(".btn-new").addEventListener('click', function() {
  
});

function switchPlayer() {
  currentScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = 0;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  activePlayer = Math.abs(activePlayer - 1);
}

// console.log("Hello World!");

// var john = {
//   bill : [124, 48, 268, 180, 42, 200],
//   tip : [],
//   billPlusTip : [],
//   calculateTip : function() {
//     for (i = 0; i < this.bill.length; i++) {
//       console.log(this.bill[i])
//       switch (this.bill[i]) {
//         case this.bill[i] < 50:
//           tipAmount = .2;
//           break;
//         case this.bill[i] > 50 && this.bill[i] < 200:
//           tipAmount = .15;
//           break;
//         default:
//           tipAmount = .1;
//       }
//       this.tip[i] = this.bill[i] * tipAmount;
//       this.billPlusTip[i] = this.bill[i] + this.tip[i];
//     }
//   }
// };

// john.calculateTip();
// console.log(john.bill, john.tip, john.billPlusTip)
