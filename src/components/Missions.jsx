import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends Component {
  render() {
    return (
      <section className='body'>
          <section>
            <Title headline="Missões" />
          </section>

        <div data-testid="missions" className='missions'>
          <section className='missions-cards'>
            {missions.map((mission, index) => (<MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
          </section>
        </div>
      </section>
    );
  }
}

export default Missions;
