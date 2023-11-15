// <!-- ONLINE COURSE SECTION -->
const filterBtn = document.querySelector("#filter-btn");
const courses = document.querySelectorAll(".course-card");
courses.forEach((course) => {
  if (course.classList.contains("Computer-Science")) {
    course.classList.add("active");
    course.classList.remove("hide");
    course.style.display = "block";
  } else {
    course.classList.add("hide");
    course.classList.remove("active");
    course.style.display = "none";
  }
});
filterBtn.addEventListener("change", (e) => {
  let value = e.target.selectedOptions[0].getAttribute("value");
  courses.forEach((course) => {
    if (course.classList.contains(value)) {
      course.classList.add("active");
      course.classList.remove("hide");
      setTimeout(() => {
        course.style.display = "block";
      }, 1);
    } else {
      course.classList.add("hide");
      course.classList.remove("active");
      setTimeout(() => {
        course.style.display = "none";
      }, 500);
    }
  });
});

// <!-- JOIN OUR EVENT -->
const eventBtn = document.querySelector(".event-play-btn");
eventBtn.addEventListener("click", () => {
  document.querySelector(".event-play-btn").style.display = "none";
  document.querySelector(".event-img-container img").style.display = "none";
  document.querySelector("#event-video").style.display = "block";
});

// CONTACT US FORM BUTTON
const formBtn = document.querySelector(".close-form-btn-container");
document.querySelector("#contact-us-btn").addEventListener("click", () => {
  document
    .querySelector(".contact-us-form-main-container")
    .classList.add("show");
});
formBtn.addEventListener("click", () => {
  document
    .querySelector(".contact-us-form-main-container")
    .classList.remove("show");
});

// !ANIMATIONS

// PRELOADER
window.addEventListener("load", () => {
  mainHeroTl.play();
});

const mainHeroTl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.6 },
});
mainHeroTl
  .from(".main-hero-header,.hero-dis,.hero-btn-container", {
    y: 50,
    opacity: 0,
  })
  .from(".right-hero-section", { opacity: 0 })
  .from(
    ".banner-icon,.banner-element-icon-4,.banner-element-icon-5,.banner-element-icon-6,.shape-5,.small-header-container img",
    { opacity: 0, delay: 0.5 },
    "-=5"
  );

// /* ======COURSE CATOGERY SECTION====== */
const sectionMainHeader1 = document.querySelector(".section-header-1");
sectionMainHeader1.innerHTML = sectionMainHeader1.textContent.replace(
  /\S/g,
  "<span class ='char main-header-char'>$&</span>"
);
const secondSectionTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".section-header-1",
    start: "top 100%",
  },
});
secondSectionTl
  //   .from(".main-header-char", { opacity: 0, stagger: 0.09 })
  .from(
    ".second-section-header-1,.popular-courses-container",
    { opacity: 0, y: 50 },
    "-=1.5"
  );

// <!-- /* ======ABOUT US SECTION====== */ -->
const aboutUsHeader = document.querySelector(".section-header-2");
aboutUsHeader.innerHTML = aboutUsHeader.textContent.replace(
  /\S/g,
  "<span class = 'about-us-char char'>$&</span>"
);
const aboutUsTl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".section-header-2",
    // markers: true,
    start: "top 80%",
  },
});
aboutUsTl
  //   .from(".about-us-char", { opacity: 0, stagger: 0.2 })
  .from(".second-section-header-2,.about-us-dis", { y: 100, opacity: 0 })
  .from(".about-us-list", { delay: 1, x: -100, opacity: 0 }, "-=1.5");

// // <!-- ONLINE COURSE SECTION -->
const sectionHeader3 = document.querySelector(".section-header-3");
sectionHeader3.innerHTML = sectionHeader3.textContent.replace(
  /\S/g,
  "<span class = 'char section-header-3-char'>$&</span>"
);
const courseTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".section-header-3-char",
    // markers: true,
    start: "top 70%",
  },
});
courseTl;
//   .from(".section-header-3-char", { opacity: 0, stagger: 0.08 })
//   .from(
//     ".second-section-header-3,.filter-btn-container,.courses-container",
//     { y: 50, opacity: 0 },
//     "-=1.4"
//   );

const courseCards = document.querySelectorAll(".course-card");
courseCards.forEach((card) => {
  const dis = card.querySelector(".author-second-dis");
  gsap.from(dis, {
    y: 100,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: dis, start: "top 70%" },
  });
});

