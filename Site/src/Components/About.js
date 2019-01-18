import React, { Component } from 'react'
import '../styles/About.scss'

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            gradDesc:"I recently graduated from the University of California, " +
                    "Merced with a B.S. in Computer Science and Engineering.",
            gradImg: require('../Media/images/gradImg.png'),
            eduDesc:"With my education, I have a solid foundation on the fundamentals " +
                    "of programming, including algorithms and data structures.",
            eduImg: require('../Media/images/eduImg.svg'),
            projDesc:"Alongside my formal education, I've been working on " + 
                    "a couple projects you can find below. If you're interested let me know!",
            projImg: require('../Media/images/projImg.svg'),

        }
    }

    render(){
        return(
            <div id ='aboutContainer'>
                <p id = 'aboutHeader'>About</p>
                <div id = 'aboutGrid'>
                    <img id = 'gradImg' src= {this.state.gradImg} alt = {'grad hat'}/>
                    <p id ='gradDesc'>{this.state.gradDesc}</p>
                    <img id = 'eduImg' src= {this.state.eduImg} alt = {'paper'}/>
                    <p id ='eduDesc'>{this.state.eduDesc}</p>
                    <img id = 'projImg' src= {this.state.projImg} alt = {'code brackets'}/>
                    <p id ='projDesc'>{this.state.projDesc}</p>
                
                </div>
            </div>
        );
    }
}
export default About