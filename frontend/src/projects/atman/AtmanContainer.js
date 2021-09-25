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
        <Field label="Data Logger ID: " name="dataLoggerId"
               placeholder="The Atman Data Logger ID" component={FormInput}/>
        <ErrorMessage name="dataLoggerId" component={FormErrorMessage}/>
        <Field label="Data Logger Token: " name="dataLoggerToken"
               placeholder="The Atman Data Logger Token" component={FormInput}/>
        <ErrorMessage name="dataLoggerToken" component={FormErrorMessage}/>
        <div className="mr-4 inline-block">
          <BlueButton type="submit" name="start" disabled={isSubmitting || disableStart}
                      text="Save Config"/>
        </div>
      </Form>
    );
  }
}

function AtmanContainer({ onStart, onStop, disableStart, disableStop }) {
  return (
    <div className="container mx-auto px-4 bg-gray-600 text-left rounded-md">
      <p className="text-white text-4xl">Atman</p>
        <Formik
          initialValues={{
            sensorDataFilePath: '',
            sensorDataFileName: '',
            sampleRateInSeconds: 1,
            dataLoggerId: '',
            dataLoggerToken: '',
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
        </div>
    </div>
  );
}

export default AtmanContainer;
