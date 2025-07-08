import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { AiOutlineDownload } from "react-icons/ai"; // make sure to install react-icons

const DownloadCV = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Know More !</p>
        <h2 className={styles.sectionHeadText}>My CV</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-10 flex justify-center"
      >
        <a
          href="/Sarthak_Resume.pdf"
          download
          className="relative group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-xl"
        >
          <AiOutlineDownload className="text-2xl" />
          Download CV
          <span className="absolute inset-0 rounded-xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-[#915EFF] transition-all duration-300"></span>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(DownloadCV, "downloadcv");
