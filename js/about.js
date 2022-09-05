const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped2');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped3');
});