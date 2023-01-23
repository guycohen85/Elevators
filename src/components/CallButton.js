import styled from '@emotion/styled';
import { useElevatorSystem } from '../context/ElevatorSystemProvider';

const isElevatorInCurrentFloor = (elevators, floorNumber) => {
  return elevators.find((elevator) => elevator.currentFloor === floorNumber && !elevator.occupied);
};

function Button({ className, floorNumber }) {
  const { elevators, setElevators, floors, setFloors, setQueue } = useElevatorSystem();
  const currentFloor = floors[floorNumber];

  const handleClick = () => {
    if (currentFloor.buttonState === 'Call' && !isElevatorInCurrentFloor(elevators, floorNumber)) {
      // Floor waiting...
      setFloors((prevFloors) => {
        const floors = [...prevFloors];
        floors[floorNumber] = { ...floors[floorNumber], buttonState: 'Waiting' };
        return floors;
      });

      // Try to get the nearest elevator
      let nearestElevator;
      for (const elevator of elevators) {
        if (!elevator.occupied) {
          const currentDistance =
            nearestElevator && Math.abs(floorNumber - nearestElevator.currentFloor);
          const newDistance = Math.abs(floorNumber - elevator.currentFloor);
          nearestElevator =
            currentDistance && currentDistance < newDistance ? nearestElevator : elevator;
        }
      }

      if (nearestElevator) {
        // Send elevator to floor
        setElevators((prevElevators) => {
          const elevators = [...prevElevators];
          elevators[nearestElevator.id] = {
            ...elevators[nearestElevator.id],
            destinationFloor: floorNumber,
          };
          return elevators;
        });
      } else {
        // Add floor to queue
        setQueue((prevQueue) => [floorNumber, ...prevQueue]);
      }
    }
  };

  return (
    <button className={`${className} ${currentFloor.buttonState}`} onClick={handleClick}>
      {currentFloor.buttonState}
    </button>
  );
}

const CallButton = styled(Button)`
  min-width: 90px;
  border-radius: 3px;
  padding: 6px 20px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #fff;
  background: var(--green);
  border: 1px solid var(--green);
  &.Waiting {
    color: #fff;
    background: var(--red);
    border: 1px solid var(--red);
  }
  &.Arrived {
    color: var(--green);
    background: #eee;
    border: 1px solid var(--green);
    box-shadow: none;
  }
`;

export default CallButton;
