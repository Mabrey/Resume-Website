import React, { Component } from 'react'
import '../styles/Header.scss'

class Header extends Component {
    render(){
        return(
            <div id ='headerDiv'>
                <div id='headerSideScrollMenu' >
                    <span id = 'headerName'>Matthew Abrey</span>
                </div>
                <button id = 'hamburgerMenu'>{String.fromCharCode(9776)}</button>
                
            </div>
        );
    }
}
export default Header



// <div>
//                     <a id='menuAbout' href="#aboutHeader">About</a>
//                     <a id='menuSkills' href="#skillsHeader">Skills</a>
//                     <a id='menuProjects' href="#projectHeader">Projects</a>
//                     <a id='menuContact' href="#contactHeader">Contact</a>
//                 </div>