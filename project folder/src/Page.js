import React, { Component } from 'react';
import Login from './Login.js';
import About from './About.js'
import Home from './Home.js'
import Weather from './Weather.js'
import Calendar from './Calendar.js'
import Header from './Header.js'
import GalleryDisplay from './GalleryDisplay.js'
import Calendario from './Calendario.js'
import ContactForm from './ContactForm.js';
import Gallery from './Gallery.js'


class MainPage extends React.Component{

    constructor()
    {
        super();
        this.state = {pagenum : 0};
        this.pageNumChange = this.pageNumChange.bind(this);
    }

    pageNumChange(value)
    {
        this.setState({pagenum : value});
    }

    render(){
        switch(this.state.pagenum)
        {
            case 0:
                return(
                    <div><Header pageNumChange={this.pageNumChange} /><Home /></div>
                    )
            case 1:
                return(<div><Header pageNumChange={this.pageNumChange} /><About /></div>)
            case 2:
                return(<div><Header pageNumChange={this.pageNumChange} /><Gallery /></div>)
            case 3:
                return(<div><Header pageNumChange={this.pageNumChange} /><Calendario/></div>)
            case 4:
                return(<div><Header pageNumChange={this.pageNumChange} /><Weather /></div>)
            case 5:
                return(<div><Header pageNumChange={this.pageNumChange} /><Login /></div>)
        }
        
    }
}

export default MainPage;