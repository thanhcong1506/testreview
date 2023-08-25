const menuBar = document.querySelector("#menu-bar");
const mobileMenu = document.querySelector("#mobile-menu");

menuBar.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
});
