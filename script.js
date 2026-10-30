const dropdown = document.querySelector(".dropdown");
const dropButton = document.querySelector(".dropbtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropButton.addEventListener("click", function (event) {
  event.stopPropagation();

  const isOpen = dropdown.classList.toggle("active");

  dropButton.setAttribute("aria-expanded", isOpen);
});

dropdownMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropdown.classList.remove("active");
    dropButton.setAttribute("aria-expanded", "false");
    dropButton.focus();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const mainCard = document.getElementById("mainCard");
  const thumbnails = document.querySelectorAll(".thumbnail");

  const images = ["assets/UTS.png", "assets/ferson.jpg", "assets/SKD.jpg"];

  function selectPhoto(index) {
    const order = [
      images[index],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
    ];

    mainCard.querySelector(".layer-1").src = order[0];
    mainCard.querySelector(".layer-2").src = order[1];
    mainCard.querySelector(".layer-3").src = order[2];

    thumbnails.forEach(function (thumbnail, i) {
      thumbnail.classList.toggle("active", i === index);
    });
  }

  thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("mouseenter", function () {
      mainCard.classList.add("preview-active");
    });

    thumbnail.addEventListener("click", function () {
      selectPhoto(index);
      mainCard.classList.remove("preview-active");
    });
  });

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      selectPhoto(Number(thumbnail.dataset.index));
    });
  });

  mainCard.addEventListener("mouseenter", function () {
    mainCard.closest(".gallery-wrapper").classList.add("show-thumbnails");
  });

  const galleryWrapper = mainCard.closest(".gallery-wrapper");

  galleryWrapper.addEventListener("mouseleave", function () {
    galleryWrapper.classList.remove("show-thumbnails");
  });

  thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      selectPhoto(index);
    });
  });

  selectPhoto(0);
});

