import React from "react";
import Button from "./Button.jsx";
import AnimatedTitle from "./AnimatedTitle.jsx";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 hidden -left-20 h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2  md:left-auto md:right-10 lg:w-80 lg:top-20">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="md:scale-125 absolute"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="swordman-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center ">
          <p className="font-general text-[10px]">Join Zentry</p>
          <AnimatedTitle
            containerClass="special-font mt-10 w-full font-zentry-regular  text-5xl leading-[.9] md:text-[6rem]"
            title="Let's b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether"
          />
          <Button title="contact us" containerClass="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
