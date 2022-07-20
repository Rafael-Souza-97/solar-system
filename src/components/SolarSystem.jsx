import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
      </div>
    );
  }
}

export default SolarSystem;
