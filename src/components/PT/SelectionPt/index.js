import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

import returnBtn from '../../../img/return-btn.webp';

export default class SelectionPt extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <div className="section-home pt-br">
        <Link to="/" className="return-btn-selection">
          <button className="btn">
            <img src={returnBtn} alt="Retornar para a home" width="50%" />
          </button>
        </Link>

        <div>
          <h3 className="title">Descubra o tamanho ideal</h3>
          <p className="subtitle">Veja o que cachorros da mesma raça usam</p>
        </div>

        <div>
          <Select options={this.props.options} />
        </div>
      </div>
    )
  }

}
