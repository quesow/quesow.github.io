import React, {Component} from 'react';

class Experience extends Component {
  render() {
    return (<div className="section section-basic">
      <div className="container">
        <div className="title">
          <h2>Laboral Experience</h2>
        </div>

        <div id="about-me" className="cd-section">
          <div className="title">
            <h3>I'm there where I'm needed
              <br/>
              <small>Always with a smile!</small>
            </h3>
          </div>
          <div className="row">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>MeStudent</td>
                    <td>Jul 2017 -
                      <b> Present</b>
                    </td>
                    <td>Developing and maintaining a web application, www.mestudent.com, whose goal is to take students all around the world for studying in Australia. The application helps the students and school managers to dynamize the process of appliance of students.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Edumarketer</td>
                    <td>Jan 2017 - Mar 2017</td>
                    <td>2 months project, developing a web application using Spring Framework, Java: program for the management and dynamization of students.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Canaryfly</td>
                    <td>Feb 2015 - Oct 2016</td>
                    <td>Improving and developing internal web applications using Codeigniter, framework based on PHP: Intranet, web agency, ticket invoice management via web.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>);
  }
}

export default Experience;
