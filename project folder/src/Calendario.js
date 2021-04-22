import React from 'react'
import './Calendar.css';
import './Calendar.js'
import Calendar from './Calendar.js';
import ContactForm from './ContactForm'

class Calendaro extends React.Component{
   render() {
      return (<div>
        <meta charSet="UTF-8" />
        <link rel="stylessheet" href="Calendar.css" type="text/css" />
        <title>UF SURF CLUB</title>
        <div className="header">
          <div className="header-section">
          </div>
        </div>
        <div className="parent">
          <div className="child" styles={{margin: '5px'}}>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23a8deff&amp;ctz=America%2FNew_York&amp;src=dWZsc3VyZmNsdWJAZ21haWwuY29t&amp;color=%234285F4&amp;title=UF%20SURF%20CLUB" styles="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>        
            <div className="event">
              <h1>Upcoming Event?</h1>
              Going surfing soon? Let us know and we can update the calendar. <div id="calendar" /><Calendar /></div>
              
          </div>
        </div>
        <br />
        <h1 className='buttons'>Contact Us!</h1>
        <p className='buttons'> Fill out this form with any questions you have and we will work on getting answers back to you! </p>
        <div id="root"><ContactForm /></div>   

        <br />
        <footer>
          <p>   Email us at: <a href="mailto: ufsurf@ufl.edu">ufsurf@ufl.edu</a>
          </p>
        </footer>
      </div>
    )
}
}

export default Calendaro;