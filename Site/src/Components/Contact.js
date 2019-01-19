import React, { Component } from 'react';
import '../styles/Contact.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
            paperclipImg: require('../Media/images/paperclipImg.svg'),
        }
        
    }

    // copyPhoneToClipboard(){
    //     let copyText = document.getElementById('phone');
    //     copyText.select();
    //     document.execCommand("copy");
    //     alert("Copied to clipboard!");
    // }

    render(){
        return(
            <div id ='contactContainer'>
                <p id = 'contactHeader'>Contact</p>
                <div id = 'contactGrid'>
                    <div id ='phoneContainer'>
                        <img id = 'phoneImg' src= {this.state.phoneImg} alt = {'phone'}/>
                        <CopyToClipboard 
                            text = {this.state.phoneNum}
                            onCopy = {() => alert("Copied to clipboard")}
                            >
                            <button id = 'phone'>{this.state.phoneNum}</button>
                        </CopyToClipboard>
                        
            
                    </div>
                    <div id ='emailContainer'>
                        <img id = 'emailImg' src= {this.state.emailImg} alt = {'email'}/>
                        <CopyToClipboard 
                            text = {this.state.email}
                            onCopy = {() => alert("Copied to clipboard")}
                            >
                            <p id = 'email'>{this.state.email}</p>
                        </CopyToClipboard>
                        
                    </div>
                    <div id ='githubContainer'>
                        <img id = 'githubImg' src= {this.state.githubImg} alt = {'github'}/>
                        <a id = 'github' href="https://github.com/Mabrey">{this.state.github}</a>
                    </div>
                    <div id ='linkedInContainer'>
                        <img id = 'linkedInImg' src= {this.state.linkedInImg} alt = {'linkedIn'}/>
                        <a id = 'linkedIn' href="https://www.linkedin.com/in/matthew-abrey/">{this.state.linkedIn}</a>
                    </div>

                </div>
            </div>
        );
    }
}
export default Header