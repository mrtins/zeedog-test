import React, { Component } from 'react';

import logoFooter from '../img/logo-horizontal-branco.webp';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
        <footer style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "#000" }}>
          <img src={logoFooter} alt="Zee.Dog" style={{ width: "20%", display: "block", margin: "0 auto", border: 0 }} />
        </footer>
      </div>
    );
  }
}