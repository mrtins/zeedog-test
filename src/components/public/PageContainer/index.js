import React, { Component } from 'react';

import logoFooter from '../../../img/logo-horizontal-branco.webp';

import './styles.css';

export default class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        {this.props.children}

        <footer>
          <img src={logoFooter} alt="Zee.Dog" />
        </footer>
      </section>
    );
  }
}