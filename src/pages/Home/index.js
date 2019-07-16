import React, { Component } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';

import PageContainer from '../../components/public/PageContainer';
import SectionPt from '../../components/PT/SectionPt';
import SectionEn from '../../components/EN/SectionEn';

export default () => (
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