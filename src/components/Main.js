import React, {Component} from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

class Main extends Component {
  render() {
    return (<div className="main main-raised">
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>);
  }
}

export default Main;
