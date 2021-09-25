import axios from 'axios';
import AtmanContainer from './AtmanContainer';

async function startAtmanProcess(values) {
  try {
    await axios.put('/save-atman-config', values, {
      timeout: 5000,
    });
    alert('Successfully saved atman process configuration.')
  } catch (e) {
    alert(JSON.stringify(e.response));
  }
}

function AtmanContainerEnhanced(props) {
  return <AtmanContainer onStart={startAtmanProcess} {...props} />;
}

export default AtmanContainerEnhanced;
