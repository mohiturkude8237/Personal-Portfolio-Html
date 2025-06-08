// Mobile Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Contact Form Submission (Dummy)
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out, Mohit will get back to you soon!");
  contactForm.reset();
});

// Optional: Typed.js Animation for Hero Text (if included in HTML)
if (document.querySelector(".animated-text span")) {
  new Typed(".animated-text span", {
    strings: ["Frontend Developer", "React Enthusiast", "UI Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

// Optional: Initialize AOS (Animate On Scroll) if used
AOS.init({
  duration: 1000,
  once: true
});
