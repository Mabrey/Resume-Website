import React, { Component } from 'react'
import '../styles/Header.scss'

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            menuOpen: false,
            width: 0,
            height: 0,
            mobile: true,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        if (window.innerWidth < 1000){
             this.setState({...this.state, width: window.innerWidth, height: window.innerHeight, mobile: true });
        }
        
        if (window.innerWidth >= 1000){
            this.setState({...this.state, width: window.innerWidth, height: window.innerHeight, mobile: false });
       }
       
    }

    render(){
        console.log(this.state.width);
        console.log(this.state.mobile);


        if(this.state.mobile){
            return(
                <div id ='headerDiv'>
                    <span id = 'headerName' style = {(this.state.menuOpen) ? {left: '-100%'} : {left: '5%'}} >Matthew Abrey</span>
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

        return(
            <div id ='headerDiv'>
                <span id = 'menu'>
                    <a id='menuAbout' href="#aboutHeader">About</a>
                    <a id='menuSkills' href="#skillsHeader">Skills</a>
                    <a id='menuProjects' href="#projectHeader">Projects</a>
                    <a id='menuContact' href="#contactHeader">Contact</a>
                </span>
                
            </div>
        );

        
    }
}
export default Header


