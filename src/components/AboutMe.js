import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return (<div className="section section-basic">
      <div className="container">
        <div className="title">
          <h2>About Me</h2>
        </div>

        <div id="about-me" className="cd-section">
          <div className="title">
            <h3>Las Palmas de Gran Canaria, Spain
              <br/>
              <small>Currently based in Cracow, Poland</small>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <img src="./assets/img/faces/face1.jpg" alt="jesua-face" className="img-raised rounded img-fluid"/>
            </div>
            <div className="col-md-6 col-xs-12">
              <p>
                <b>Self-motivated and enthusiastic</b>. Aware of the fast growth of technologies and
                <b> eager to learn </b>
                everything that come across. As a
                <b> software engineer, </b>I chose to study the
                <b> information technologies specialisation, </b>working as a web developer<b>, Backend and Frontend</b>. I keep on track of new technologies and best practices by reading and practising.
              </p>
              <p>Some hobbies: music, video games, netflix and chill... but nothing like grabbing a cold beer in a summer day with your friends!</p>
            </div>
          </div>
        </div>

      </div>
    </div>);
  }
}

export default AboutMe;
