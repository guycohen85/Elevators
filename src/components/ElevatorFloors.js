import React from 'react';
import PropTypes from 'prop-types';
import VerticalFloors from './VerticalFloors';
import { FloorBox } from './Styled';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';

function ElevatorFloors({ children }) {
  const { floors } = useElevatorSystem();

  return (
    <>
      <VerticalFloors>
        {floors.map((floor, index) => (
          <FloorBox key={index} className="elevator-floor"></FloorBox>
        ))}
        {children}
      </VerticalFloors>
    </>
  );
}

ElevatorFloors.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ElevatorFloors;
