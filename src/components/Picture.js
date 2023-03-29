import React from "react";
import avatar from "../assets/img/avatar.png"; // relative path to image

const Picture = () => {
   return (
      <>
         <div className="picture" id="my_picture">
            <img src={avatar} className="me" alt="avatar" />
            <div>
               <p className="name">Álvaro Garzón Delgado</p>
               <p className="tiperwriter">
                  {"<"}Full Stack Developer {"/>"}
               </p>
            </div>
         </div>
         <a
            href="https://drive.google.com/file/d/1-vBG20_aj-J8Y2WAuSDZvZ1iJw88jnER/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
         >
            <button className="cv-button">Download Resume</button>
         </a>
      </>
   );
};
export default Picture;
