import React, { Component } from 'react';
import Container from '../../components/Container';
import SectionPt from '../../components/SectionPt';
import SectionEn from '../../components/SectionEn';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <SectionPt />
        <SectionEn />
      </Container>
    );
  }
}