import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Store'

// Provider包住顶层的TodoApp模块，使得store可以被所有组件访问到
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
