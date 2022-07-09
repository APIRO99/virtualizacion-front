import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './index.css'
import 'reactjs-popup/dist/index.css';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Auth from './components/Auth/Auth'

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth>
      <App />
    </Auth>
  </React.StrictMode>
);
