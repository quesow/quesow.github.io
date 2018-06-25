import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="page-header header-filter clear-filter purple-filter" data-parallax="true" style={{backgroundImage: `url('./assets/img/business-computer-contemporary-669996.jpg')`}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="brand">
                  <h1>Jesua Betancor Alemán</h1>
                  <h3>Web Developer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
