const translateRight = document.querySelector(".translate-right");
const translateLeft = document.querySelector(".translate-left");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 400) {
    translateRight.style.transform = "translateX(0)";
    translateLeft.style.transform = "translateX(0)";
  } else {
    translateRight.style.transform = "translateX(-150%)";
    translateLeft.style.transform = "translateX(150%)";
  }
});
