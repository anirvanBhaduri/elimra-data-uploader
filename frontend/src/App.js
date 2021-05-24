import './App.css';
import { AtmanContainer, BoschContainer } from './projects';

function App() {
  return (
    <div className="App">
      <div className="mb-4">
        <AtmanContainer onStart={() => console.log('start')} onStop={() => console.log('stop')} />
      </div>
      <BoschContainer />
    </div>
  );
}

export default App;
