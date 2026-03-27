import { categories } from "./data.js";
import { createCarousel } from "./components/Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const activeProfile = JSON.parse(localStorage.getItem("activeProfile"));

  if (activeProfile) {
    const kidsLink = document.querySelector(".kids-link");
    const profileIcon = document.querySelector(".profile-icon");

    if (kidsLink) kidsLink.textContent = activeProfile.name;
    if (profileIcon) profileIcon.src = activeProfile.image;
  }

  const container = document.getElementById("main-content");

  if (container) {
    categories.forEach((category) => {
      const carousel = createCarousel(category);
      container.appendChild(carousel);
    });
  }
});
