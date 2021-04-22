import React, { Component } from 'react';

const axios = require('axios').default;

class Admin extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { uname : '', pwrd : '', pUname: '', success: false, attempts : 0, officer: 'president', name : '', desc : '', img : ''};
      }

      mySubmitHandler = (event) => {
          event.preventDefault();
        const postData = {
            pUname: this.state.pUname,
            uname : this.state.uname,
            pwrd : this.state.pwrd
        }
        console.log(postData);
        axios.post('/loginChange',postData).then((response) => {
             console.log(response);
             this.setState({success : response.data})
             this.setState({attempts : 0+1})
          });
      }

      myOSubmitHandler = (event) => {
        event.preventDefault();
      const postData = {
          officer: this.state.officer,
          name : this.state.name,
          desc : this.state.desc
      };
      console.log(postData);
      const imageData = new FormData();
      console.log(this.state.img);
      imageData.append('profileImg',this.state.img);
      axios.post('/o',postData).then((response) => {
           console.log(response);
        });
      axios.post('/i', imageData).then((res) =>{
          console.log(res);
      })

    }

      myUnameChangeHandler = (event) => {
        this.setState({uname: event.target.value});
      }

      myPwrdChangeHandler = (event) => {
        this.setState({pwrd: event.target.value});
      }

      mypUnameChangeHandler = (event) =>{
          this.setState({pUname: event.target.value})
      }

      myOfficerChangehandler = (event) =>{
          this.setState({officer: event.target.value})
      }

      myNameChangehandler = (event) =>{
        this.setState({name: event.target.value})
      }

      myDescChangehandler = (event) =>{
        this.setState({desc: event.target.value})
      }

      myImageChangehandler = (event) =>{
          this.setState({img : event.target.files[0]})
      }

    render()
    {
        return(
          <div class="container">
          <form onSubmit={this.mySubmitHandler}>
          <label for="uname"><b>Enter Previous Username</b></label>
          <input type="text" placeholder="Enter Username" name="pUname"  value={this.state.pUname}
            onChange={this.mypUnameChangeHandler} required/>

          <label for="uname"><b>New Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname"  value={this.state.uname}
            onChange={this.myUnameChangeHandler} required/>
      
          <label for="psw"><b>New Password</b></label>
          <input type="password" placeholder="Enter Password" name="pwrd" value={this.state.pwrd}
            onChange={this.myPwrdChangeHandler}required/>
          
          <button type="submit">Login</button>
          
          </form>
          {this.state.success ? <p>Change Successful</p> : null}
          {this.state.attempts > 0 && this.state.success == false ? <p>Change Unsuccessful</p> : null}

        <form onSubmit={this.myOSubmitHandler} encType="multipart/form-data">
        <select name="officers" id="officers" onChange={this.myOfficerChangehandler}>
            <option value="president">President</option>
            <option value="vpresident">Vice President</option>
            <option value="secretary">Secretary</option>
            <option value="treasurer">Treasurer</option>
            <option value="tcaptain">Team Captain</option>  
            <option value="soc1">Social Media Co-Chair 1</option>
            <option value="soc2">Social Media Co-Chair 2</option>
            <option value="soc3">Social Media Co-Chair 3</option>
        </select>
        
        <label for="name"><b>Officer Name</b></label>
        <input type="text" name="name" onChange={this.myNameChangehandler} />
        <label for="desc"><b>Description</b></label>
        <input type="text" name="desc" onChange={this.myDescChangehandler}/>

        <label for="image"><b>Officer Image</b></label>
        <input type="file" name="image" onChange={this.myImageChangehandler} />

        <button type="submit">Submit</button>
        </form>
        
        </div>
        );
    }
}

export default Admin;