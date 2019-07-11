import React, { Component } from 'react';

import './styles.css';

import btnPt from '../../img/button-pt.webp';

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
          <p>PT</p>
          <h2 className="uppercase">Tá com dúvida no tamanho?</h2>
          <p className="uppercase">Relaxa que a gente te ajuda!</p>
          <button className="btn" style={{ marginTop: '75px' }}>
            <img src={btnPt} alt="Clique aqui" width='300px' />
          </button>
        </div>
      </div>
    )
  }

}
