import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { send, sendForm } from "emailjs-com";
import { createLogicalAnd } from "typescript";

const Form = (props) => {
   const form = useRef(null);
   const name_input = useRef(null);
   const mail_input = useRef(null);
   const submit_input = useRef(null);
   const [toSend, setToSend] = useState({
      from_name: "",
      user_mail: "",
      to_name: "Álvaro",
      message: "",
   });
   const [inputValue, setInputValue] = useState("Send");
   console.log(process.env);
   useEffect(() => {
      if (inputValue === "Sent!") {
         submit_input.current.style.background = "#ffffffea";
         submit_input.current.disabled = true;
      }
   }, [inputValue]);

   const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
   };

   const sendEmail = async (e) => {
      e.preventDefault();
      let response = "";
      try {
         response = await send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_PUBLIC_KEY
         );
      } catch (error) {
         alert(
            "Error! Something went wrong. Please resend your message to: alvaro.develops@gmail.com"
         );
      } finally {
         if (response.status === 200) {
            setToSend({
               from_name: "",
               user_mail: "",
               to_name: "Álvaro",
               message: "",
            });
            setInputValue("Sent!");
         }
      }
   };

   return (
      <section id="contact_me" ref={props.reference}>
         <form method="POST" ref={form} className="form" onSubmit={sendEmail}>
            <div className="form__name">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder={"😄"}
                  onChange={handleChange}
                  value={toSend.from_name}
                  required
               />
            </div>
            <div className="form__mail">
               <label htmlFor="mail">Email</label>
               <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  placeholder={"📧"}
                  onChange={handleChange}
                  value={toSend.user_mail}
                  required
               />
            </div>
            <div className="form__message">
               <label htmlFor="message">Message</label>
               <textarea
                  id="message"
                  name="message"
                  placeholder={"✏️📝"}
                  onChange={handleChange}
                  value={toSend.message}
               ></textarea>
            </div>
            <input
               type="submit"
               value={inputValue}
               className="submit-input"
               ref={submit_input}
            />
         </form>
      </section>
   );
};
export default Form;
