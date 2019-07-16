import React, { Component } from 'react';
import axios from 'axios';

import LoadingSpinner from '../../components/public/LoadingSpinner';
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
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    return this.getData();
  }

  async getData() {
    await axios.get('https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json').then(async res => {
      const arr = Object.keys(res.data).map((k) => res.data[k]);      // Convertendo para array de objetos
      await this.setState({ breeds: arr });
    }).catch(err => console.log(err));
  }

  handleChange(e) {
    const breed = this.state.breeds.find(el => (el.pt_name || el.en_name) === e.label);

    return this.props.history.push(`/dog/${this.state.lang}/${breed.fullName}`, { breed });
  }

  render() {
    return (
      <div>
        <PageContainer>
          <div>
            {this.state.breeds.length === 0 ? <LoadingSpinner lang={this.state.lang} /> :
              <div>
                {this.state.lang === 'pt-br' ?
                  <SelectionPt breeds={this.state.breeds} handleChange={this.handleChange} /> : <SelectionEn />
                }
              </div>
            }
          </div>
        </PageContainer>
      </div>
    )
  }

}
