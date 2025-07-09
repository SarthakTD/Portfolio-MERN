import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'; // Assuming you use HOC
import { styles } from '../styles';
import { certificates } from "../constants";


/*const certificates = [
    {
        title: "Java-(Basic)",
        image: "/HakkerRank.png",
        link: "https://www.hackerrank.com/certificates/iframe/6441d1a0d42f"
    },
    {
        title: "C++ Programming",
        image: "/GreatLearning.png",
        link: "https://www.mygreatlearning.com/certificate/PDMWTLLT"
    },
    {
        title: "Generative AI",
        image: "/simpli.jpg",
        link: "https://lnk.ink/92nhm"
    },
    {
        title: "Programming in Java",
        image: "/Np.png",
        link: "https://drive.google.com/file/d/1uBocuI8k03ZGPrc1k6ZO7ZNdL1Ez9_zw/view?usp=sharing"
    },
    {
        title: "Front End Development",
        image: "/GreatLearning.png",
        link: "https://www.mygreatlearning.com/certificate/XIOYJJMC"
    },
];*/

const CertificateCard = ({ index, title, image, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-tertiary p-5 rounded-2xl w-[260px] sm:w-full flex-shrink-0 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#915EFF] cursor-pointer"

    >
        <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-xl mb-4"
        />
        <h3 className="text-white text-[20px] font-bold text-center mb-4">{title}</h3>

        <div className="flex justify-center">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-[#8e52fd] text-white font-medium px-5 py-2 rounded-lg transition-all duration-300"
            >
                View Online
            </a>
        </div>
        <motion.div
        ></motion.div>
    </motion.div>
);



const Certificate = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="text-center">
                <p className={styles.sectionSubText}>My Achievements</p>
                <h2 className={styles.sectionHeadText}>Certificates</h2>
            </motion.div>

            {/* Mobile: Horizontal Scroll | Desktop: Grid */}
            <div className="mt-10">
                {/* Mobile view: horizontal scroll */}
                <div className="flex sm:hidden overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar px-2">
                    <div className="inline-flex gap-4">
                        {certificates.map((cert, index) => (
                            <CertificateCard key={index} index={index} {...cert} />
                        ))}
                    </div>
                </div>

                {/* Desktop view: grid layout */}
                <div className="hidden sm:grid grid-cols-2 gap-6 justify-items-center px-4">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} index={index} {...cert} />
                    ))}
                </div>
            </div>
        </>
    );
};


export default SectionWrapper(Certificate, "certificate");
