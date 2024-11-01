import React from "react";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest, SiWebpack, SiGoogleads, SiNetlify } from "react-icons/si";
import { TbSeo, TbApi } from "react-icons/tb";
import { BiSolidTerminal } from "react-icons/bi";

const IKnow = () => {
  return (
    <section className="mt-64 mb-52 flex flex-col justify-between items-center w-full">
      <div className="w-full h-50 sm:h-60 md:h-80 bg-emerald-600 flex flex-col justify-between items-center ">
        <h2 className="text-4xl text-white font-bold mt-24">I Know,</h2>
        <div className="carousel border border-gray-300 overflow-hidden bg-white rounded-md w-[80%] lg:w-[60%] p-4 shadow-lg translate-y-20">
          <div className="carousel-track flex w-fit animate-carousel-scroll ">
            <div className="carousel-slide flex items-center">
              <TbSeo
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/Search_engine_optimization', "_blank")}
              />
              <SiGoogleads
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://ads.google.com/', "_blank")}
              />
              <FaFigma
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://www.figma.com/', "_blank")}
              />
              <BiSolidTerminal
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/Bash_(Unix_shell)', "_blank")}
              />
              <FaGitAlt
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://git-scm.com/', "_blank")}
              />
              <FaGithub
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://github.com/', "_blank")}
              />
              <FaHtml5
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/HTML', "_blank")}
              />
              <FaCss3Alt
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/CSS', "_blank")}
              />
              <FaJs
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/JavaScript', "_blank")}
              />
              <TbApi
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/API', "_blank")}
              />
              <SiWebpack
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://webpack.js.org/', "_blank")}
              />
              <SiJest
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() =>  window.open(`https://jestjs.io/`, "_blank")}
              />
              <FaReact
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://react.dev/', "_blank")}
              />
              <RiTailwindCssFill
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://tailwindcss.com/', "_blank")}
              />
              <SiNetlify
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://www.netlify.com/', "_blank")}
              />
            </div>
            <div className="carousel-slide flex items-center">
              <TbSeo
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/Search_engine_optimization', "_blank")}
              />
              <SiGoogleads
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://ads.google.com/', "_blank")}
              />
              <FaFigma
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://www.figma.com/', "_blank")}
              />
              <BiSolidTerminal
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/Bash_(Unix_shell)', "_blank")}
              />
              <FaGitAlt
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://git-scm.com/', "_blank")}
              />
              <FaGithub
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://github.com/', "_blank")}
              />
              <FaHtml5
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/HTML', "_blank")}
              />
              <FaCss3Alt
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/CSS', "_blank")}
              />
              <FaJs
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/JavaScript', "_blank")}
              />
              <TbApi
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://en.wikipedia.org/wiki/API', "_blank")}
              />
              <SiWebpack
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://webpack.js.org/', "_blank")}
              />
              <SiJest
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() =>  window.open(`https://jestjs.io/`, "_blank")}
              />
              <FaReact
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://react.dev/', "_blank")}
              />
              <RiTailwindCssFill
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://tailwindcss.com/', "_blank")}
              />
              <SiNetlify
                className="carousel-icon rounded-lg hover:bg-gray-300 p-2 cursor-pointer"
                onClick={() => window.open('https://www.netlify.com/', "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IKnow;
