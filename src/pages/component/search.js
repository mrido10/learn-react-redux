import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import ActionType from '../../redux/globalAction'
import './search.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            movePage: false
        }
    }

    handleSearch = (e) => {
        if (e.charCode === 13) {
            this.setState({
                movePage: true
            })
        }
    }
    
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
            this.props.search(this.state.search)
        })
    }

    componentDidMount() {
        document.getElementById('search').focus()
    }

    render() {
        if (this.state.movePage) {
            return <Redirect to={this.props.linkTo} />
        }
        return(
            <>
            <div id='boxSearch'>
                <input type='text' id='search' spellCheck='false' value={this.props.data} onChange={this.handleChange} onKeyPress={this.handleSearch}/>
                <Link to={this.props.linkTo}><FontAwesomeIcon icon={faSearch} /></Link>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (testing) => dispatch({
            type : ActionType.CHANGE_SEARCH_VALUE,
            value: testing
        }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)