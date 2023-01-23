import React from 'react';
import VerticalFloors from './VerticalFloors';
import { FloorBox } from './Styled';
import getOrdinal from '../utils/ordinal-number';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';

function LabelFloors() {
  const { floors } = useElevatorSystem();

  return (
    <>
      <VerticalFloors>
        {floors.map((floor, index) => (
          <FloorBox key={index} justify="flex-end">
            {getOrdinal(index)}
          </FloorBox>
        ))}
      </VerticalFloors>
    </>
  );
}

export default LabelFloors;
