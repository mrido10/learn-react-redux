import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../component/search'
import './home.css'

class Home extends Component {
    render() {
        return(
            <div id='box'>
                <div id='title'>Home Page</div>
                <Search linkTo='/page2'/>           
            </div>
        )
    }
}

export default Home