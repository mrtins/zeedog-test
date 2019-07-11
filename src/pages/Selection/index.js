import React, { Component } from 'react';
import axios from 'axios';

import PageContainer from '../../components/public/PageContainer';
import SelectionPt from '../../components/PT/SelectionPt';
import SelectionEn from '../../components/EN/SelectionEn';

export default class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: props.match.params.lang
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json', { crossdomain: true }).then(data => {
      console.log(data);
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <PageContainer>
          <div>
            {this.state.lang === 'pt' ?
              <SelectionPt /> : <SelectionEn />
            }
          </div>
        </PageContainer>
      </div>
    )
  }

}
