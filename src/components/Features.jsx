import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, height, width } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * -10;
    const tiltY = (relativeX - 0.5) * 10;

    const newTransform = `perspective(600px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) scale3d(0.98,0.98,0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full ">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover"
      />
      <div className="relative z-10 size-full text-blue-50 p-5 flex flex-col justify-between">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-1 max-w-64 opacity-75 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <section className=" pb-52 bg-black ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circularweb-book text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circularweb-book text-blue-50 opacity-50 text-lg">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>
        <BentoTilt className="border-hsla w-full relative h-96 md:h-[65vh] rounded-md overflow-hidden mb-7">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 gap-7 grid-rows-3 ">
          <BentoTilt className="bento-tilt_1 row-span-1 col-span-2 border-hsla md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 border-hsla row-span-1 col-span-2 md:col-span-1 md:ms-0 ms-32">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn,"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 border-hsla col-span-2 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic Al experience to be more fun and productive."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="p-5 bg-violet-300 size-full flex justify-between flex-col">
              <h1 className="special-font bento-title max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
            <BentoCard src="videos/feature-5.mp4" />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
