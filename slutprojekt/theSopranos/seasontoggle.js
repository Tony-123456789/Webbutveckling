const seasonToggle = document.querySelector(".season-toggle");
const seasonMenu = document.querySelector(".season-menu");

seasonToggle.addEventListener("click", () => {
    seasonMenu.classList.toggle("active");
});