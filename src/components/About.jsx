import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative flex flex-col items-center mt-36 mb-8 gap-5 ">
        <h2 className="font-general uppercase text-sm md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's<br/>l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center "
        />
        <div className="about-subtext ">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p >Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen relative">
        <div className="about-image mask-clip-path ">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
