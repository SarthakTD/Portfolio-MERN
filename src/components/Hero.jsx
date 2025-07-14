import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sarthak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Developer And React Developer <br className='sm:block hidden' />

          </p>
        </div>
      </div>
    
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base text-white">
            <div>
              <span className="text-pink-500">const</span> <span className="text-white">coder</span> = <span className="text-gray-400">{'{'}</span>
            </div>
            <div className="ml-4 text-white">
              name: <span className="text-amber-300">'{personalData.name}'</span>,
            </div>
            <div className="ml-4 text-white">
              skills: [<span className="text-amber-300">
                {profileSectionSkillsData.map((skill, i) => `'${skill}'${i !== profileSectionSkillsData.length - 1 ? ', ' : ''}`)}
              </span>],
            </div>
            <div className="ml-4 text-white">hardWorker: <span className="text-orange-400">true</span>,</div>
            <div className="ml-4 text-white">quickLearner: <span className="text-orange-400">true</span>,</div>
            <div className="ml-4 text-white">problemSolver: <span className="text-orange-400">true</span>,</div>
            <div className="ml-4 text-green-400">
              hireable: <span className="text-orange-400">function</span>() <span className="text-white">{'{ return (this.hardWorker && this.problemSolver && this.skills.length >= 5); }'}</span>
            </div>
            <div><span className="text-white">{'};'}</span></div>
          </code>
        </div>
      </div>



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
