"use strict";

let message = document.querySelector(".message");
let s_core = document.querySelector(".score");
let high_score = document.querySelector(".highscore");
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let guess;
document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = "⛔️ No number!";
  } else if (guess === number) {
    message.textContent = "🎉 Correct Number!";
    if (score > highscore) {
      highscore = score;
      high_score.textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347 ";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
  } else {
    if (score > 1) {
      message.textContent = guess > number ? "📈 Too high!" : "📉 Too low!";
      score--;
      s_core.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = 20;
  s_core.textContent = 20;
  message.textContent = "Start guessing...";
    document.querySelector('.guess').value = ' ';
});
