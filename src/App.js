import Building from './components/Building';
import { ElevatorSystemProvider } from './context/ElevatorSystemProvider';

function App() {
  return (
    <div className="App">
      <ElevatorSystemProvider floorsCount={10} elevatorsCount={5}>
        <Building />
      </ElevatorSystemProvider>
    </div>
  );
}

export default App;
