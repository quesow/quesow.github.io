import React, {Component} from 'react';

class Main extends Component {
  render() {
    return (<div className="main main-raised">
      <div className="section section-basic">
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
                <img src="./assets/img/faces/face1.jpg" alt="Raised Image" className="img-raised rounded img-fluid"/>
              </div>
              <div className="col-md-6 col-xs-12">
                <p>
                  <b>Self-motivated and enthusiastic</b>. Aware of the fast growth of technologies and <b>eager to learn</b> everything that come across.
                    As a <b>software engineer</b>, I chose to study the <b>information technologies specialisation</b>, working as a web developer<b>, Backend and Frontend</b>. I keep on track of new technologies and best practices by reading and practising.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="section section-basic">
        <div className="container">
          <div className="title">
            <h2>Skills</h2>
          </div>

          <div id="skills" className="cd-section">
            <div className="row">
              <div className="card card-nav-tabs">
                <div className="card-header card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#os" data-toggle="tab">
                            <i className="material-icons">laptop</i>
                            Operating Systems
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#backend" data-toggle="tab">
                            <i className="material-icons">keyboard_hide</i>
                            Backend
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#frontend" data-toggle="tab">
                            <i className="material-icons">keyboard</i>
                            Frontend
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#db" data-toggle="tab">
                            <i className="material-icons">sim_card</i>
                            Databases
                          </a>

                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#tools" data-toggle="tab">
                            <i className="material-icons">developer_board</i>
                            Other tools
                          </a>

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <div className="tab-content text-center">
                    <div className="tab-pane active" id="os">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
                          <b>Windows</b>
                          <div>Windows 7</div>
                          <div>Windows 8</div>
                          <div>Windows 10</div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                          <b>Unix / Linux OS</b>
                          <div>Ubuntu</div>
                          <div>Fedora</div>
                          <div>CentOS</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="backend">
                      <div className="row">
                        <div className="col-md-3 col-xs-12">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="frontend">
                      <div className="row">
                        <div className="col-md-3 col-xs-12">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="db">
                      <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                    <div className="tab-pane" id="tools">
                      <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="section section-basic">
        <div className="container">
          <div className="title">
            <h2>Experience</h2>
          </div>

          <div id="experience" className="cd-section">
            <div className="row">

            </div>
          </div>

        </div>
      </div>
      <div className="section section-basic">
        <div className="container">
          <div className="title">
            <h2>Education</h2>
          </div>

          <div id="education" className="cd-section">

            <div className="row">

            </div>
          </div>

        </div>
      </div>
    </div>);
  }
}

export default Main;
