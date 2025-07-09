import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  carrent,
  Floood,
  Student,
  threejs,
  HakkerRank,
  GreatLearning,
  Np,
  simpli,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
   {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Database Management",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Sumago Infotech | Intern",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 {
    title: "IEI Co-ordinator",
    company_name: "SPPU | PUNE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - June 2025",
    points: [
      "Through IEI, I had the opportunity to connect with industry experts, engineers, and faculty members, which gave me valuable real-world engineering insights beyond classroom learning",
      "I contributed to organizing and participating in various IEI technical events, which helped me develop leadership, coordination, and team collaboration skills..",
      "By attending workshops and webinars organized by IEI, I was able to enhance my skills in current technologies, tools, and engineering practices relevant to my field."
    ],
  },
];

  /*
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
*/


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blockchain-Driven Multi-Level Healthcare Protection ",
    description:
      "Utilized blockchain to ensure tamper-proof storage and sharing of patient health records across multiple level",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://healthcaresystem-gamma.vercel.app/",
  },
  {
    name: "Student Management System Using Mern Stack",
    description:
      " Designed and built a comprehensive Student Management System.Implemented MongoDB for local storage of tasks",
      
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Student,
    source_code_link: "https://github.com/SarthakTD/MERN-School-Management-System-main",
  },
  {
    name: "flood inundation based on forecast flood levels in rivers",
    description:
      "Integrated real-time data analysis and visualization tools to improve flood risk assessment and management.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
    ],
    image: Floood,
    source_code_link: "https://github.com/",
    source_code_link: "",
  },
];
const certificates = [
  {
    title: "Java-(Basic)",
    image: "/HakkerRank.png",
    link: "https://www.hackerrank.com/certificates/iframe/6441d1a0d42f",
  },
  {
    title: "C++ Programming",
    image: "/GreatLearning.png",
    link: "https://www.mygreatlearning.com/certificate/PDMWTLLT",
  },
  {
    title: "Generative AI",
    image: "/simpli.jpg",
    link: "https://lnk.ink/92nhm",
  },
  {
    title: "Programming in Java",
    image: "/Np.png",
    link: "https://drive.google.com/file/d/1uBocuI8k03ZGPrc1k6ZO7ZNdL1Ez9_zw/view?usp=sharing",
  },
  {
    title: "Front End Development",
    image: "/GreatLearning.png",
    link: "https://www.mygreatlearning.com/certificate/XIOYJJMC",
  },
];


export { services, technologies, experiences, testimonials, projects,certificates };
