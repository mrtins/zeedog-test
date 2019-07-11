import React, { Component } from 'react';

import './styles.css';

import logoFooter from '../../img/logo-horizontal-branco.webp';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="container flex">
        {this.props.children}

        <footer>
          <img src={logoFooter} alt="Zee.Dog" />
        </footer>
      </section>
    );
  }
}