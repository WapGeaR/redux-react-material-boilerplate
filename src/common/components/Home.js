import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Home extends Component {

  render() {
    return (
        <div>
          <Helmet title="Home page"/>
          Its a home
        </div>
    );
  }
}

export default Home;