import "./style.css";
import gsap from "gsap";
// import Lottie from "lottie-web";

const preloader = document.querySelector(".preloader");

if (preloader) {
  const tl = gsap
    .timeline()
    .to(preloader, {
      "--percentage": "'100%'",
      roundProps: 1,
      duration: 3,
      onUpdate: () => {
        preloader.style.setProperty(
          "--percentage",
          `'🧑🏿‍🍳 cooking: ${Math.floor(100 * tl.progress())}%'`
        );
      },
    })
    .to(preloader, {
      clipPath: "inset(0 0 100% 0)",
      pointerEvents: "none",
      duration: 0.7,
    })
    .from(".page-header h1", {
      opacity: 0,
      y: 100,
    });
}
// lottie animation
const animationContainer = document.getElementById("lottie-container");
const animationOptions = {
  container: animationContainer,
  renderer: "svg", // Change to "canvas" if needed
  loop: true, // Set to false if you don't want loop
  autoplay: true, // Do not autoplay initially
  path: "https://lottie.host/66ed2e04-2187-471b-b584-cd3f6a3f414b/D0JQUf0x3U.json", // Replace with the URL to your Lottie JSON file
};

const animation = lottie.loadAnimation(animationOptions);

// // Initialize GSAP ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // ScrollTrigger to play the animation on scroll
// ScrollTrigger.create({
//   trigger: animationContainer,
//   start: "top center", //
//   end: "bottom center", //
//   animation: animation,
//   scrub: true, // Smooth scrubbing effect
//   markers: true, // Remove this line in production
// });
