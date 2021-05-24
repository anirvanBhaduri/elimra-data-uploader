import logo from './logo.svg';
import './App.css';
import { AtmanContainer, BoschContainer } from './projects';

function App() {
  return (
    <div className="App">
      <div className="mb-4">
        <AtmanContainer />
      </div>
      <BoschContainer />
    </div>
  );
}

export default App;
