document.getElementById("button").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

let rock = ["1", "4"];
let paper = ["5", "2"];
let scissors = ["3", "4"];
let lizard = ["2", "3"];
let spock = ["1", "5"];

let score = 0;
document.getElementById("score").innerText = score;

let images = document.querySelectorAll("img");

let my_choise;
let computer_choise;

images.forEach((e) => {
  e.addEventListener("click", function () {
    my_choise = e;
    let next = e.parentElement;
    let previous = e.parentElement;

    e.parentElement.style.top = "17%";
    e.parentElement.style.left = "-15%";
    e.parentElement.parentElement.parentElement.style.backgroundImage =
      "url('')";

    while (next) {
      if (next.nextElementSibling != null) {
        next.nextElementSibling.style.top = "17%";
        next.nextElementSibling.style.left = "75%";
        next.nextElementSibling.style.opacity = "0";
      }

      next = next.nextElementSibling;
    }
    while (previous) {
      if (previous.previousElementSibling != null) {
        previous.previousElementSibling.style.top = "17%";
        previous.previousElementSibling.style.left = "75%";
        previous.previousElementSibling.style.opacity = "0";
      }

      previous = previous.previousElementSibling;
    }
    setTimeout((_) => {
      let number = Math.floor(Math.random() * 5) + 1;
      document.getElementById(number).parentElement.style.opacity = "1";
      computer_choise = document.getElementById(number);
    }, 2500);

    setTimeout((_) => {
      let x = my_choise.id;
      let y;
      console.log(x);
      if (x == 1) {
        y = scissors;
      } else if (x == 2) {
        y = spock;
      } else if (x == 3) {
        y = paper;
      } else if (x == 4) {
        y = lizard;
      } else if (x == 5) {
        y = rock;
      }

      console.log(y);
      if (y.includes(computer_choise.id)) {
        document.getElementById("message").innerText = "You Win";
        document.getElementById("again").style.display = "block";
        document.getElementById("score").innerText = ++score;
      } else {
        document.getElementById("message").innerText = "You Lose";
        document.getElementById("again").style.display = "block";
        if (score > 0) document.getElementById("score").innerText = --score;
      }
    }, 3500);
  });
});

let again = document.getElementById("play-more");

again.addEventListener("click", (_) => {
document.getElementById("game").style.backgroundImage = 'url("images/bg-pentagon.svg")'
document.getElementById("again").style.display = "none"

images[0].parentElement.style.opacity = "1"
images[0].parentElement.style.top = "-11%"
images[0].parentElement.style.left = "30%"

images[1].parentElement.style.opacity = "1"
images[1].parentElement.style.top = "17%"
images[1].parentElement.style.left = "-15%"

images[2].parentElement.style.opacity = "1"
images[2].parentElement.style.top = "17%"
images[2].parentElement.style.left = "75%"

images[3].parentElement.style.opacity = "1"
images[3].parentElement.style.top = "71%"
images[3].parentElement.style.left = "0%"

images[4].parentElement.style.opacity = "1"
images[4].parentElement.style.top = "71%"
images[4].parentElement.style.left = "58%"
});
