import React from 'react'
import './About.css';

const axios = require('axios').default;

class About extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      once : false,
      presName : '',
      presDesc: '',
      vpName : '',
      vpDesc : '',
      tName : '',
      tDesc : '',
      sName : '',
      sDesc : '',
      tcName : '',
      tcDesc : '',
      sm1Name : '',
      sm2Name : '',
      sm3Name : '',
      sm1Desc : '',
      sm2Desc : '', 
      sm3Desc : '',
     };
  }

  getInfo()
  {
    axios.get('/oinfo').then((response) =>{
      console.log(response.data[0].name)
      this.setState({
                    presName : response.data[0].name, 
                    presDesc : response.data[0].desc, 
                    vpName : response.data[1].name,
                    vpDesc : response.data[1].desc,
                    sName : response.data[2].name,
                    sDesc : response.data[2].desc,
                    tName : response.data[3].name,
                    tDesc : response.data[3].desc,
                    tcName : response.data[4].name,
                    tcDesc : response.data[4].desc,
                    sm1Name : response.data[4].name, 
                    sm1Desc : response.data[4].desc,
                    sm2Name : response.data[5].name, 
                    sm2Desc : response.data[5].desc,
                    sm3Name : response.data[6].name, 
                    sm3Desc : response.data[6].desc,
                    })
    })
   
  }


   render() {
     if(!this.state.once)
     {
      this.getInfo();
      this.setState({once : true});
     }
      return (
        <div>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="about.css" type="text/css" />
        <title>UF SURF CLUB</title>
        <div className="header">
          <div className="header-section">
          </div>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table width="100%" style={{textAlign: 'center'}}>
            <tbody><tr style={{textAlign: 'center'}}> 
                <td colSpan={3}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <figure>
                      <img src="president.png" width={380} height={400} style={{border: '1 px black solid'}} />
                      <figcaption style={{textAlign: 'center'}}>President - {this.state.presName} <br /> {this.state.presDesc} </figcaption>
                    </figure>
                    <figure>
                      <img src="vice.png" width={240} height={400} />
                      <figcaption style={{textAlign: 'center'}}>Vice President -  {this.state.vpName}<br /> {this.state.vpDesc}</figcaption>
                    </figure>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <img src="treasurer.jpeg" width={200} height={400} />
                    <figcaption>Treasurer -  {this.state.tName}<br /> {this.state.tDesc}</figcaption>
                  </figure>
                </td>
                <td>
                  <figure>
                    <img src="secretary.png" />
                    <figcaption>Secretary -  {this.state.sName}<br /> {this.state.sDesc}</figcaption>
                  </figure>
                </td>
                <td>
                  <figure>
                    <img src="team captain.png" width={300} height={400} /> 
                    <figcaption>Team Captain -  {this.state.tcName}<br /> {this.state.tcDesc}</figcaption>
                  </figure>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <img src="socialmed1.png" width={300} height={400} />
                    <figcaption>Social Media Co-Chair -  {this.state.sm1Name}<br /> {this.state.sm1Desc}</figcaption>
                  </figure>
                </td>
                <td>
                  <figure>
                    <img src="socialmed2.JPG " width={300} height={400} />
                    <figcaption>Social Media Co-Chair - {this.state.sm2Name}<br /> {this.state.sm2Desc}</figcaption>
                  </figure>
                </td>
                <td>
                  <figure>
                    <img src="socialmed3.png" width={300} height={400} />
                    <figcaption>Social Media Co-Chair - {this.state.sm3Name}<br /> {this.state.sm3Desc}</figcaption>
                  </figure>
                </td>
              </tr>
            </tbody></table>
        </div>
        <br />
        <br />
        <p style={{textAlign: 'center'}}> More information about Executive Board Elections coming up! Stay Tuned!
        </p>
        <footer>
          <p>   Email us at: <a href="mailto: ufsurf@ufl.edu">ufsurf@ufl.edu</a>
          </p>
        </footer>
      </div>
    );
  }
}

    export default About;