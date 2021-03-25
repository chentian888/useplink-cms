gsap.registerPlugin("ScrollToPlugin");
gsap.registerPlugin("ScrollTrigge");
const sections = document.querySelectorAll(".section");
const header_menu = document.querySelectorAll(".header_menu");
let clickLogoBack = false;
function goToSection(section) {
  const color = section.getAttribute('data-switch-color')
  gsap.to(header_menu, 0.1, { color: color }),
  gsap.to(window, {
    scrollTo: { y: section},
    duration: 1,
  });
}

sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    onEnter: () => goToSection(section),
  });

  ScrollTrigger.create({
    trigger: section,
    start: "bottom bottom",
    onEnterBack: () => !clickLogoBack && goToSection(section),
  });
});
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  clickLogoBack = true;
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: ".home_intro" },
    autoKill: false,
    onComplete: function () {
      clickLogoBack = false;
    },
  });
});
