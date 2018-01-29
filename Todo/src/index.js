import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './components/controlPanel';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
