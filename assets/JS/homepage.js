const translateRight = document.querySelector(".translate-right");
const translateLeft = document.querySelector(".translate-left");
const burgerMenu = document.querySelector(".burger-menu");
const lineTop = document.querySelector(".line-top");
const lineMiddle = document.querySelector(".line-middle");
const lineBottom = document.querySelector(".line-bottom");
const burgerMenuNav = document.querySelector(".burger-menu-nav");
const textContainer = document.querySelector(".zoom-in");
const branchesContainer = document.querySelector(".branches-wrapper");
const statisticContainer = document.querySelector(".statistic-zoom-in");
const slideContainerRight = document.querySelector(".slide-right");
const contactContainer1 = document.querySelector(".contact-zoom-in1");
const contactContainer2 = document.querySelector(".contact-zoom-in2");
const contactContainer3 = document.querySelector(".contact-zoom-in3");
const contactContainer4 = document.querySelector(".contact-zoom-in4");
const copyrightContainer = document.querySelector(".copyright-zoom-in");

console.log(lineBottom);

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 400) {
    translateRight.style.transform = "translateX(0)";
    translateLeft.style.transform = "translateX(0)";
  } else {
    translateRight.style.transform = "translateX(-150%)";
    translateLeft.style.transform = "translateX(150%)";
  }
  if (window.scrollY > 800) {
    textContainer.style.transform = "scale(1)";
  } else {
    textContainer.style.transform = "scale(0)";
  }
  if (window.scrollY > 1100) {
    branchesContainer.style.transform = "scale(1)";
  } else {
    branchesContainer.style.transform = "scale(0)";
  }
  if (window.scrollY > 2200) {
    statisticContainer.style.transform = "scale(1)";
  } else {
    statisticContainer.style.transform = "scale(0)";
  }
  if (window.scrollY > 2700) {
    slideContainerRight.style.transform = "translateX(0)";
  } else {
    slideContainerRight.style.transform = "translateX(-120%)";
  }
  if (window.scrollY > 3100) {
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

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  lineTop.classList.toggle("active");
  lineMiddle.classList.toggle("active");
  lineBottom.classList.toggle("active");
  burgerMenuNav.classList.toggle("show");
});
