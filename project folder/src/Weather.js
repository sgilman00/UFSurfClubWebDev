import React from 'react'
import './Weather.css';


class Weather extends React.Component{
   render() {
      return (
        <div className="mod">
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="./Weather.css" type="text/css" />
          <title>UF SURF CLUB</title>
          <div className="header">
            <div className="header-section">
            </div>
          </div>
          <h2>Check out the weather and surf conditions of some local beaches!</h2>
          <div className ="weatherwid">
         <a className="weatherwidget-io" href="https://forecast7.com/en/29d65n82d32/gainesville/?unit=us" data-label_1="GAINESVILLE" data-label_2="Florida" data-theme="weather_one">GAINESVILLE Florida</a>
             <script src="https://forecast7.com/en/29d65n82d32/gainesville/?unit=us">  </script>
          <br />
          <a className="weatherwidget-io" href="https://forecast7.com/en/29d84n81d27/saint-augustine-beach/?unit=us" data-label_1="SAINT AUGUSTINE BEACH" data-label_2="Florida" data-theme="weather_one">SAINT AUGUSTINE BEACH Florida</a>
          <br />
          <a className="weatherwidget-io" href="https://forecast7.com/en/30d28n81d40/jacksonville-beach/?unit=us" data-label_1="JACKSONVILLE BEACH" data-label_2="Florida" data-theme="weather_one">JACKSONVILLE BEACH Florida</a>
          <br />
          <a className="weatherwidget-io" href="https://forecast7.com/en/29d03n80d93/new-smyrna-beach/?unit=us" data-label_1="NEW SMYRNA BEACH" data-label_2="Florida" data-theme="weather_one">NEW SMYRNA BEACH Florida</a>
          <br />
          </div>
          <div className ="surfwid">
          <div className="parent">
            <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
            <div className="wf-width-cont surf-fc-widget">
              <div className="widget-container">
                <div className="external-cont">
                  <iframe className="surf-fc-i" allowTransparency="true" src="//www.surf-forecast.com/breaks/St-Augustine-Beach-Pier/forecasts/widget/a" scrolling="no" frameBorder={0} marginWidth={0} marginHeight={0}>
                  </iframe>
                  <div className="footer"><a className="logo" href="//www.surf-forecast.com/">
                      <img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width={1} height={1} />
                    </a>
                    <div className="about" id="cmt">More <a href="//www.surf-forecast.com/breaks/St-Augustine-Beach-Pier">Detailed Surf Conditions &amp; Webcams for&nbsp;St Augustine Beach Pier</a>
                      <nobr>at&nbsp;
                        <a href="//www.surf-forecast.com/">surf-forecast.com</a>
                      </nobr>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
            <div className="wf-width-cont surf-fc-widget">
              <div className="widget-container">
                <div className="external-cont">
                  <iframe className="surf-fc-i" allowTransparency="true" src="//www.surf-forecast.com/breaks/New-Smyrna-Inlet/forecasts/widget/a" scrolling="no" frameBorder={0} marginWidth={0} marginHeight={0}>
                  </iframe>
                  <div className="footer">
                    <a className="logo" href="//www.surf-forecast.com/">
                      <img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width={1} height={1} />
                    </a>
                    <div className="about" id="cmt">More <a href="//www.surf-forecast.com/breaks/New-Smyrna-Inlet">Detailed Surf Conditions &amp; Webcams for&nbsp;New Smyrna Inlet</a>
                      <nobr>at&nbsp;<a href="//www.surf-forecast.com/">surf-forecast.com</a></nobr>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <link href="//www.surf-forecast.com/stylesheets/widget.css" media="screen" rel="stylesheet" type="text/css" />
            <div className="wf-width-cont surf-fc-widget">
              <div className="widget-container">
                <div className="external-cont">
                  <iframe className="surf-fc-i" allowTransparency="true" src="//www.surf-forecast.com/breaks/Jax-Beach-Pier/forecasts/widget/a" scrolling="no" frameBorder={0} marginWidth={0} marginHeight={0}>
                  </iframe><div className="footer">
                    <a className="logo" href="//www.surf-forecast.com/">
                      <img src="//www.surf-forecast.com/images/widget.png" alt="Widget" width={1} height={1} />
                    </a>
                    <div className="about" id="cmt">More <a href="//www.surf-forecast.com/breaks/Jax-Beach-Pier">Detailed Surf Conditions &amp; Webcams for&nbsp;Jax Beach Pier</a>
                      <nobr>at&nbsp; <a href="//www.surf-forecast.com/">surf-forecast.com</a></nobr>.</div></div></div></div></div>
          </div>
          </div>
          <br />
          <footer>
            <p>   Email us at: <a href="mailto: ufsurf@ufl.edu">ufsurf@ufl.edu</a>
            </p>
          </footer>
          {!function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                // if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https:weatherwidget.io/js/widget.min.js';
                    fjs.parentNode.insertBefore(js, fjs);
                // }
            }
                (document, 'script', 'weatherwidget-io-js')
            }
        </div>
      );
    }
  };

  export default Weather;