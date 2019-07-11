import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import PageContainer from '../../components/public/PageContainer';
import SectionPt from '../../components/PT/SectionPt';
import SectionEn from '../../components/EN/SectionEn';

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