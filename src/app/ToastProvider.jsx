'use client';
import 'react-toastify/dist/ReactToastify.css'; //add this line

import { ToastContainer } from 'react-toastify';

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer position="top-center" />
    </>
  );
}
