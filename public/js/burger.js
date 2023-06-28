let burgermenu = document.querySelector(".burgermenu");
let burgermenuClose = document.querySelector(".burgerMenuCloseIcon");
let burgermenuOpen = document.querySelector(".burgerMenuOpenIcon");
burgermenuOpen.addEventListener("click", () => displayMenu());
burgermenuClose.addEventListener("click", () => closeMenu());

function displayMenu() {
  burgermenu.style.display = "block";
}

function closeMenu() {
  burgermenu.style.display = "none";
}
