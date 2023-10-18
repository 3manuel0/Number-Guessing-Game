let list = document.getElementById("list");
let myguess = document.getElementById("myguess");
let value = 0;
let numbers = [];
let randomNumber = Math.floor(Math.random() * 10);
let numbersInPlace = 0;
let numbersExist = 0;
let divs = list.getElementsByTagName("div");
myguess.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (ifNumber(myguess.value) && e.keyCode === 13) {
    if (myguess.value.length == 4 && !repeating(myguess.value)) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<span">${
        myguess.value
      }</span><span style="color:#673AB7; margin-left:4rem;">${nGame(
        myguess.value
      )}</span>`;
      newDiv.style.cssText =
        "font-family:Comic Sans MS, Comic Sans, cursive; padding:0.5rem;";
      divs[0].parentNode.insertBefore(newDiv, divs[0]);
      numbersInPlace = 0;
      numbersExist = 0;
    } else {
      let newDiv = document.createElement("div");
      newDiv.innerHTML =
        "Must be a 4 digit number without repeating any number!";
      newDiv.style.cssText =
        "font-family:Comic Sans MS, Comic Sans, cursive; padding:0.5rem; color: #673AB7;";
      divs[0].parentNode.insertBefore(newDiv, divs[0]);
    }
  }
});
const ifNumber = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};
const nGame = (guess) => {
  if (numbers.length == 0) {
    for (i = 0; i < 4; i++) {
      do {
        randomNumber = Math.floor(Math.random() * 10);
      } while (numbers.includes(randomNumber));
      numbers.push(randomNumber);
    }
    number = numbers.join("");
  }
  if (guess == number) {
    return "<br> You guessed the number";
  } else if (guess != number) {
    for (x = 0; x < 4; x++) {
      if (number[x] == guess[x]) {
        numbersInPlace++;
      } else if (numbers.includes(parseInt(guess[x]))) {
        numbersExist++;
      }
    }
  }
  return `${numbersInPlace}P ${numbersExist}N`;
};
const repeating = (number) => {
  let numbers = number.split("");
  while (numbers.length > 0) {
    for (x = 1; x < numbers.length; x++) {
      if (numbers[0] == numbers[x]) return true;
    }
    numbers.shift();
  }
  return false;
};
