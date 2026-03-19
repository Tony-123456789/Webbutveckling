const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const arrow = document.querySelector(".arrow");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  arrow.classList.toggle("rotate");

  const isOpen = menu.classList.contains("active");
  toggleButton.setAttribute("aria-expanded", isOpen);
});

/* close menu when cursor leaves it */
menu.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
});