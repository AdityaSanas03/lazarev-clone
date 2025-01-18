let main = document.querySelector("main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out",
    duration: 0.8,
  });
});

var p2l = document.querySelectorAll(".p2l");
p2l.forEach(function (info) {
  info.addEventListener("mouseenter", function () {
    // console.log(info.childNodes[3].a);
    // info.childNodes[3].style.opacity = 1;
    gsap.to(info.childNodes[3], {
      opacity: 1,
      scale: 1,
    });
  });

  info.addEventListener("mouseleave", function () {
    // info.childNodes[3].style.opacity = 0;
    // console.log("nothello");
    gsap.to(info.childNodes[3], {
      opacity: 0,
      scale: 0,
    });
  });
  info.addEventListener("mousemove", function (dets) {
    gsap.to(info.childNodes[3], {
      x: dets.x - info.getBoundingClientRect().x - 50,
      y: dets.y - info.getBoundingClientRect().y - 70,
    });
  });
});

const page3C = document.querySelector(".page3-center");
const video = document.querySelector("#page3 video");
page3C.addEventListener("click", function () {
  video.play();
  gsap.to(video, {
    transform: "scale(1)",
    opacity: 1,
    borderRadius: 1,
    ease: "sine.in",
    duration: 1,
  });
});

video.addEventListener("click", function () {
  video.pause();
  gsap.to(video, {
    transform: "scale(0)",
    opacity: 0,
    ease: "power2.out",
    borderRadius: 1,
    duration: 1.1,
  });
});

var section = document.querySelectorAll(".section-r");
section.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].play();
  });

  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].load();
  });
});
