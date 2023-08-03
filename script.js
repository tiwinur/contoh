// Toggle class acive
const navbarNav = document.querySelector(".navbar-nav");
// ketika agent travel di klik
document.querySelector("#agent-travel").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const agent = document.querySelector("#agent-travel");

document.addEventListener("click", function (e) {
  if (!agent.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
