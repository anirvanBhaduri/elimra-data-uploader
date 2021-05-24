import { BlueButton, RedButton, LogDisplay } from '../../base';

function BoschContainer(props) {
  return (
    <div className="container mx-auto px-4 bg-gray-600 text-left">
        <p className="text-white text-4xl">Bosch</p>
        <p>Form goes here</p>
        <div className="mr-4 inline-block">
          <BlueButton text="Start" />
        </div>
        <div className="inline-block">
          <RedButton text="Stop" />
        </div>
        <LogDisplay />
    </div>
  );
}

export default BoschContainer;