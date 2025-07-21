// import './style.css'
// import viteLogo from '/vite.svg'

// Event listeners for menu toggle

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".bars");
  const closeBtn = document.querySelector(".close");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  const searchIcon = document.querySelector(".search");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");

  // Menu toggle
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });

  // Search overlay toggle
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchOverlay.classList.remove("hidden");
  });

  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.add("hidden");
  });

  // overlay
  overlay.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });

  // ESC Key to Close Search Overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchOverlay.classList.add("hidden");
    }
  });
});

// product-slider
$(document).ready(function () {
  $(".product-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// center mode
$(document).ready(function () {
  $(".feedback-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

// center mode
$(document).ready(function () {
  $(".partners-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
