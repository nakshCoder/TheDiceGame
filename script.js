"use strict";

document.querySelector("h1").addEventListener("click", function () {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Winsπ";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins π";
  } else {
    document.querySelector("h1").textContent = "Match Draw β";
  }
});
