const progress = document.querySelector(".scroll-progress");
const revealItems = document.querySelectorAll(".reveal");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

menuBtn?.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navLinks.style.position = "absolute";
  navLinks.style.top = "72px";
  navLinks.style.left = "0";
  navLinks.style.right = "0";
  navLinks.style.padding = "18px 22px";
  navLinks.style.background = "#101116";
  navLinks.style.borderBottom = "1px solid #292c35";
  navLinks.style.flexDirection = "column";
  navLinks.style.alignItems = "stretch";
});
