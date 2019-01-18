import React, { Component } from 'react'
import '../styles/Opener.scss'

class Opener extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hey, I'm Matthew. I'm a hobbyist programmer and recent graduate looking to make my way into software development.",
            img: require('../Media/images/matthew.jpg')
        }
    }

    render(){
        return(
            <div id = 'openerContainer'>
                <div id = 'openMessageBG'>
                    <img id = 'myImage' src= {this.state.img} alt = {'Matthew Abrey'}/>
                    <p id = 'openingMessage'>{this.state.message}</p>
                </div>
            </div>
        );
    }
}
export default Opener