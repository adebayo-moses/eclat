import "./style.css";
import gsap from "gsap";

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
          `'${Math.floor(100 * tl.progress())}%'`
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
