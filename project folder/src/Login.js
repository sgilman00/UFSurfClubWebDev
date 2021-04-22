import React, { Component } from 'react';
import Form from './Form.js';
import Admin from './Admin.js';
import "./Login.css"

class Login extends React.Component{

constructor()
  {
    super();
    this.state = {userLoggedIn: false};
    this.onLoginChange = this.onLoginChange.bind(this);
  }

  onLoginChange(value)
  {
      this.setState({userLoggedIn : value});
  }

  render()
  {
  if(this.state.userLoggedIn === true)
    return <Admin />;
  else
    return (<div>
        <h1 style={{textAlign:'center'}}>Administrator Login</h1>
          <Form loginChange={this.onLoginChange}/>
          </div>);
}

}



export default Login;