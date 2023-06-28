let burgermenu = document.querySelector(".burgermenu");
let burgermenuClose = document.querySelector(".burgerMenuCloseIcon");
let burgermenuOpen = document.querySelector(".burgerMenuOpenIcon");
burgermenuOpen.addEventListener("click", () => displayMenu());
burgermenuClose.addEventListener("click", () => closeMenu());

function displayMenu() {
  burgermenu.style.display = "block";
  setTimeout(() => {
    burgermenu.style.opacity = "1";
    burgermenu.style.transform = "translateX(0)";
  }, 10);
}

function closeMenu() {
  burgermenu.style.opacity = "0";
  burgermenu.style.transform = "translateX(100%)";
  setTimeout(() => {
    burgermenu.style.display = "none";
  }, 300);
}
