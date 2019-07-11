import React, { Component } from 'react';

import './styles.css';

import btnEn from '../../img/button-en.webp';

export default class SectionPt extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="section-home en">
        <div>
          <p>EN</p>
          <h2 className="uppercase">Not sure about the size?</h2>
          <p className="uppercase">No worries, we'll help you!</p>
          <button className="btn" style={{ marginTop: '75px' }}>
            <img src={btnEn} alt="Clique aqui" width='300px' />
          </button>
        </div>
      </div>
    )
  }

}
