import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/Auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// serviceID: gmail, templateID: template_id11uyr, publicKey: aBs3fCS1E1dfeDTvT
// template from https://www.emailjs.com/docs/examples/reactjs/
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");

  // adds error messages to the form
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage("Your email is invalid.");
      } else {
        setFormMessage("");
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        );
      } else {
        setFormMessage("");
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // sends the email or surfaces an error on submission
  function sendEmail(e) {
    e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    // serviceID: gmail, templateID: template_id11uyr, publicKey: aBs3fCS1E1dfeDTvT
    emailjs.sendForm(
      "gmail",
      "template_id11uyr",
      "#contactForm",
      "aBs3fCS1E1dfeDTvT"
    );
  }
}
