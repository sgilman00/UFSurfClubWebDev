import React from 'react'
import './Home.css';


class Home extends React.Component{
   render() {
      return (
<div>
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="97vw30GJ"></script>
        <title>UF SURF CLUB</title>
        <div className="header">
          <div className="header-section">
          </div>
        </div>
        <div id="fb-root" />
        <div className="left-box">
          <u>Follow Our Socials</u>
          <div className="insta">
            <a href="https://www.instagram.com/ufsurf/">
              <img alt="Instagram" src="insta.jpeg" width={100} height={100} />
            </a>
            <br />
            <a href="https://www.instagram.com/ufsurf/" target="_blank">@ufsurf</a>
          </div>
          <div className="fb-page" data-href="https://www.facebook.com/ufsurfclub/" data-tabs="timeline" data-width={180} data-height data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false">
          <a href="https://www.facebook.com/ufsurfclub/">
              <img alt="FaceBook" src="facebook.png" width={100} height={100} />
            </a>
            <blockquote cite="https://www.facebook.com/ufsurfclub/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ufsurfclub/">
                University of Florida Surf and Skim Club</a></blockquote></div>
        </div>
        <div className="right-box">
        </div>
        <div className="cont">
          <div className="main-body">
            <h3>Welcome!</h3>
            <p>Welcome to the webpage for the gnarliest club this side of the swamp. Yeah, Gainesville is far from the coast, but we do our best to make it the beach as often as we can.
              We are one of the 31 official University of Florida RecSports clubs 
              and receive funding from Student Government. The Surf Club 
              competes in contests all over the coast of Florida, and if 
              we're lucky in Nationals in California. We volunteer with surfing/beach related non profit 
              organizations, host socials with the other board sports clubs 
              and hold tons of fun fundraisers.</p>
          </div>
          {/*Responsive Photo Grid*/}
          <div className="row">
            <div className="column">
              <img src="s0.JPG"/>
              <img src="s1.JPG" />
              <img src="s2.JPEG" />
            </div>
            <div className="column">
              <img src="s3.jpeg" />
              <img src="s4.JPG" />
              <img src="s5.JPG" />
            </div>
            <div className="column">
              <img src="s6.JPG" />
              <img src="s7.JPG" />
              <img src="s9.JPG" />
            </div>
          </div>
        </div>
        <footer>
          <p>Email us at: <a href="mailto: ufsurf@ufl.edu">ufsurf@ufl.edu</a>
          </p>
        </footer>
      </div>
      )
   }
  }
  export default Home;