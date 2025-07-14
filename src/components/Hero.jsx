import React from "react";

const Hero = () => {
  const name = "Sarthak Dhembare";
  const designation = "Full Stack Developer";
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Express.js",
    "Git",
    "REST API",
  ];

  return (
    <section className="relative w-full min-h-screen px-6 py-16 bg-[#0d1224] text-white flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Intro Section */}
      <div className="flex flex-col items-start justify-center lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Hello, I'm <span className="text-pink-500">{name}</span>
        </h1>
        <p className="text-xl text-[#16f2b3]">
          I'm a Professional {designation}.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/sarthak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-125 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-125 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-125 transition-all"
          >
            Twitter
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 rounded-full text-sm uppercase font-semibold hover:from-pink-500 hover:to-violet-600 transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-sm uppercase font-semibold hover:from-violet-600 hover:to-pink-500 transition"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Coding Card */}
      <div className="lg:w-1/2 w-full max-w-xl from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-md">
        {/* Top bar */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-3">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>

        {/* Code Content */}
        <div className="overflow-x-auto border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-6">
          <code className="font-mono text-xs md:text-sm lg:text-base text-white">
            <div>
              <span className="text-pink-500">const</span>{" "}
              <span className="text-white">coder</span> ={" "}
              <span className="text-gray-400">{`{`}</span>
            </div>
            <div className="ml-4 text-white">
              name: <span className="text-amber-300">'{name}'</span>,
            </div>
            <div className="ml-4 text-white">
              skills: [
              <span className="text-amber-300">
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
    </section>
  );
};

export default Hero;
