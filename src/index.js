import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormProvider } from './Contexts/formContext';
import './i18n';


ReactDOM.render(
  <React.StrictMode>
  
    <FormProvider>
      <App />
    </FormProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

