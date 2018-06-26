import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (<footer className="footer" data-background-color="black">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="https://presentation.creative-tim.com">
                About Creative Tim
              </a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/license">
                Licenses
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          &copy;{` ${new Date().getFullYear()}, made with`}
          <i className="material-icons">favorite</i>
          {` by `}
          <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">Creative Tim</a>
          {` for a better web.`}
        </div>
      </div>
    </footer>);
  }
}

export default Footer;
