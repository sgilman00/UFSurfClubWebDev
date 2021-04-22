import React, { Component } from 'react';


class Header extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {pageNum : 0}
    }

    myPageHandler = (event) =>
    {
        this.props.pageNumChange(this.state.pageNum);
    }

    hoverHandler0 = (event) =>
    {
        this.setState({pageNum : 0})
        console.log(this.state.pageNum)
    }

    hoverHandler1 = (event) =>
    {
        this.setState({pageNum : 1})
    }

    hoverHandler2 = (event) =>
    {
        this.setState({pageNum : 2})
    }

    hoverHandler3 = (event) =>
    {
        this.setState({pageNum : 3})
    }

    hoverHandler4 = (event) =>
    {
        this.setState({pageNum : 4})
    }

    hoverHandler5 = (event) =>
    {
        this.setState({pageNum : 5})
    }


    render()
    {
        return(
            <ul>
            <li onMouseOver ={this.hoverHandler0} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>Home</a></li>
            <li onMouseOver ={this.hoverHandler1} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>About</a></li>
            <li onMouseOver ={this.hoverHandler2} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>Photos</a></li>
            <li onMouseOver ={this.hoverHandler3} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>Calendar</a></li>
            <li onMouseOver ={this.hoverHandler4} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>Weather</a></li>
            <li onMouseOver ={this.hoverHandler5} style={{cursor:'pointer'}} onClick={this.myPageHandler}><a>Login</a></li>
          </ul>)
    }
}

export default Header;