import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import btnPt from '../../../img/button-pt.webp';

export default class SectionPt extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="section-home pt-br">
        <div>
          <p className="text">PT</p>
          <h2 className="title">Tá com dúvida no tamanho?</h2>
          <p className="text">Relaxa que a gente te ajuda!</p>
          <Link to="/selection/pt-br">
            <button className="btn">
              <img src={btnPt} alt="Clique aqui" width='300px' />
            </button>
          </Link>
        </div>
      </div>
    )
  }

}
