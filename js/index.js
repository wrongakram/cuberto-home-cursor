import Cursor from "./cursor";
import { gsap } from "gsap";

window.onload = () => {
  gsap.from(document.querySelector("body"), {
    opacity: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });
  const cursor = new Cursor(document.querySelector(".cursor"));
};
