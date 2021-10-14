import React from 'react';
import emailjs from 'emailjs.com';s

const FormSection = () => {

 const [form, setForm] = React.useState({

  fullname: '',
  companyname: '',
  email: '',
  TellUsHowWeCanHelp: ''
 })

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmailMessage', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    .then((result) => {
        alert('Message sent successfully');
    }, (error) => {
      alert('Unsent message');
    });
    e.target.reset();
};


  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({target}){

    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  return (
    
    <form onSubmit={sendEmail}>
      <label htmlFor="nome">Full name*</label>
      <input
      id="fullname"
        type="text"
        name="fullname"
        value={form.fullname}
       onChange={handleChange}
      />
 
 <label htmlFor="nome">Company Name*</label>
         <input
         id="companyname"
        type="text"
        name="companyname"
        value={form.companyname}
       onChange={handleChange}
      />

<label htmlFor="nome">Email*</label>
          <input
          id="email"
        type="email"
        name="email"
        value={form.email}
       onChange={handleChange}
      />


<label htmlFor="nome">tell us how we can help*</label>
          <input
          id="TellUsHowWeCanHelp"
        type="text"
        name="TellUsHowWeCanHelp"
        value={form.TellUsHowWeCanHelp}
       onChange={handleChange}
      />




   




      <button>Submit</button>
    </form>
  )
}

export default FormSection
