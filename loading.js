const loadNavbar = function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("navbar-main").innerHTML = data));
};

const loadCarousel = function () {
  fetch("carousel.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("carousel-main").innerHTML = data)
    );
};

const loadCard = function () {
  fetch("card.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("card-main").innerHTML = data));
};

document.addEventListener("DOMContentLoaded", loadNavbar);
document.addEventListener("DOMContentLoaded", loadCarousel);
document.addEventListener("DOMContentLoaded", loadCard);
