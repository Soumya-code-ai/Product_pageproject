// === Navbar Color Change on Scroll ===
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// === Scroll Reveal Animation ===
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
revealElements();

// === Watch Tilt Effect ===
document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    img.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg) scale(1.05)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});
