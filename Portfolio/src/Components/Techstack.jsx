import React from "react";

const Techstack = (props) => {
  return (
    <div
      id="Techstack"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Skills & TechStack
      </h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2
          data-aos="fade-down"
          className="text-[20px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          C++ Python Java
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          DSALGO
        </h2>

        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          HTML5
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          CSS3
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          Javascript
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow"
        >
          MERN Stack
        </h2>
      </div>
    </div>
  );
};

export default Techstack;
