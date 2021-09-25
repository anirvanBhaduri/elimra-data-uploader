import axios from 'axios';
import BoschContainer from './BoschContainer';

async function startBoschProcess(values) {
  try {
    await axios.put('/save-bosch-config', values, {
      timeout: 5000,
    });
    alert('Successfully saved bosch process configuration.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

function BoschContainerEnhanced(props) {
  return <BoschContainer onStart={startBoschProcess} {...props} />;
}

export default BoschContainerEnhanced;
