import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// todo: remove reportWebVitals
import reportWebVitals from './reportWebVitals';
import store from './store';
import HomePage from './pages/home';

import './style/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
