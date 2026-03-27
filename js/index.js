console.log("Olá, Netflix!");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".profile button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const profile = event.currentTarget.closest(".profile");
      const name = profile.querySelector("figcaption").textContent;
      const image = profile.querySelector("img").src;

      // Store the active profile in localStorage
      localStorage.setItem("activeProfile", JSON.stringify({ name, image }));
    });
  });
});
