import React, { Component } from 'react'
import '../styles/About.scss'

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            aboutMeImg: require('../Media/images/aboutMeImg.svg'),
            aboutMeDesc: "I'm an avid coffee drinker, a gaming enthusiast, and love building things. " +
                    "I enjoy the challenge of improving myself and learning new things, " +
                    "whether that's discovering better coding techniques or picking up new technology. " +
                    "There is beauty in knowing there is always something new to discover.",
            gradDesc:"I recently graduated from the University of California, " +
                    "Merced with a B.S. in Computer Science and Engineering.",
            gradImg: require('../Media/images/gradImg.png'),
            eduDesc:"With my education, I have a solid foundation on the fundamentals " +
                    "of programming, including algorithms and data structures.",
            eduImg: require('../Media/images/eduImg.svg'),
            projDesc:"Alongside my formal education, I've been working on " + 
                    "a couple projects, including this site. Feel free to check out my stuff on GitHub!",
            projImg: require('../Media/images/projImg.svg'),

        }
    }

    render(){
        return(
            <div id ='aboutContainer'>
                <p id = 'aboutHeader'>About</p>
                <div id = 'aboutGrid'>
                    <div id ='aboutMe'>
                        <img id = 'aboutMeImg' src= {this.state.aboutMeImg} alt = {'grad hat'}/>
                        <p id ='aboutMeDesc'>{this.state.aboutMeDesc}</p>
                    </div>
                    <div id ='grad'>
                        <img id = 'gradImg' src= {this.state.gradImg} alt = {'grad hat'}/>
                        <p id ='gradDesc'>{this.state.gradDesc}</p>
                    </div>
                    <div id ='edu'>
                        <img id = 'eduImg' src= {this.state.eduImg} alt = {'paper'}/>
                        <p id ='eduDesc'>{this.state.eduDesc}</p>
                    </div>
                    <div id ='proj'>
                        <img id = 'projImg' src= {this.state.projImg} alt = {'code brackets'}/>
                        <p id ='projDesc'>{this.state.projDesc}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default About