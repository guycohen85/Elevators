import { createContext, useState, useContext, useEffect } from 'react';

const floorsFactory = (floorsCount) => {
  const floors = [];

  for (let i = 0; i < floorsCount; i++) {
    floors.push({ buttonState: 'Call', timeReach: '', elevators: [] }); // maybe we don't need the elevators
  }

  return floors;
};

const elevatorsFactory = (elevatorsCount) => {
  const elevators = [];

  for (let i = 0; i < elevatorsCount; i++) {
    elevators.push({ id: i, currentFloor: 0, destinationFloor: 0, occupied: false }); // maybe we don't need the elevators
  }

  return elevators;
};

const ElevatorSystemContext = createContext(null);

function useElevatorSystem() {
  return useContext(ElevatorSystemContext);
}

function ElevatorSystemProvider({ children, floorsCount, elevatorsCount }) {
  const [floors, setFloors] = useState(() => floorsFactory(floorsCount));
  const [elevators, setElevators] = useState(() => elevatorsFactory(elevatorsCount));
  const [queue, setQueue] = useState([]);

  return (
    <ElevatorSystemContext.Provider
      value={{ floors, setFloors, elevators, setElevators, queue, setQueue }}
    >
      {children}
    </ElevatorSystemContext.Provider>
  );
}

export { ElevatorSystemProvider, useElevatorSystem };
