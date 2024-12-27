const translateRight = document.querySelector(".translate-right");
const translateLeft = document.querySelector(".translate-left");
const textContainer = document.querySelector(".zoom-in");
const branchesContainer = document.querySelector(".branches-wrapper");
const statisticContainer = document.querySelector(".statistic-zoom-in");

// console.log(statisticContainer);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    translateRight.style.transform = "translateX(0)";
    translateLeft.style.transform = "translateX(0)";
  } else {
    translateRight.style.transform = "translateX(-150%)";
    translateLeft.style.transform = "translateX(150%)";
  }
  if (window.scrollY > 1000) {
    textContainer.style.transform = "scale(1)";
  } else {
    textContainer.style.transform = "scale(0)";
  }
  if (window.scrollY > 1430) {
    branchesContainer.style.transform = "scale(1)";
  } else {
    branchesContainer.style.transform = "scale(0)";
  }
  if (window.scrollY > 2700) {
    statisticContainer.style.transform = "scale(1)";
  } else {
    statisticContainer.style.transform = "scale(0)";
  }
});
