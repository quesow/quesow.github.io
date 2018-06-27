import React, {Component} from 'react';

class Skills extends Component {
  render() {
    return (<div className="section section-basic">
      <div className="container">
        <div className="title">
          <h2>Skills</h2>
        </div>

        <div id="skills" className="cd-section">
          <div className="title">
            <h3>My background so far
              <br/>
              <small>And I always have room for some more!</small>
            </h3>
          </div>
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
                          Tools
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#others" data-toggle="tab">
                          <i className="material-icons">chat</i>
                          Other skills
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
                      <div className="col-md-4 col-xs-12">
                        <b>Scala</b>
                        <div>Playframework</div>
                        <div>Akka</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <b>Java</b>
                        <div>Spring MVC</div>
                        <div>JAX-RS</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <b>PHP</b>
                        <div>Codeigniter</div>
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <b>Ruby</b>
                        <div>Ruby on Rails</div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="frontend">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <b>Typescript</b>
                        <div>React.js</div>
                        <div>Axios</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <b>Flux</b>
                        <div>Alt.js</div>
                        <div>Redux</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <b>Javascript</b>
                        <div>Angular js</div>
                        <div>jQuery</div>
                        <div>Ajax</div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <b>HTML</b>
                        <div>HAML</div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <b>CSS</b>
                        <div>Bootstrap</div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="db">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        MySQL
                      </div>
                      <div className="col-md-4 col-xs-12">
                        Postgresql
                      </div>
                      <div className="col-md-4 col-xs-12">
                        MS SQL
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tools">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        Git
                      </div>
                      <div className="col-md-4 col-xs-12">
                        Jira
                      </div>
                      <div className="col-md-4 col-xs-12">
                        Agile methodologies (Scrum)
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="others">
                    <div className="row">
                      <div className="col-md-4 col-xs-12">
                        <b>Languages</b>
                        <div>Spanish</div>
                        <div>English</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div>Team player</div>
                      </div>
                      <div className="col-md-4 col-xs-12">
                        <div>Proactive</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>);
  }
}

export default Skills;
