import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="https://quesow.github.io/">
              quesow.github.io </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" rel="noopener noreferrer tooltip" title="" data-placement="bottom" href="https://github.com/quesow" target="_blank" data-original-title="Check my GitHub!">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="noopener noreferrer tooltip" title="" data-placement="bottom" href="https://www.facebook.com/jesuabet" target="_blank" data-original-title="My Facebook Profile">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="noopener noreferrer tooltip" title="" data-placement="bottom" href="https://www.instagram.com/chussitow/" target="_blank" data-original-title="My Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
