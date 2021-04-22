import React from 'react'
//import { useState } from 'react'
import { Image, Button, Icon } from 'semantic-ui-react'
import './myStyles.css'
//import ReactDOM from 'react-dom'

const pictures = ["s0.JPG", "s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg"]
const limit = pictures.length - 1;

class GalleryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.state = {displayImage:pictures[0],
      displayNumber: 0};
  }

  // STATE FUNCTIONS
  // Function to switch state
  // Readapt: Make left click and navigate down the array
  handleLeftClick() {
    console.log("DEBUG");
    if(this.state.displayNumber > 0)
    {
      this.state = {displayImage:pictures[this.state.displayNumber-1],
        displayNumber: this.state.displayNumber-1}
        this.setState({displayNumber:this.state.displayNumber});
        this.setState({displayImage:pictures[this.state.displayNumber]});
        console.log("here", this.state.displayNumber)
    }
    else {
      console.log("need",limit)
      this.state = {displayImage:pictures[limit],
        displayNumber: limit}
        this.setState({displayNumber:limit});
      this.setState({displayImage:pictures[this.state.displayNumber]});
    }
  }

  // Function to switch state
  // Readapt: Make right click and navigate up the array
  handleRightClick() {
    if(this.state.displayNumber < limit)
    {
      console.log("right", this.state.displayNumber)
      this.state = {displayImage:pictures[this.state.displayNumber+1],
        displayNumber: this.state.displayNumber+1}
      this.setState({displayNumber:this.state.displayNumber});
      this.setState({displayImage:pictures[this.state.displayNumber]});
    }
    else {
      console.log("rt", this.state.displayNumber)
      this.state = {displayImage:pictures[0],
        displayNumber: 0}
      this.setState({displayNumber:0});
      this.setState({displayImage:pictures[this.state.displayNumber]});
    }
  }

  // Just gonna assume this is a main
  render() {
    // Default state
    // Readapt: Make default state image 0
    const currentImage = this.state.displayImage;

    let buttonLeft;
    let buttonRight;

    // If statement to change state
    // Readapt: Probably remove this and just have two functions
    //if (isLoggedIn) {
    buttonLeft = (
    <Button>
      <Button.Content onClick={this.handleLeftClick}>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>)
      //buttonLeft = <LogoutButton onClick={this.handleLogoutClick} />;
  //  } else {
    //  buttonRight = <LoginButton onClick={this.handleLoginClick} />;

      buttonRight = (<Button>
        <Button.Content onClick={this.handleRightClick}>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>)
  //  }

    // Is greeting defined somewhere?
    return (
      <div>
       <meta charSet="UTF-8" />
        <link rel="stylesheet" href="about.css" type="text/css" />
        <title>UF SURF CLUB</title>
        <div className="header">
          <div className="header-section">
          </div>
        </div>
      <div className='center-stuff'>
        {buttonLeft}
        <TheActualImage imageout={currentImage} />
        {buttonRight}
      </div>
      </div>
    );
  }
}

// PRINT FUNCTIONS
// These functions return the text to be rendered
// Readapt: These may not be necessary for the image display
/*
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}*/

// This function oversees which of the PRINT functions is utilized
function TheActualImage(props) {
  const imageout = props.imageout;
   return (<div className='display-outline'>
   <Image>
   <Image src={imageout} size='medium' />
   </Image>
  </div>)
}

// BUTTON FUNCTIONS
//
//
/*
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
*/

// No clue
/*
ReactDOM.render(
  <GalleryDisplayControl />,
  document.getElementById('root')
);
*/
export default GalleryDisplay;