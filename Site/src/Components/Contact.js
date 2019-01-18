import React, { Component } from 'react'
import '../styles/Contact.scss'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            phoneImg: require('../Media/images/phoneImg.svg'),
            phoneNum: '(209) 275-5402',
            emailImg: require('../Media/images/emailImg.svg'),
            email: 'matthewabrey@yahoo.com',
            githubImg: require('../Media/images/githubImg.png'),
            github: 'Mabrey',
            linkedInImg: require('../Media/images/linkedInImg.png'),
            linkedIn: 'matthew-abrey',
        }
    }
    render(){
        return(
            <div id ='contactContainer'>
                <p id = 'contactTitle'>Contact</p>
                <div id = 'contactGrid'>
                    <div id ='phoneContainer'>
                        <img id = 'phoneImg' src= {this.state.phoneImg} alt = {'phone'}/>
                        <p id = 'phone'>{this.state.phoneNum}</p>
                    </div>
                    <div id ='emailContainer'>
                        <img id = 'emailImg' src= {this.state.emailImg} alt = {'email'}/>
                        <p id = 'email'>{this.state.email}</p>
                    </div>
                    <div id ='githubContainer'>
                        <img id = 'githubImg' src= {this.state.githubImg} alt = {'github'}/>
                        <span id = 'github'>{this.state.github}</span>
                    </div>
                    <div id ='linkedInContainer'>
                        <img id = 'linkedInImg' src= {this.state.linkedInImg} alt = {'linkedIn'}/>
                        <span id = 'linkedIn'>{this.state.linkedIn}</span>
                    </div>

                </div>
            </div>
        );
    }
}
export default Header