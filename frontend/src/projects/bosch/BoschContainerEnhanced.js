import axios from 'axios';
import BoschContainer from './BoschContainer';

async function startBoschProcess(values) {
  try {
    await axios.put('/start-bosch', values, {
      timeout: 5000,
    });
    alert('Successfully started bosch process.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

async function stopBoschProcess() {
  try {
    await axios.put('/stop-bosch', {}, { timeout: 5000 });
    alert('Successfully stopped bosch process.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

function BoschContainerEnhanced(props) {
  return <BoschContainer onStart={startBoschProcess} onStop={stopBoschProcess} {...props} />;
}

export default BoschContainerEnhanced;
