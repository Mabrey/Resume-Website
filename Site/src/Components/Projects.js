import React, { Component } from 'react'
import '../styles/Project.scss'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            projTransition: require('../Media/images/projTransition.svg'),
            projectMessage: "Projects currently under construction, sorry for the inconvenience!",
            eventSchedImg: require('../Media/images/eventSchedImg.jpg'),
            houseKeepImg: require('../Media/images/houseKeep.jpg'),
        }
    }
    render(){
        return(
            <div id ='projectContainer'>
                <img id = 'projTransition' src= {this.state.projTransition} alt = {'Transition'}/>
                <div id='innerProjContainer'>
                    <p id = 'projectHeader'>Projects</p>
                    <div id = 'projGrid'>
                        <a id = "eventSched" href="https://github.com/Mabrey/Scheduler">
                            <img id = 'eventSchedImg' src= {this.state.eventSchedImg} alt = {'Event Scheduler'}/>
                            <p id = 'eventTitle'>Event Scheduler</p>
                            <p className = "workInProgress" id = "eventWIP">Work In Progress</p>
                        </a>
                        <a id = "houseKeep" href="https://github.com/Mabrey/HouseKeep">
                            <img id = 'houseKeepImg' src= {this.state.houseKeepImg} alt = {'HouseKeep App'}/>
                            <p id = 'houseKeepTitle'>HouseKeep</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header