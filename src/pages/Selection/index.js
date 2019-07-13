import React, { Component } from 'react';
import axios from 'axios';

import PageContainer from '../../components/public/PageContainer';
import SelectionPt from '../../components/PT/SelectionPt';
import SelectionEn from '../../components/EN/SelectionEn';

export default class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: props.match.params.lang,
      breeds: [],
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await axios.get('https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json').then(async res => {
      const arr = Object.keys(res.data).map((k) => res.data[k]);      // Convertendo para array de objetos
      await this.setState({ breeds: arr });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <PageContainer>
          <div>
            {this.state.breeds.length === 0 ? <div>carregando</div> :
              <div>
                {this.state.lang === 'pt' ?
                  <SelectionPt breeds={this.state.breeds} /> : <SelectionEn />
                }
              </div>
            }
          </div>
        </PageContainer>
      </div>
    )
  }

}
