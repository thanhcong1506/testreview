const menuBar = document.querySelector("#menu-bar");
const mobileMenu = document.querySelector("#mobile-menu");
console.log(mobileMenu);

menuBar.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
});

const menuItems = document.querySelectorAll("#mobile-menu li ");
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];
  console.log(menuItems[i]);

  menuItem.onclick = () => {
    mobileMenu.classList.toggle("hidden");
  };
}
