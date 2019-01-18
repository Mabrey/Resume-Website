import React, { Component } from 'react'
import '../styles/Skills.scss'

class Skills extends Component {

    constructor(props){
        super(props);
        this.state = {
            jsDesc:"Recently I've been interested in web development, focusing on JavaScript," +
                    "in particular ES6 along with HTML and CSS.",
            jsImg: require('../Media/images/jsImg.svg'),
            webTechDesc:"Web technologies I've used alongside JavaScript include React, Node, Express, Webpack and Babel.",
            webTechImg: require('../Media/images/webTechImg.svg'),
            langDesc:"I also have experience with languages such as C/C++ and Java," +
                     "and database technologies like SQLite and Firebase.",
            langImg: require('../Media/images/langImg.svg'),
            skillsTransition: require('../Media/images/skillTransition.svg'),

        }
    }

    render(){
        return(
            <div id ='skillsContainer'>
                <img id = 'skillsTransition' src= {this.state.skillsTransition} alt = {'transition'}/>
                <div id ='innerSkillsContainer'>
                    <p id = 'skillsHeader'>Skills</p>
                    <div id = 'skillsGrid'>
                    <img id = 'jsImg' src= {this.state.jsImg} alt = {'JavaScript logo'}/>
                    <p id ='jsDesc'>{this.state.jsDesc}</p>
                    <img id = 'webTechImg' src= {this.state.webTechImg} alt = {'web tech img'}/>
                    <p id ='webTechDesc'>{this.state.webTechDesc}</p>
                    <img id = 'langImg' src= {this.state.langImg} alt = {'curly brackets'}/>
                    <p id ='langDesc'>{this.state.langDesc}</p>
                
                </div>
                </div>
                
            </div>
        );
    }
}
export default Skills