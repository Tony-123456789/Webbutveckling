const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});