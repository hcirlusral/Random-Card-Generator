/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomCard() {
  const number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["♥", "♦", "♠", "♣"];

  let numberIndex = Math.floor(Math.random() * number.length);
  let numberValue = number[numberIndex];

  let center = document.querySelector("#number");

  center.innerText = numberValue;

  let suitsIndex = Math.floor(Math.random() * suits.length);
  let suitsValue = suits[suitsIndex];

  let top = document.querySelector("#top");
  let bottom = document.querySelector("#bottom");

  top.innerText = suitsValue;
  bottom.innerText = suitsValue;

  if (suitsValue === "♥" || suitsValue === "♦") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
}

window.onload = function() {
  randomCard();
  setInterval(randomCard, 3000);
};
