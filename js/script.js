// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburg menu diklik
document.querySelector("#hamburg-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar
const hamburg = document.querySelector("#hamburg-menu");

document.addEventListener("click", function (e) {
  if (!hamburg.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
