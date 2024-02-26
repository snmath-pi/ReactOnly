import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = (props) => {
  return (
    <footer className="bg-slate-800  text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb:4 md:mb-0">
          <span className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Snx03
          </span>
          <p className="text-[16px] my-4 ">
            UI Made and Deployed by Saksham Negi
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Skills
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Competitive Programmer</li>
            <li className="my-2">Web Designer</li>
            <li className="my-2">MERN Stack Developer</li>
            <li className="my-2">ML Enthusiast</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: sakshamnegi40069@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +91 8178833945</p>
        </div>
        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
          {" "}
          Follow me
          <div className="flex space-x-4">
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
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
