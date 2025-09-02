import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateX(0) rotateY(0)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className={` ${containerClass} animated-title`}>
      {title.split("<br/>").map((line, index) => (
        <div
          key={index}
          className="flex-center gap-2 md:gap-3 flex-wrap max-w-full px-10"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: word }}
              className="animated-word special-font"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
