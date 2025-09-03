// Selector helper
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Theme toggle
const themeBtn = $("#themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// Typewriter
const roles = ["Web Developer", "Programmer", "Frontend Enthusiast"];
const typeTarget = $(".type");
let r = 0, i = 0, dir = 1;
function typeLoop() {
  const word = roles[r];
  i += dir;
  typeTarget.textContent = word.slice(0, i);
  if (i === word.length) {
    dir = -1; setTimeout(typeLoop, 1000);
  } else if (i === 0) {
    dir = 1; r = (r + 1) % roles.length; setTimeout(typeLoop, 300);
  } else {
    setTimeout(typeLoop, dir > 0 ? 70 : 40);
  }
}
if (typeTarget) typeLoop();

// Skills animation
const skillEls = $$(".skill");
function animateSkills() {
  skillEls.forEach(skill => {
    const bar = skill.querySelector(".progress span");
    const val = skill.dataset.skill + "%";
    if (bar.style.width !== val) bar.style.width = val;
  });
}
window.addEventListener("scroll", () => {
  const skillsSection = $("#skills");
  if (skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
    animateSkills();
  }
});

// Scroll Up button
const scrollUpBtn = $("#scrollUp");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollUpBtn.classList.add("show");
  else scrollUpBtn.classList.remove("show");
});
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Modal
const contactBox = $("#contactBox");
const modal = $("#contactModal");
const closeModal = $("#closeModal");

contactBox.addEventListener("click", () => { modal.style.display = "flex"; });
closeModal.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

// Contact form
const form = $("#contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Message Sent! I will get back to you soon.");
  modal.style.display = "none";
  form.reset();
});

// Footer year
$("#year").textContent = new Date().getFullYear();
