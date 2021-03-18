gsap.defaults({ ease: "power3.inOut" });

var master = gsap.timeline({ delay: 0.5, repeat: -1, repeatDelay: 0.5 });
var mt = 0.85;
var es = "power2.out";

gsap.set("#demo", { autoAlpha: 1 });
gsap.set(".bottomFighter", {
  rotation: 180,
  y: 758,
  transformOrigin: "center center",
});
gsap.set("#stage, #luke, #darth, #chewie, #r2d2", { autoAlpha: 0 });

function flyBy() {
  var tl = gsap.timeline({ defaults: { duration: 2 } });
  tl.add("fighter");
  tl.from(
    ".bottomFighter, .topFighter",
    { duration: 0.1, autoAlpha: 0 },
    "fighter"
  );
  tl.fromTo(".topFighter", { x: -1000 }, { x: 2500, ease: "none" }, "fighter");
  tl.fromTo(
    ".bottomFighter",
    { x: 2500 },
    { x: -1000, ease: "none" },
    "fighter"
  );
  tl.to(".topLine", { attr: { x2: 2500 }, ease: "none" }, "fighter");
  tl.to(".bottomLine", { attr: { x1: -1000 }, ease: "none" }, "fighter");
  tl.to(
    ".bottomFighter, .topFighter",
    { duration: 0.1, autoAlpha: 0 },
    "-=0.1"
  );
  tl.to(".topCut", { y: 418, ease: es }, "vanish");
  tl.to(".bottomCut", { y: -341, ease: es }, "vanish");
  tl.to(".smallLine", { duration: 1, attr: { x1: 749, x2: 751 }, ease: es });
  return tl;
}

function bladeCut() {
  var tl = gsap.timeline();
  tl.from("#saber path, #saber rect, #saber circle", {
    duration: 0.6,
    scale: 0,
    transformOrigin: "center center",
    ease: "elastic(1, 0.5)",
    stagger: 0.05,
  });
  tl.from("#bladeMaskRect", { duration: 0.8, y: 512 });
  tl.to("#saber", { duration: 2, rotation: 360, svgOrigin: "750 500" }, "spin");
  tl.from("#stageOutline", { duration: 2, drawSVG: 0 }, "spin");
  tl.to("#bladeMaskRect", { y: 512, ease: es });
  tl.to("#saber", { duration: 0.25, autoAlpha: 0, ease: "none" });
  return tl;
}

function leiaStage() {
  var tl = gsap.timeline();
  tl.to("#stage", { autoAlpha: 1 });
  tl.from("#leia path", {
    duration: 1.1,
    scale: 0,
    transformOrigin: "center center",
    ease: "elastic(1, 0.5)",
    stagger: 0.15,
  });
  tl.to(".leiaEye", {
    duration: 0.15,
    scaleY: 0,
    repeat: 3,
    yoyo: true,
    transformOrigin: "center center",
  });
  return tl;
}

function leiaToLuke() {
  var tl = gsap.timeline({ defaults: { duration: mt } });
  tl.to("#leiaHead", { morphSVG: "#lukeHead" }, 0);
  tl.to("#leftBun", { morphSVG: "#leftSideHair", fill: "#be9664" }, 0);
  tl.to("#rightBun", { morphSVG: "#rightSideHair", fill: "#be9664" }, 0);
  tl.to("#leiaHair", { morphSVG: "#lukeTopHair", fill: "#be9664" }, 0);
  tl.to("#leiaNose", { morphSVG: "#lukeNose", fill: "#ba8d79" }, 0);
  tl.to("#leiaLeftEye", { morphSVG: "#lukeLeftEye", fill: "#2980b9" }, 0);
  tl.to("#leiaRightEye", { morphSVG: "#lukeRightEye", fill: "#2980b9" }, 0);
  tl.set("#luke", { autoAlpha: 1 });
  tl.set("#leia", { autoAlpha: 0 });
  tl.from("#dimple", { duration: 0.25, autoAlpha: 0, ease: es });
  tl.to(".lukeEyes", { duration: 0.25, x: -30 });
  tl.to(".lukeEyes", { duration: 0.45, x: 30 }, "+=0.25");
  tl.to(".lukeEyes", { duration: 0.25, x: 0 }, "+=0.25");
  return tl;
}

