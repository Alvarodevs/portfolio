import React, { useEffect, useRef, useState } from "react";

import Nav from "./Nav";
import Picture from "./Picture";
import Info from "./Info";
import Stack from "./Stack";
import Projects from "./Projects";
import oxygenShop from "../assets/img/oxygenshop.png";
import pickture from "../assets/img/pickture.png";
import Miranda from "../assets/img/Miranda.png";
import dashboard from "../assets/img/dashboard.png";
import movies_react from "../assets/img/movies_react.png";
import isEazy from "../assets/img/isEazy.png";
import Form from "./Form";
import Footer from "./Footer";
import {
   SiMysql,
   SiGit,
   SiGithub,
   SiGitlab,
   SiTypescript,
   SiExpress,
   SiPython,
   SiNodedotjs,
   SiMongodb,
   SiGithubactions,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaCss3, FaFigma, FaReact } from "react-icons/fa";

const Portfolio = () => {
   const stackSection = useRef(null);
   const projectsSection = useRef(null);
   const contactSection = useRef(null);
   const hr_stack = useRef(null);
   const hr_projects = useRef(null);
   const hr_contact = useRef(null);
   const actualSection = useRef(0);
   const [actualHr, setActualHr] = useState(hr_stack);
   const [sectionPosition, setSectionPosition] = useState(0);
   const images = [
      [
         oxygenShop,
         "https://alvarodevs.github.io/fullstack-training/",
         "https://github.com/Alvarodevs/fullstack-training",
      ],
      [
         pickture,
         "https://alvarodevs.github.io/pickture_photo_app/",
         "https://github.com/Alvarodevs/pickture_photo_app",
      ],
      [
         Miranda,
         "https://alvarodevs.github.io/hotel_miranda/",
         "https://github.com/Alvarodevs/hotel_miranda",
      ],
      [
         dashboard,
         "https://alvarodevs.github.io/hotel-miranda-react/",
         "https://github.com/Alvarodevs/hotel-miranda-react",
      ],
      [
         isEazy,
         "https://alvarodevs.github.io/isEazy_test/",
         "https://github.com/Alvarodevs/isEazy_test"
      ],
      [movies_react, "", "https://github.com/Alvarodevs/movies_4GigTalent"],
   ];

   const stack = [
      {
         type: "FrontEnd",
         tech: [
            [<AiOutlineHtml5 />, "HTML5"],
            [<FaCss3 />, "CSS3"],
            [<TbBrandJavascript />, "JavaScript"],
            [<FaReact />, "React"],
            [<SiTypescript />, "TypeScript"],
            [<FaFigma />, "Figma"],
         ],
      },
      {
         type: "BackEnd",
         tech: [
            [<AiOutlineConsoleSql />, "SQL"],
            [<SiMysql />, "MySql"],
            [<SiNodedotjs />, "NodeJS"],
            [<SiExpress />, "Express"],
            [<SiMongodb />, "MongoDB"],
            [<SiPython />, "Python"],
         ],
      },
      {
         type: "DevOps",
         tech: [
            [<SiGit />, "Git"],
            [<SiGithub />, "GitHub"],
            [<SiGitlab />, "GitLab"],
            [<SiGithubactions />, "GHPages"],
         ],
      },
   ];

   useEffect(() => {
      window.addEventListener("scroll", checkSectionPosition);
      if (actualSection.current === 0 && stackSection.current != null) {
         actualSection.current = stackSection.current;
      }

      return () => {
         window.removeEventListener("scroll", checkSectionPosition);
      };
   }, []);

   useEffect(() => {
      if (sectionPosition !== 0) {
         if (sectionPosition.top.toFixed() < 600) {
            actualHr.current.style.display = "block";
            if (actualSection.current.id === "my_stack") {
               actualSection.current = projectsSection.current;
               setActualHr(hr_projects);
            } else if (actualSection.current.id === "my_projects") {
               actualSection.current = contactSection.current;
               setActualHr(hr_contact);
               //window.removeEventListener('scroll', checkSectionPosition);
            }
         }
      }
   }, [sectionPosition]);

   const checkSectionPosition = () => {
      setSectionPosition(actualSection.current.getBoundingClientRect());
      //si no pongo aqui el removeevent no se elimina no se por que
      if (hr_contact.current.style.display === "block")
         window.removeEventListener("scroll", checkSectionPosition);
   };
   return (
      <>
         <Nav />
         <main>
            <Picture />
            <hr
               id="hr_info"
               className="hr-text tiperwriter"
               data-content="About me"
            ></hr>
            <Info />
            <hr
               id="hr_stack"
               ref={hr_stack}
               className="hr-text tiperwriter"
               data-content="What I bring"
            ></hr>
            <section id="my_stack" className="stack" ref={stackSection}>
               <Stack stack={stack} />
            </section>
            <hr
               id="hr_projects"
               ref={hr_projects}
               className="hr-text tiperwriter"
               data-content="Check this out!"
            ></hr>
            <Projects images={images} reference={projectsSection} />
            <hr
               id="hr_contact"
               ref={hr_contact}
               className="hr-text tiperwriter"
               data-content="Wanna talk?"
            ></hr>
            <Form reference={contactSection} />
         </main>
         <Footer />
      </>
   );
};
export default Portfolio;
