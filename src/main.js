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
