import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import btnEn from '../../../img/button-en.webp';

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
          <p className="text">EN</p>
          <h2 className="title">Not sure about the size?</h2>
          <p className="text">No worries, we'll help you!</p>
          <Link to="/selection/en">
            <button className="btn">
              <img src={btnEn} alt="Clique aqui" width='300px' />
            </button>
          </Link>
        </div>
      </div>
    )
  }

}
