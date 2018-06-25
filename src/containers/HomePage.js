import React, { Component } from 'react';
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Modal from 'components/Modal'
import Header from 'components/Header'
import Main from 'components/Main'

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Nav />
        <Modal />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
