import axios from 'axios';
import AtmanContainer from './AtmanContainer';

async function startAtmanProcess(values) {
  try {
    await axios.put('/start-atman', values, {
      timeout: 5000,
    });
    alert('Successfully started atman process.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

async function stopAtmanProcess() {
  try {
    await axios.put('/stop-atman', {}, { timeout: 5000 });
    alert('Successfully stopped atman process.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

function AtmanContainerEnhanced(props) {
  return <AtmanContainer onStart={startAtmanProcess} onStop={stopAtmanProcess} {...props} />;
}

export default AtmanContainerEnhanced;
