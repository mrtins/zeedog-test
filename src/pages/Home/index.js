import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import PageContainer from '../../components/PageContainer';
import SectionPt from '../../components/SectionPt';
import SectionEn from '../../components/SectionEn';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PageContainer>
          <Row noGutters>
            <Col sm={6}>
              <SectionPt />
            </Col>
            <Col sm={6}>
              <SectionEn />
            </Col>
          </Row>
        </PageContainer>
      </div>
    );
  }
}