let burgermenu = document.querySelector(".burgermenu");
let burgermenuClose = document.querySelector(".burgerMenuCloseIcon");
let burgermenuOpen = document.querySelector(".burgerMenuOpenIcon");
burgermenuOpen.addEventListener("click", () => displayMenu());
burgermenuClose.addEventListener("click", () => closeMenu());

function displayMenu() {
  burgermenu.style.display = "block";
  document.body.classList.add("backgroundburger");
  document.body.style.overflow = "hidden";
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
    document.body.classList.remove("backgroundburger");
    document.body.style.overflow = "auto";
  }, 300);
}

document.body.addEventListener("touchstart", handleTouchStart, false);
document.body.addEventListener("touchmove", handleTouchMove, false);
document.body.addEventListener("touchend", handleTouchEnd, false);

let startX = 0;
let dist = 0;

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  dist = 0;
}

function handleTouchMove(event) {
  if (startX) {
    const currentX = event.touches[0].clientX;
    dist = currentX - startX;
    burgermenu.style.transform = `translateX(${dist}px)`;
  }
}

function handleTouchEnd() {
  if (startX && dist < -50) {
    closeMenu();
  }
  startX = 0;
  dist = 0;
}
