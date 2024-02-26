import React, { useEffect } from "react";

import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import img from "../assets/cutekawia.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
const Banner = (props) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, [1000]);
  return (
    <div
      data-aos="fade-up"
      className=" lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome to my <span className="text-fuchsia-500">Website!</span>
        </h1>
        <p data-aos="fade-left">
          {" "}
          This portfolio provides an extensive description of all my academic
          and co-curricular Accomplishments! Click the links below to visit my
          profiles! Scroll to know more!
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/snmath-pi"
                target="_blank"
                className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/saksham-negi-2a019622a/"
                target="_blank"
                className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <GrLinkedin className="text-[28px]" />
              </a>
              <a
                href="https://twitter.com/Sn_03_cp"
                target="_blank"
                className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaSquareXTwitter className="text-[28px]" />
              </a>
              <a
                href="https://leetcode.com/math_pi/"
                target="_blank"
                className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <SiLeetcode className="text-[28px]" />
              </a>
              <a
                href="https://codeforces.com/profile/mitsi_nohara"
                target="_blank"
                className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <SiCodeforces className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
      />
    </div>
  );
};

export default Banner;
