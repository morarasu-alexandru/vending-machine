import React, { createContext } from 'react';
import { toast } from 'react-toastify';

const showSuccessNotification = (message: string) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

const showInfoNotification = (message: string) => {
  toast.info(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

const showWarning = (message: string) => {
  toast.warn(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

const value: {
  showSuccessNotification: (message: string) => void;
  showInfoNotification: (message: string) => void;
  showWarning: (message: string) => void;
} = {
  showSuccessNotification,
  showInfoNotification,
  showWarning
};

export const NotificationContext = createContext(value);

export const NotificationContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const { children } = props;

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
