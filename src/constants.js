// Skills Section Logo's

import college_logo from "./assets/education/college_image.avif";
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Project Section Logo's
import tendoraLogo from "./assets/work_logo/Tendora_image.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Tendora",
    description:
      "Tendora is a full-stack e-commerce web application focused on electronics. It provides modern shopping features such as product listings, category and price filtering, a dynamic shopping cart, checkout with delivery information, and authentication. The platform ensures a seamless and responsive shopping experience, making it suitable for small to medium electronics retailers.",
    image: tendoraLogo,
    tags: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Clerk Auth",
      "Axios",
      "JavaScript",
    ],
    github: "https://github.com/Shah-Ajmal/Tendora",
    webapp: "https://comforting-kheer-ef97ce.netlify.app/",
  },
];

export const education = [
  {
    id: 1,
    img: college_logo, // replace with your BE college logo variable
    school: "Ballari Institute of Technology and Management",
    date: "04/2019 - 06/2023,",
    grade: "7.78 CGPA",
    desc: "I have completed my Bachelor's degree (BE) in Electronics and Communication Engineering (ECE) in 2023. During my time in college, I built a solid foundation in electronics, communication systems, digital circuits, microprocessors, and embedded systems. I also gained knowledge of programming, database management, and web development through coursework and projects. I actively participated in technical workshops, seminars, and group projects, which helped me strengthen my analytical and problem-solving skills. My BE journey was crucial in developing both my technical expertise and collaborative abilities.",
    degree:
      "Bachelor of Engineering - Electronics and Communication Engineering",
  },
];
