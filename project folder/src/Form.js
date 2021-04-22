import React, { Component } from 'react';

const axios = require('axios').default;

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = { uname : '', pwrd : '', userLoggedIn: false};
      }

      mySubmitHandler = (event) => {
          event.preventDefault();
        const postData = {
            uname : this.state.uname,
            pwrd : this.state.pwrd
        }
        console.log(postData);
        axios.post('/login',postData).then((response) => {
             console.log(response);
             this.props.loginChange(response.data);
          });
      }

      myuserLoggedinChangeHandler = (event) =>{
          this.setState({userLoggedIn: event.target.value});
      }

      myUnameChangeHandler = (event) => {
        this.setState({uname: event.target.value});
      }
      myPwrdChangeHandler = (event) => {
        this.setState({pwrd: event.target.value});
      }

    render()
    {
    return(<body>
      <form onSubmit={this.mySubmitHandler}>
          <div class="imgcontainer">
          <img src="avatar.jpg" alt="Avatar" class="avatar"/>
          </div>
      
          <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname"  value={this.state.uname}
            onChange={this.myUnameChangeHandler} required/>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="pwrd" value={this.state.pwrd}
            onChange={this.myPwrdChangeHandler}required/>
      
          <button type="submit">Login</button>
          </div>
          </form>
    </body>)
    }
}

export default Form;