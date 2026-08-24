// Mobile navigation
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Contact form feedback
document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
  event.currentTarget.reset();
});
