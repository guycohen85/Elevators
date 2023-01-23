import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';
import ElevatorSvg from './ElevatorSvg.js';
import sound from '../assets/ding.mp3';

function Elevator({ index }) {
  const { elevators, setElevators, setFloors, setQueue } = useElevatorSystem();
  const elevator = elevators[index];

  const [destinationFloorHeight, setDestinationFloorHeight] = useState(0);
  const [animationTime, setAnimationTime] = useState(0);
  const [elevatorColor, setElevatorColor] = useState('var(--black)');
  const [isElevatorStart, setIsElevatorStart] = useState(false);

  const elevatorSound = useRef(null);

  const updateElevator = (elevatorData) => {
    setElevators((prevElevators) => {
      const elevators = [...prevElevators];
      elevators[index] = {
        ...elevators[index],
        ...elevatorData,
      };
      return elevators;
    });
  };

  const isDestinationChanged = () => {
    return elevator.destinationFloor !== elevator.currentFloor;
  };

  useEffect(() => {
    if (isDestinationChanged() && !elevator.occupied) {
      // Move Elevator
      setIsElevatorStart(true);
      setElevatorColor('var(--red)');
      setDestinationFloorHeight(() => elevator.destinationFloor * -60 + 'px');
      setAnimationTime(() => Math.abs(elevator.destinationFloor - elevator.currentFloor));
      updateElevator({ occupied: true });
    }
  }, [elevator, setDestinationFloorHeight, setAnimationTime, setElevatorColor]);

  useEffect(() => {
    if (isElevatorStart) {
      setIsElevatorStart(false);
      setTimeout(() => {
        // Wait until the elevator animation is complete
        updateElevator({ currentFloor: elevators[index].destinationFloor });

        // Notify the floor that the elevator has arrived.
        setFloors((prevFloors) => {
          const floors = [...prevFloors];
          floors[elevator.destinationFloor]['buttonState'] = 'Arrived';
          return floors;
        });
        setElevatorColor('var(--green)');
        elevatorSound.current.play();

        setTimeout(() => {
          // After 2 seconds the elevator available for next call
          setElevatorColor('var(--black)');
          updateElevator({ occupied: false });
          setFloors((prevFloors) => {
            const floors = [...prevFloors];
            floors[elevator.destinationFloor]['buttonState'] = 'Call';
            return floors;
          });

          // if queue is not empty, take the last floor in array
          setQueue((prevQueue) => {
            if (prevQueue.length > 0) {
              console.log(prevQueue);

              const newQueue = [...prevQueue];

              const floor = newQueue.pop();
              updateElevator({ destinationFloor: floor });
              return newQueue;
            }

            return prevQueue;
          });
        }, 2000);
      }, animationTime * 1000);
    }
  }, [isElevatorStart, elevator, animationTime, setElevators, index, setFloors, elevators]);

  return (
    <>
      <ElevatorSvg
        currentFloorCalc={destinationFloorHeight}
        animationTime={animationTime}
        elevatorColor={elevatorColor}
      />
      <audio ref={elevatorSound} src={sound}></audio>
    </>
  );
}

Elevator.propTypes = {
  index: PropTypes.number,
};

export default Elevator;
