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

export const ContactUs = () => {};
