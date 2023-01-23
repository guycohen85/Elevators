import React from 'react';
import VerticalFloors from './VerticalFloors';
import { FloorBox } from './Styled';
import CallButton from './CallButton';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';

function ButtonFloors() {
  const { floors } = useElevatorSystem();

  return (
    <>
      <VerticalFloors>
        {floors.map((floor, index) => (
          <FloorBox key={index}>
            <CallButton floorNumber={index} />
          </FloorBox>
        ))}
      </VerticalFloors>
    </>
  );
}

export default ButtonFloors;
