import React from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer  px-7 py-3 rounded-full ${containerClass} bg-violet-50 text-black`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 transition duration-500 group-hover:translate-y-[-160%] ">
          {title}
        </div>
        <div className="absolute translate-y-[160%] transition duration-500 group-hover:translate-y-0 ">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
