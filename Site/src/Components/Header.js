import React, { Component } from 'react'
import '../styles/Header.scss'

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            menuOpen: false,
        }
    }
    render(){
        return(
            <div id ='headerDiv'>
            
                <span id = 'headerName' style = {this.state.menuOpen? {left: '-100%'} : {left: '5%'}} >Matthew Abrey</span>
                <span id = 'menu' style = {this.state.menuOpen? {left: '3.5%'} : {left: '100%'}}>
                    <a id='menuAbout' href="#aboutHeader">About</a>
                    <a id='menuSkills' href="#skillsHeader">Skills</a>
                    <a id='menuProjects' href="#projectHeader">Projects</a>
                    <a id='menuContact' href="#contactHeader">Contact</a>
                </span>
                
                <button id = 'hamburgerMenu' onClick = {() => {this.setState({...this.state, menuOpen: !this.state.menuOpen})}}>{String.fromCharCode(9776)}</button>
                
            </div>
        );
    }
}
export default Header



{/* <div>
    <a id='menuAbout' href="#aboutHeader">About</a>
    <a id='menuSkills' href="#skillsHeader">Skills</a>
    <a id='menuProjects' href="#projectHeader">Projects</a>
    <a id='menuContact' href="#contactHeader">Contact</a>
</div> */}

//
//