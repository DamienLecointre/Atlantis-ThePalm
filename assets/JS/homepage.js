const translateRight = document.querySelector(".translate-right");
const translateLeft = document.querySelector(".translate-left");
const textContainer = document.querySelector(".zoom-in");
const branchesContainer = document.querySelector(".branches-wrapper");
const statisticContainer = document.querySelector(".statistic-zoom-in");
const slideContainerRight = document.querySelector(".slide-right");
const contactContainer1 = document.querySelector(".contact-zoom-in1");
const contactContainer2 = document.querySelector(".contact-zoom-in2");
const contactContainer3 = document.querySelector(".contact-zoom-in3");
const contactContainer4 = document.querySelector(".contact-zoom-in4");
const copyrightContainer = document.querySelector(".copyright-zoom-in");

// console.log(copyrightContainer);

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
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
  if (window.scrollY > 3000) {
    slideContainerRight.style.transform = "translateX(0)";
  } else {
    slideContainerRight.style.transform = "translateX(-120%)";
  }
  if (window.scrollY > 3500) {
    contactContainer1.style.transform = "scale(1)";
    contactContainer2.style.transform = "scale(1)";
    contactContainer3.style.transform = "scale(1)";
    contactContainer4.style.transform = "scale(1)";
    copyrightContainer.style.transform = "scale(1)";
  } else {
    contactContainer1.style.transform = "scale(0)";
    contactContainer2.style.transform = "scale(0)";
    contactContainer3.style.transform = "scale(0)";
    contactContainer4.style.transform = "scale(0)";
    copyrightContainer.style.transform = "scale(0)";
  }
});
