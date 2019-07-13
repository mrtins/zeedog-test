import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

import './styles.css';

import returnBtn from '../../../img/return-btn.webp';

export default class SelectionPt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [],
    }

    this.renderOptions = this.renderOptions.bind(this);
  }

  async componentDidMount() {
    await this.renderOptions();
  }

  async renderOptions() {
    let options = [];

    await this.props.breeds.map((breed, i) => {
      return options.push({
        label: breed.pt_name,
        value: breed.pt_name,
      });
    });

    await this.setState({ options });
  }

  getOptions = (input) => {
    console.log('getOptions', this.state)
    return this.state.options.filter(option => option.label.toLowerCase().includes(input.toLowerCase()));
  }

  promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getOptions(inputValue));
      }, 1000);
    });

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

        {this.state.options.length === 0 ? null :
          <div>
            <AsyncSelect cacheOptions defaultOptions loadOptions={this.promiseOptions} />
          </div>
        }
      </div>
    )
  }

}
