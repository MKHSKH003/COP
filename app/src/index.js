import 'bootstrap/dist/css/bootstrap.css';
import '@patternfly/react-core/dist/styles/base.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './root/routes';
import { register } from './serviceWorker';

ReactDOM.render(
 <div>
  <Routes />
  <ToastContainer />
 </div>,
 document.getElementById('root')
);
register();