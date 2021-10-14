import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_icegeyp', form.current, 'user_IPHivscVP7r9d4t0gn0IZ')
      .then((result) => {
          alert('Message sent successfully');
      }, (error) => {
        alert('Unsent message');
      });
      e.target.reset();
  };

  return (
    <form className="ContactForm"ref={form} onSubmit={sendEmail}>

      <label>Full Name*</label>
      <input type="text" name="user_name" />

      <label>Company Name*</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>tell us how we can help*</label>
      <textarea name="text" />
      <input type="submit" value="Submit"/>
      
    </form> 
  );
};

export default Contact;