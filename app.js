const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");
const btn = document.querySelector(".btn");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    headline,
    0.8,
    { y: "100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=0.8"
  )
  .fromTo(
    headline,
    0.8,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=0.8"
  )
  .fromTo(
    btn,
    0.8,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=0.8"
  );
