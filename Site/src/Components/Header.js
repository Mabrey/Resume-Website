import React, { Component } from 'react'
import '../styles/Header.scss'

class Header extends Component {
    render(){
        return(
            <div id ='headerDiv'>
                <span id = 'headerName'>Matthew Abrey</span>
                <button id = 'hamburgerMenu'>{String.fromCharCode(9776)}</button>
            </div>
        );
    }
}
export default Header