const menu = document.querySelector(".menu-container");
const menuIcon = document.querySelector(".icon-menu");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".menu-container");

menuIcon.addEventListener("click", () => {
  menu.style.display = "inline";
});

overlay.addEventListener("click", () => {
  menu.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  menu.style.display = "none";
});
