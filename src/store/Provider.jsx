'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '.';

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {/* <ToastContainer position="top-center" /> */}
      {children}
    </Provider>
  );
};

export default ReduxProvider;
