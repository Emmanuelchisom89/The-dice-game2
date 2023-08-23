let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
let outcome1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "images/" + outcome1;

let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
let outcome2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + outcome2;

document.querySelectorAll("button")[0].addEventListener("click", btnClick);

document.querySelectorAll("button")[1].addEventListener("click", function () {
  /*     image1 = document.querySelectorAll("img")[0];
  image2 = document.querySelectorAll("img")[1];

  image1.removeAttribute("src", randomImageSource1);
    image2.removeAttribute("src", randomImageSource2);

  document.querySelector("h1").innerHTML = "play game";

 */

  setTimeout(() => {
    document.location.reload();
  }, 50);
});

function btnClick() {
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins!🏁";
  } else {
    document.querySelector("h1").innerHTML = "Draw🎌!";
  }
}
