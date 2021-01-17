import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

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
