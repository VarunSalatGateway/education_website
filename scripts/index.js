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

// localStorage.setItem('theme', '')
if (localStorage.getItem("theme") == "black") {
  document.querySelector("body").classList.add("dark");
  document.querySelector(".dark-btn").classList.remove("theme-btn-hide");
  document.querySelector(".light-btn").classList.add("theme-btn-hide");
} else {
  document.querySelector("body").classList.remove("dark");
  document.querySelector(".dark-btn").classList.add("theme-btn-hide");
  document.querySelector(".light-btn").classList.remove("theme-btn-hide");
}

window.addEventListener("load", () => {
  // THEME-CHEKING
  themeBtn = document.querySelector(".theme-btn-container");
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
      document.querySelector("body").classList.remove("dark");
      document.querySelector(".dark-btn").classList.add("theme-btn-hide");
      document.querySelector(".light-btn").classList.remove("theme-btn-hide");
      localStorage.setItem("theme", "white");
    } else {
      document.querySelector(".dark-btn").classList.remove("theme-btn-hide");
      document.querySelector(".light-btn").classList.add("theme-btn-hide");
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "black");
    }
  });
  // THEME BUTTON

  document.querySelector(".preloader-container").style.display = "none";
});
