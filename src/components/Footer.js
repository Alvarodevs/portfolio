import React from "react";
import { FaCopyright, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
   return (
      <footer className="footer">
         <div>
            <span className="copyright-icon">
               <FaCopyright />
            </span>
            <span>
               <span className="name"> Álvaro Garzón</span>
               {/* <span className="letter-1">Á</span>
          <span className="letter-2">l</span>
          <span className="letter-3">v</span>
          <span className="letter-4">a</span>
          <span className="letter-5">r</span>
          <span className="letter-6">o </span>
          <span className="letter-7">T</span>
          <span className="letter-8">a</span>
          <span className="letter-9">i</span>
          <span className="letter-10">b</span>
          <span className="letter-11">o </span>
          <span className="letter-12">A</span>
          <span className="letter-13">g</span>
          <span className="letter-14">u</span>
          <span className="letter-15">z</span>
          <span className="letter-16">a</span> */}
            </span>
         </div>
         <div className="footer__contact">
            <a
               href="https://www.linkedin.com/in/alvarodevs4you/"
               target="_blank"
               rel="noreferrer"
            >
               <FaLinkedin />
            </a>
            <a href="mailto:alvaro.develops@gmail.com">
               <FaEnvelope />
            </a>
            <a
               href="https://github.com/Alvarodevs"
               target="_blank"
               rel="noreferrer"
            >
               <FaGithub />
            </a>
         </div>
      </footer>
   );
};
export default Footer;