// <!-- JOIN OUR EVENT -->

const sectionHeader4 = document.querySelector(".section-header-4");
sectionHeader4.innerHTML = sectionHeader4.textContent.replace(
  /\S/g,
  "<span class = 'char section-header-char-4'>$&</span>"
);
const eventCharTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".section-header-char-4",
    start: "top 80%",
    // markers: true
  },
});
eventCharTl
  .from(".section-header-char-4", {
    opacity: 0,
    stagger: 0.2,
  })
  .from(".second-section-header-4", { opacity: 0, y: 100 }, "-=1.5");
const eventImgTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: "#event-video",
    start: "top 70%",
    end: "top 10%",
    // markers: true
  },
});
eventImgTl
  .to(".event-img-container-curtain", { width: 0 })
  .from(".event-play-btn", { opacity: 0 });

const eventCardTl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: ".section-header-4",
    start: "top 70%",
    // markers: true,
    end: "top 10%",
  },
});
eventCardTl.from(".event-card", {
  x: "-50%",
  duration: 0.8,
  opacity: 0,
  stagger: 0.7,
  ease: "power1",
});

// /* ======OUR MISSON SECTION========= */

const missionImgTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: "#mission-img",
    start: "top 60%",
    // markers: true,
    end: "top 10%",
  },
});
missionImgTl
  .to(".left-mission-container-curtain", { width: 0 })
  .from("#mission-img", { scale: 1.2 }, "-=0.5");

const missionContentTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".section-header-5",
    start: "top 70%",
    // markers: true
  },
});
const sectionHeader5 = document.querySelector(".section-header-5");
sectionHeader5.innerHTML = sectionHeader5.textContent.replace(
  /\S/g,
  "<span class = 'char section-char-5'>$&</span>"
);
missionContentTl
  //   .from(".section-char-5", { x: "-50%", opacity: 0, stagger: 0.1 })
  .to(".second-section-header-5", { y: 0, opacity: 1 }, "-=1.2")
  .from(".mission-card", { x: -100, opacity: 0 }, "-=1.5");

// /* <!-- ====BEST COACHES====== --> */
const coachHeaderTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".coach-card",
    start: "top 90%",
    // markers: true,
    end: "top 10%",
  },
});
const sectionHeader6 = document.querySelector(".section-header-6");
sectionHeader6.innerHTML = sectionHeader6.textContent.replace(
  /\S/g,
  "<span class = 'char section-header-char-6'>$&</span>"
);
coachHeaderTl
  .from(".section-header-char-6", { x: "-50%", opacity: 0, stagger: 0.1 })
  .from(".second-section-header-6,.coaches-main-container", {
    opacity: 0,
    y: 50,
  });

// //<!-- ===TESTIMONIAL SECTION=== -->
const sectionHeader7 = document.querySelector(".section-header-7");
sectionHeader7.innerHTML = sectionHeader7.textContent.replace(
  /\S/g,
  "<span class = 'char section-header-7-char'>$&</span>"
);

const header7Tl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".section-header-7-char",
    start: "top 80%",
    end: "top 10%",
    // markers: true
  },
});
header7Tl
  //   .from(".section-header-7-char", { x: "-100%", opacity: 0, stagger: 0.2 })
  .from(".second-section-header-7", { x: -100, opacity: 0 }, "-=2")
  .from(".left-testi-container p", { y: 100, opacity: 0 }, "-=1.5");

// //<!-- OUR BLOG SECTION -->

const sectionHeader8 = document.querySelector(".section-header-8");
sectionHeader8.innerHTML = sectionHeader8.textContent.replace(
  /\S/g,
  "<span class = 'char header-8-char'>$&</span>"
);
const sectionHeader8Tl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: ".header-8-char",
    start: "top 80%",
  },
});
sectionHeader8Tl
  //   .from(".header-8-char", { x: -100, opacity: 0, stagger: 0.1 })
  .from(".second-section-header-8", { y: 100, opacity: 0 }, "-=1")
  .from(".blog-container", { opacity: 0, y: 100 });

// FOOTER SECTION
const contactUsTl = gsap.timeline({
  defaults: { duration: 0.8 },
  scrollTrigger: {
    trigger: "#contact-us",
    start: "top 70%",
    // markers: true
  },
});
contactUsTl
  .from(".contact-us-header,#contact-us-btn", { y: 100, opacity: 0 })
  .from("#cta-img", { y: -100, opacity: 0 });
