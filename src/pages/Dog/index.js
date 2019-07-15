import React, { Component } from 'react';

export default class Dog extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      breed: props.location.state.breed,
    }
  }

  render() {
    return (
      <div>
        dog
      </div>
    )
  }

}