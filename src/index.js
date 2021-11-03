import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormProvider } from './Contexts/formContext';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

