const cards = document.querySelectorAll(".my-card");
cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    card.classList.add("shadow-hover");
  });
  card.addEventListener("mouseout", function () {
    card.classList.remove("shadow-hover");
  });
});