function lukeToDarth() {
  var tl = gsap.timeline({ defaults: { duration: mt } });
  tl.to("#lukeHead", { morphSVG: "#darthHead", fill: "#323232" }, 0);
  tl.to("#leftSideHair", { morphSVG: "#leftTriangle", fill: "#505050" }, 0);
  tl.to("#rightSideHair", { morphSVG: "#rightTriangle", fill: "#505050" }, 0);
  tl.to("#lukeTopHair", { morphSVG: "#darthHelmet", fill: "#000" }, 0);
  tl.to("#lukeLeftEye", { morphSVG: "#darthLeftEye", fill: "#000" }, 0);
  tl.to("#lukeRightEye", { morphSVG: "#darthRightEye", fill: "#000" }, 0);
  tl.to("#lukeNose", { morphSVG: "#rightTriangle", fill: "#505050" }, 0);
  tl.to("#dimple", { morphSVG: "#leftTriangle", fill: "#505050" }, 0);
  tl.set("#darth", { autoAlpha: 1 });
  tl.set("#luke", { autoAlpha: 0 });
  tl.from("#maskBase", {
    scale: 0,
    transformOrigin: "center center",
    ease: es,
  });
  tl.from(
    "#maskVerticals",
    { duration: 0.35, scaleY: 0, transformOrigin: "center bottom", ease: es },
    "-=0.1"
  );
  tl.from("#helmetHighlight, #highlights", {
    duration: 0.35,
    autoAlpha: 0,
    ease: "none",
  });
  return tl;
}

function darthToChewie() {
  var tl = gsap.timeline({ defaults: { duration: mt } });
  tl.to("#darthHead", { morphSVG: "#chewieHead", fill: "#503c1d" }, 0);
  tl.to("#darthHelmet", { morphSVG: "#chewieFace", fill: "#a57d52" }, 0);
  tl.to("#leftTriangle", { morphSVG: "#nose", fill: "#323232" }, 0);
  tl.to(
    "#rightTriangle",
    { morphSVG: "#noseShadow", fill: "#503c1d", opacity: 0.35 },
    0
  );
  tl.to("#darthLeftEye", { morphSVG: "#chewieLeftEye", fill: "#503c1d" }, 0);
  tl.to("#darthRightEye", { morphSVG: "#chewieRightEye", fill: "#503c1d" }, 0);
  tl.to("#maskBase", { morphSVG: "#chewieMouth", fill: "#323232" }, 0);
  tl.to(
    "#maskVerticals, #helmetHighlight, #highlights",
    0.25,
    { autoAlpha: 0 },
    0.25
  );
  tl.to("#chewie", 0.75, { autoAlpha: 1, ease: "none" });
  tl.from(
    ".botTeeth",
    0.35,
    { scaleY: 0, transformOrigin: "center bottom" },
    "teeth"
  );
  tl.from(
    ".upperTeeth",
    0.35,
    { scaleY: 0, transformOrigin: "center top" },
    "teeth"
  );
  tl.set("#darth", { autoAlpha: 0 });
  return tl;
}

function chewieToR2() {
  var tl = gsap.timeline({ defaults: { duration: mt } });
  tl.to(
    ".botTeeth",
    { duration: 0.35, scaleY: 0, transformOrigin: "center bottom" },
    0
  );
  tl.to(
    ".upperTeeth",
    { duration: 0.35, scaleY: 0, transformOrigin: "center top" },
    0
  );
  tl.to(
    "#chewieEyes",
    { duration: 0.25, autoAlpha: 0, ease: Linear.easeNone },
    0
  );
  tl.to("#chewieFace", { morphSVG: "#r2Head", fill: "#bebebe" }, 0);
  tl.to("#chewieHead", { morphSVG: "#r2Head", fill: "#bebebe" }, 0);
  tl.to("#nose", { morphSVG: "#eyeBase", fill: "#2980b9" }, 0);
  tl.to("#noseShadow", { morphSVG: "#r2Eye", fill: "#323232", opacity: 1 }, 0);
  tl.to("#chewieLeftEye", { morphSVG: "#topLeftBlue", fill: "#2980b9" }, 0);
  tl.to("#chewieRightEye", { morphSVG: "#topRightBlue", fill: "#2980b9" }, 0);
  tl.to("#chewieMouth", { morphSVG: "#bottomStripe", fill: "#2980b9" }, 0);
  tl.to("#r2d2", { duration: 0.75, autoAlpha: 1, ease: Linear.easeNone });
  tl.set("#chewie", { autoAlpha: 0 });
  tl.from("#decals path", {
    duration: 0.9,
    scale: 0,
    transformOrigin: "center center",
    ease: "elastic(1, 0.5)",
    stagger: 0.1,
  });
  tl.to("#r2EyeHighlight", {
    duration: 0.4,
    x: 20,
    y: 20,
    repeat: 1,
    repeatDelay: 0.8,
    yoyo: true,
    ease: "pwer2.inOut",
  });
  return tl;
}

function ending() {
  var tl = gsap.timeline();
  tl.to("#r2d2", { autoAlpha: 0 });
  tl.to(
    "#stage, #stageOutline",
    { duration: 1, attr: { r: 0 }, ease: "power3.in" },
    0
  );
  return tl;
}

master.from("#name", 2, { autoAlpha: 0, ease: "none" });
master.add(flyBy());
master.add(bladeCut());
master.add(leiaStage());
master.add(leiaToLuke(), "+=0.5");
master.add(lukeToDarth(), "+=0.5");
master.add(darthToChewie(), "+=1");
master.add(chewieToR2(), "+=1");
master.add(ending(), "+=1");

GSDevTools.create({ paused: true, id: "SVG Wars" });
