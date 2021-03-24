const sections = document.querySelectorAll(".section");
gsap.registerPlugin("ScrollTrigge");
function goToSection(section, anim) {
  gsap.to(window, {
    scrollTo: { y: section, autoKill: false },
    duration: 1,
  });

  if (anim) {
    anim.restart();
  }
}

sections.forEach((section) => {
  // const intoAnim = gsap.timeline({paused: true})
  //   .from(section.querySelector(".right-col"), {yPercent: 50, duration: 1})

  ScrollTrigger.create({
    trigger: section,
    onEnter: () => goToSection(section),
  });

  ScrollTrigger.create({
    trigger: section,
    start: "bottom bottom",
    onEnterBack: () => goToSection(section),
  });
});
