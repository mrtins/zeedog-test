import React, { Component } from 'react';

import PageContainer from '../../components/public/PageContainer';
import DogPt from '../../components/PT/DogPt';

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
              <DogPt breed={this.state.breed} /> : <div>null</div>
            }
          </div>
        </PageContainer>
      </div>
    )
  }

}