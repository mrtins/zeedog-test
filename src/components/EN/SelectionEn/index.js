import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import {
  Col
} from 'react-bootstrap';

import returnBtn from '../../../img/return-btn-en.webp';
import disclaimerEn from '../../../img/disclaimer-en.webp';

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
        label: breed.en_name,
        value: breed.en_name,
      });
    });

    await this.setState({ options });
  }

  getOptions = (input) => {
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
      <div className="section-home en">
        <Col>
          <Link to="/" className="return-btn-selection">
            <button className="btn">
              <img src={returnBtn} alt="Return to home" width="50%" />
            </button>
          </Link>
        </Col>
        <Col>
          <div>
            <h3 className="title">Find out what sizes fit your dog best</h3>
            <p className="subtitle">Discover what do same breed dogs wear</p>
          </div>

          {this.state.options.length === 0 ? null :
            <div>
              <AsyncSelect
                placeholder="Select your dog's breed"
                cacheOptions
                defaultOptions
                onChange={this.props.handleChange}
                loadOptions={this.promiseOptions}
              />
            </div>
          }
        </Col>

        <Col>
          <div className="disclaimer-selection">
            <img src={disclaimerEn} alt="If you have a mutt, choose a breed with a similar size" width="250px" style={{ marginBottom: '80px' }} />
          </div>
        </Col>
      </div>
    )
  }

}
