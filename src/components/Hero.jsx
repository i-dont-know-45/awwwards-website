import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const nextVideoRef = useRef(null);
  const totalVideos = 4;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVidClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current.play();
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        // markers: true,
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getSourceVid = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {isLoading && (
        <div className="absolute w-screen h-dvh flex-center z-[100] overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative h-dvh w-screen z-10 overflow-hidden"
      >
        <div className="absolute-center overflow-hidden cursor-pointer rounded-lg z-50">
          <div
            onClick={handleMiniVidClick}
            className="origin-center transition-all opacity-0 scale-50 hover:scale-100 hover:opacity-100 ease-in duration-500"
          >
            <video
              id="current-video"
              ref={nextVideoRef}
              src={getSourceVid(upcomingVideoIndex)}
              className="size-64 object-cover scale-150 object-center "
              onLoadedData={handleVideoLoad}
              loop
              muted
            ></video>
          </div>
        </div>

        <video
          id="next-video"
          src={getSourceVid(currentIndex)}
          ref={nextVideoRef}
          loop
          muted
          className="absolute-center z-20 invisible size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <video
          src={getSourceVid(currentIndex)}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40 ">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10 ">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 text-blue-100 font-robert-regular max-w-64">
              Enter the Metagame layer <br />
              Unleash the play economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
