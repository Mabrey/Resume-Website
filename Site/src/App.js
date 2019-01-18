import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Opener from './Components/Opener';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Opener></Opener>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
