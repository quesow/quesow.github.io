import React, {Component} from 'react';

class Education extends Component {
  render() {
    return (<div className="section section-basic">
      <div className="container">
        <div className="title">
          <h2>Education</h2>
        </div>

        <div id="about-me" className="cd-section">
          <div className="title">
            <h3>Quality and efficiency
              <br/>
              <small>And lots of fun!</small>
            </h3>
          </div>
          <div className="row">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Studies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2008 - 2015</td>
                    <td>Computer Science Degree in the University of Las Palmas de Gran Canaria, Spain. Branch of Information Technologies.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2012 - 2013</td>
                    <td>Erasmus Exchange at Politechnika Krakowska (PK), Krakow, Poland.</td>
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

export default Education;
