var link = document.querySelector(".search-button");

var popup = document.querySelector(".appointment-form");

 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-window");
  });
