import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map((planet, index) => (<PlanetCard
          key={ index }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>

    );
  }
}

export default SolarSystem;
