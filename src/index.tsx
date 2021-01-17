import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

// todo: remove reportWebVitals
import reportWebVitals from './reportWebVitals';
import store from './store';
import HomePage from './pages/home';
import { NotificationContextProvider } from './context/notificationContext';

import './style/index.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
ReactDOM.render(
  <Provider store={store}>
    <NotificationContextProvider>
      <HomePage />
    </NotificationContextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
