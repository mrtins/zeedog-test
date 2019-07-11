import React, { Component } from 'react';
import Container from '../../components/Container';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <div>
          <h1>Hello world</h1>
        </div>
      </Container>
    );
  }
}