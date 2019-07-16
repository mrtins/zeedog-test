import React, { Component } from 'react';

import PageContainer from '../../components/public/PageContainer';
import DogPt from '../../components/PT/DogPt';
import DogEn from '../../components/EN/DogEn';

export default class Dog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      breed: props.location.state.breed,
      lang: props.match.params.lang,
    }
  }

  render() {
    return (
      <div>
        <PageContainer>
          <div>
            {this.state.lang === 'pt-br' ?
              <DogPt breed={this.state.breed} /> : <DogEn breed={this.state.breed} />
            }
          </div>
        </PageContainer>
      </div>
    )
  }

}