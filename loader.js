let tl = gsap.timeline({ repeat: -1 });

tl.to(
  ".text-row-container",
  {
    x: "-=100px",
    duration: 1.5,
    stagger: 0.05,
    ease: "power4.inOut",
    transformOrigin: "50% 50%"
  },
  0
);

tl.to(
  ".text-row-container",
  {
    x: "+=200px",
    duration: 1.5,
    stagger: 0.05,
    delay: 1.5,
    ease: "power4.inOut",
    transformOrigin: "50% 50%"
  },
  0
);

tl.to(
  ".text-row-container",
  {
    x: "0",
    duration: 1.5,
    stagger: 0.05,
    delay: 3,
    ease: "power4.inOut",
    transformOrigin: "50% 50%"
  },
  0
);
// gsap.fromTo(
//   ".text-row-container",
//   {
//     scale: 0,
//     filter: "blur(4px)"
//   },
//   {
//     scale: 1,
//     filter: "blur(0px)",
//     duration: 2,
//     delay: 1,
//     ease: CustomEase.create(
//       "custom",
//       "M0,0 C0.11,0.494 0.066,0.566 0.168,0.696 0.283,0.842 0.504,1 1,1 "
//     ),
//     transformOrigin: "50% 50%"
//   },
//   0
// );
// gsap.fromTo(
//   ".loader_text_left, .loader_text_right",
//   {
//     width: "10%"
//   },
//   {
//     width: "20%",
//     stagger: 0.1,
//     duration: 2,
//     delay: 1.8,
//     ease: "power4.inOut"
//   },
//   0
// );
// gsap.fromTo(
//   ".loader_text_left",
//   {
//     rotationY: 0
//   },
//   {
//     rotationY: 360,
//     stagger: 0.1,
//     duration: 2,
//     delay: 2,
//     ease: "power4.inOut"
//   },
//   0
// );
// gsap.fromTo(
//   ".loader_text_right",
//   {
//     rotationY: 360
//   },
//   {
//     rotationY: 0,
//     stagger: 0.1,
//     duration: 2,
//     delay: 2.5,
//     ease: "power4.inOut"
//   },
//   0
// );
