// GSAP site
let tl = gsap.timeline();

tl.from("nav .logo, nav li, nav button", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  delay: 1,
  stagger: 0.1,
});

tl.from(".part1 h1", {
  x: -200,
  opacity: 0,
});

tl.from(
  ".part1 p",
  {
    x: -200,
    opacity: 0,
  },
  "-=.3"
);

tl.from(
  ".part1 button",
  {
    opacity: 0,
  },
  "-=.2"
);

tl.from(
  ".part2 img",
  {
    x: 100,
    opacity: 0,
  },
  "-=.7"
);

tl.from(".bg", {
  opacity: 0,
});

tl.from(".hero-bottom h2", {
  //   x: -50,
  y: 50,
  opacity: 0,
  stagger: 0.2,
});

// section 2

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
  },
});

tl2.from("#box1, #box2, #box3, #box4", {
  opacity: 0,
  duration: 0.5,
  transform: "scale(0.7)",
  y: 100,
  stagger: 0.4,
});

// hamburger logic
let tl3 = gsap.timeline();

tl3.to(
  ".bar1",
  {
    transform: "rotate(-35deg)",
  },
  "anku"
);

tl3.to(
  ".bar2",
  {
    x: 100,
  },
  "anku"
);

tl3.to(
  ".bar3",
  {
    transform: "rotate(35deg)",
  },
  "anku"
);

tl3.pause();

const menu = document.querySelector(".hamburger");
let menuOpen = false;

const section = document.querySelectorAll("section");
let clicked = false;
section[0].addEventListener("click", () => {
  clicked = true;
  toggleMenu();
});

section[1].addEventListener("click", () => {
  clicked = true;
  toggleMenu();
});

menu.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  if (!menuOpen) {
    menuOpen = true;
    tl3.play();

    gsap.to("nav ul", {
      right: 0,
    });
  } else if (menuOpen || clicked) {
    tl3.reverse();
    menuOpen = false;

    gsap.to("nav ul", {
      right: -400,
    });
  }
}
