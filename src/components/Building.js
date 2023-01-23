import React from 'react';
import { Row } from './Styled';
import LabelFloors from './LabelFloors';
import ElevatorFloors from './ElevatorFloors';
import ButtonFloors from './ButtonFloors';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';
import Elevator from './Elevator';

function Building() {
  const { elevators } = useElevatorSystem();

  return (
    <Row>
      <LabelFloors />
      <Row>
        {elevators.map((elevator, index) => (
          <ElevatorFloors key={index}>
            <Elevator index={index} />
          </ElevatorFloors>
        ))}
      </Row>
      <ButtonFloors />
    </Row>
  );
}

export default Building;
