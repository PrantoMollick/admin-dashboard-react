import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFac1pJW3xKfkx0RWFbb19wflVHal9QVAciSV9jS3xTc0ZiWH9ec3RUQmhcVA==');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);

