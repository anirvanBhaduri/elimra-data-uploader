import { BlueButton, RedButton, LogDisplay } from '../../base';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function formValidator(values) {
  const errors = {};
  Object.keys(values).forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  return errors;
}

function FormInput({ field, form, ...props }) {
  return (
    <div className="my-2">
      <label className="block text-white">{props.label}</label>
      <input className="block w-full rounded-sm" {...field} {...props} />
    </div>
  );
}

function FormErrorMessage(message) {
  return (
    <div className="text-red-500 mb-2">{message.children}</div>
  );
}

function theFormItself(onStop, disableStart, disableStop) {
  return function ({ isSubmitting }) {
    return (
      <Form>
        <Field label="Sensor Data File Path: " name="sensorDataFilePath"
               placeholder="Absolute file path to the sensor data file directory"
               component={FormInput}/>
        <ErrorMessage name="sensorDataFilePath" component={FormErrorMessage}/>
        <Field label="Sensor Data Filename: " name="sensorDataFileName"
               placeholder="Name of the file holding sensor data including file extension."
               component={FormInput}/>
        <ErrorMessage name="sensorDataFileName" component={FormErrorMessage}/>
        <Field label="Sample Rate (in seconds): " name="sampleRateInSeconds"
               placeholder="Sample rate of readings in seconds"
               component={FormInput} />
        <ErrorMessage name="sampleRateInSeconds" component={FormErrorMessage}/>
        <Field label="Client ID: " name="clientId"
               placeholder="The Bosch Things OAuth2.0 client ID" component={FormInput}/>
        <ErrorMessage name="clientId" component={FormErrorMessage}/>
        <Field label="Client Secret: " name="clientSecret"
               placeholder="The Bosch Things OAuth2.0 client secret" component={FormInput}/>
        <ErrorMessage name="clientSecret" component={FormErrorMessage}/>
        <Field label="Auth scope: " name="scope"
               placeholder="The Bosch Things OAuth2.0 client scope" component={FormInput}/>
        <ErrorMessage name="scope" component={FormErrorMessage}/>
        <Field label="Things Namespace: " name="namespace"
               placeholder="The Bosch Things namespace" component={FormInput}/>
        <ErrorMessage name="namespace" component={FormErrorMessage}/>
        <Field label="Thing Name: " name="thingName"
               placeholder="The name of the Bosch Things Device" component={FormInput}/>
        <ErrorMessage name="thingName" component={FormErrorMessage}/>
        <Field label="Thing Feature Name: " name="thingFeature"
               placeholder="The name of the Bosch Things feature" component={FormInput}/>
        <ErrorMessage name="thingFeature" component={FormErrorMessage}/>
        <div className="mr-4 inline-block">
          <BlueButton type="submit" name="start" disabled={isSubmitting || disableStart}
                      text="Start"/>
        </div>
        <div className="inline-block">
          <RedButton onClick={onStop} type="button" name="stop"
                     disabled={isSubmitting || disableStop} text="Stop"/>
        </div>
      </Form>
    );
  }
}

function BoschContainer({ onStart, onStop, disableStart, disableStop }) {
  return (
    <div className="container mx-auto px-4 bg-gray-600 text-left rounded-md">
      <p className="text-white text-4xl">Bosch</p>
        <Formik
          initialValues={{
            sensorDataFilePath: '',
            sensorDataFileName: '',
            sampleRateInSeconds: 1,
            clientId: '',
            clientSecret: '',
            scope: '',
            namespace: '',
            thingName: '',
            thingFeature: '',
          }}
          validate={formValidator}
          onSubmit={async (values, { setSubmitting }) => {
            await onStart(values);
            setSubmitting(false);
          }}
        >
          {theFormItself(onStop, disableStart, disableStop)}
        </Formik>
        <div className="mt-4 pb-2">
          <LogDisplay />
        </div>
    </div>
  );
}

export default BoschContainer;
