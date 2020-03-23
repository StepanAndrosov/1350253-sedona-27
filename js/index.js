const link = document.querySelector(".search-button");

const popup = document.querySelector(".appointment-form");

 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("hidden");
  });
