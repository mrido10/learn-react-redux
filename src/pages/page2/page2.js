import React, {Component} from 'react'
import Search from '../component/search'
import { Link } from 'react-router-dom';

class Page2 extends Component {
    render() {
        return(
            <div id='box'>
                <div id='title'>Page 2</div>
                <Search linkTo='/'/>
            </div>
        )
    }
}

export default Page2