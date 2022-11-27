//1. Change color of car and addToCart button color when a color is selected
// - Selecting Elements

//How to use querySelector
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
//How to use getElementsByClassName
const grayColor = document.getElementsByClassName("gray");
//How to use getElementById
const cartButton = document.getElementById("button");
//How to use GetElementsByTagName
const itemTag = document.getElementsByTagName("h3")[0];
  // - Add Event Listeners
  // -  we start with a Red Color
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./img/red-benz.webp")';
  });
  //another color 
  grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
  });
  //another color goes here
  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
  })


//   We start by creating a function named cart.
//    The cart function hides the cart button and shows the feedback button

  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);


//   We first create a function named feedback. 
//   The feedback function hides the feedback button and shows the cart button

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);