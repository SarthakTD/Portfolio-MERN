import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  const name = "Sarthak Dhembare";
  const skills = [
    "Java",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Express.js",
    "Git",
    "REST API",
  ];

  return (
    <section className="relative w-full min-h-screen px-6 py-16 bg-[#050816] text-white flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-center lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Hello, I'm <span className="text-[#915EFF]">{name}</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Engineer",
            2000,
            "React.js Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl text-[#6EE7B7] font-semibold"
        />

        {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/SarthakTD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] hover:scale-125 transition-transform"
          >
            <BsGithub size={28} />
          </a>
          <a
            href="www.linkedin.com/in/sarthak-dhembare-46ba64257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] hover:scale-125 transition-transform"
          >
            <BsLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] hover:scale-125 transition-transform"
          >
            <FaTwitter size={28} />
          </a>
        </div>

       
      </div>

      {/* Coding Card */}
      <Tilt
        glareEnable={false}
        scale={1.02}
        transitionSpeed={450}
        className="lg:w-1/2 w-full max-w-xl"
      >
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-[#1d1836] rounded-[20px] px-6 py-6 min-h-[300px]">
            <code className="font-mono text-xs md:text-sm lg:text-base text-white block">
              <div>
                <span className="text-[#915EFF]">const</span>{" "}
                <span className="text-white">coder</span> ={" "}
                <span className="text-gray-400">{`{`}</span>
              </div>
              <div className="ml-4 text-white">
                name: <span className="text-emerald-300">'{name}'</span>,
              </div>
              <div className="ml-4 text-white">
                skills: [
                <span className="text-emerald-300">
                  {skills.map((skill, i) => (
                    <span key={i}>
                      '{skill}'{i !== skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
                ],
              </div>
              <div className="ml-4 text-white">
                hardWorker: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 text-white">
                quickLearner: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 text-white">
                problemSolver: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 text-green-400">
                hireable: <span className="text-orange-400">function</span>(){" "}
                <span className="text-white">
                  {"{ return (this.hardWorker && this.problemSolver && this.skills.length >= 5); }"}
                </span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Hero;
