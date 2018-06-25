import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main main-raised">
        <div className="section section-basic">
          <div className="container">
            <div className="title">
              <h2>Basic Elements</h2>
            </div>

            <div id="buttons" className="cd-section">
              <div className="title">
                <h3>Buttons
                  <br/>
                  <small>Pick your style</small>
                </h3>
              </div>
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <button className="btn btn-primary">Default</button>
                  <button className="btn btn-primary btn-round">Round</button>
                  <button className="btn btn-primary btn-round">
                    <i className="material-icons">favorite</i> With Icon
                  </button>
                  <button className="btn btn-primary btn-fab btn-round">
                    <i className="material-icons">favorite</i>
                  </button>
                  <button className="btn btn-primary btn-link">Simple</button>
                </div>
              </div>
              <div className="title">
                <h3>
                  <small>Pick your size</small>
                </h3>
              </div>
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <button className="btn btn-primary btn-sm">Small</button>
                  <button className="btn btn-primary">Regular</button>
                  <button className="btn btn-primary btn-lg">Large</button>
                </div>
              </div>
              <div className="title">
                <h3>
                  <small> Pick your color </small>
                </h3>
              </div>
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <button className="btn">Default</button>
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-info">Info</button>
                  <button className="btn btn-success">Success</button>
                  <button className="btn btn-warning">Warning</button>
                  <button className="btn btn-danger">Danger</button>
                  <button className="btn btn-rose">Rose</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="section section-download" id="downloadSection">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 ml-auto mr-auto">
                <h2>Do you love this UI Kit?</h2>
                <h4>Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. Our friends from
                  <a href="https://themeisle.com/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website" rel="noopener noreferrer" target="_blank">ThemeIsle</a> created a Wordpress Theme which can be also downloaded for free. Start a new project or give an old Bootstrap project a new look!</h4>
              </div>
              <div className="col-sm-8 col-md-6 ml-auto mr-auto">
                <a href="http://www.creative-tim.com/product/material-kit" className="btn btn-primary btn-lg">
                  <i className="fa fa-html5"></i> Free HTML Download
                </a>
                <a href="https://themeisle.com/themes/hestia/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lg">
                  <i className="fa fa-wordpress"></i> Wordpress Theme
                </a>
              </div>
            </div>
            <br/>
            <br/>
            <div className="row text-center">
              <div className="col-md-8 ml-auto mr-auto">
                <h2>Want more?</h2>
                <h4>We´ve just launched
                  <a href="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-mk-demos" target="_blank" rel="noopener noreferrer">Material Kit PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap UI Kit inspired by Material Design.</h4>
              </div>
              <div className="col-sm-8 col-md-5 ml-auto mr-auto">
                <a href="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-mk-demos" className="btn btn-rose btn-upgrade btn-lg" target="_blank" rel="noopener noreferrer">
                  <i className="material-icons">unarchive</i> Upgrade to PRO
                </a>
              </div>
            </div>
            <div className="sharing-area text-center">
              <div className="row justify-content-center">
                <h3>Thank you for supporting us!</h3>
              </div>
              <button id="twitter" className="btn btn-raised btn-twitter sharrre">
                <i className="fa fa-twitter"></i> Tweet
              </button>
              <button id="facebook" className="btn btn-raised btn-facebook sharrre">
                <i className="fa fa-facebook-square"></i> Share
              </button>
              <button id="googlePlus" className="btn btn-raised btn-google-plus sharrre">
                <i className="fa fa-google-plus"></i> Share
              </button>
              <a id="github" href="https://github.com/creativetimofficial/material-kit" target="_blank" rel="noopener noreferrer" className="btn btn-raised btn-github">
                <i className="fa fa-github"></i> Star
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
