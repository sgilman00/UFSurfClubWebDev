import React, { useState } from "react";
const Calendar = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, eventname, location, stardate, enddate, start, end, info } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      eventname: eventname.value,
      location: location.value,
      stardate: stardate.value,
      enddate: enddate.value,
      start: start.value,
      end: end.value,
      info: info.value
    };
    let response = await fetch("/calendar", {
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
        <p>**All fields are required.**</p>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" required placeholder="Your Name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required placeholder="Email" />
      </div>
      <div>
        <label htmlFor="eventname">Event Name:</label>
        <input type ="text" id="eventname" required placeholder="Name of Event"/>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" required placeholder="Location" />
      </div>
      <div>
        <label htmlFor="stardate">Start Date:</label>
        <input type="date" id="stardate" required />
      </div>
      <div>
        <label htmlFor="enddate">End Date:</label>
        <input type="date" id="enddate" required />
      </div>
      <div>
        <label htmlFor="start">Start Time:</label>
        <input type="time" id="start" required/>
      </div>
      <div>
        <label htmlFor="end">End Time:</label>
        <input type="time" id="end" required/>
      </div>
      <div>
        <label htmlFor="info">Information:</label>
        <textarea id="info" placeholder="Provide any additional details here."/>
      </div>
      <button type="submit">{status}</button>
      <button type="reset">Reset form</button>

    </form>
  );
};

export default Calendar;