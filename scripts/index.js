gsap.registerPlugin(ScrollTrigger);

//BURGER TRANSFORMATION
const burgerLines = document.querySelectorAll(".burger-line");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  burgerLines.forEach((line) => {
    line.classList.toggle("active-burger");
  });
  document.querySelector(".nav-link-container").classList.toggle("active-nav");
});
const navAllLinks = document.querySelectorAll(".nav-link-container li");
navAllLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerLines.forEach((line) => {
      line.classList.remove("active-burger");
      document
        .querySelector(".nav-link-container")
        .classList.remove("active-nav");
    });
  });
});

// /* <!-- ====SCROLL TOP BUTTON====== --> */

window.addEventListener("scroll", () => {
  document
    .querySelector(".scroll-top-btn")
    .classList.toggle(
      "active",
      window.scrollY > document.querySelector("#hero-section").clientHeight
    );
});

// THEME SELECTION
const lightThemeWave = document.getElementById("light_theme_wave");
if (localStorage.getItem("theme") == "black") {
  document.querySelector("body").classList.add("dark");
  document.querySelector(".dark-btn").classList.remove("theme-btn-hide");
  document.querySelector(".light-btn").classList.add("theme-btn-hide");
  if (lightThemeWave) {
    lightThemeWave.style.display = "none";
  }
} else {
  document.querySelector("body").classList.remove("dark");
  document.querySelector(".dark-btn").classList.add("theme-btn-hide");
  document.querySelector(".light-btn").classList.remove("theme-btn-hide");
  if (lightThemeWave) {
    lightThemeWave.style.display = "block";
  }
}

window.addEventListener("load", () => {
  // THEME-CHEKING
  const themeBtn = document.querySelector(".theme-btn-container");
  themeBtn.addEventListener("click", () => {
    console.log("this is the light theme");
    if (document.body.classList.contains("dark")) {
      document.querySelector("body").classList.remove("dark");
      document.querySelector(".dark-btn").classList.add("theme-btn-hide");
      document.querySelector(".light-btn").classList.remove("theme-btn-hide");
      localStorage.setItem("theme", "white");
      if (lightThemeWave) {
        lightThemeWave.style.display = "block";
      }
    } else {
      document.querySelector(".dark-btn").classList.remove("theme-btn-hide");
      document.querySelector(".light-btn").classList.add("theme-btn-hide");
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "black");
      if (lightThemeWave) {
        console.log("white wave display");
        lightThemeWave.style.display = "none";
      }
    }
  });
  // THEME BUTTON

  document.querySelector(".preloader-container").style.display = "none";
});
