import axios from 'axios';
import AtmanContainer from './AtmanContainer';

async function startAtmanProcess(values) {
  await axios.put('/start-atman', values);
}

async function stopAtmanProcess() {
  await axios.put('/stop-atman');
}

function AtmanContainerEnhanced(props) {
  return <AtmanContainer onStart={startAtmanProcess} onStop={stopAtmanProcess} {...props} />;
}

export default AtmanContainerEnhanced;
