import React, { useState } from "react";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      
    };
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
        
      <div>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" required placeholder="Your Name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required placeholder="Email" />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input type ="text" id="subject" required placeholder="Subject"/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required placeholder="Questions or Concerns?" />
      </div>
   <div style ={{textAlign: 'center'}}>
      <button type="submit">{status}</button>
      <button type="reset">Reset form</button>
      </div>
    </form>
  );
}

export default ContactForm;