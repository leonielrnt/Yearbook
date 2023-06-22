const slider = document.querySelector(".slider");
console.log("hello");
const leftarrow = document.querySelector(".left");
const rightarrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex - 25 + "%)";
  });
});

leftarrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  //slider.style.transform = `translate(${shift}%)`;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
rightarrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
