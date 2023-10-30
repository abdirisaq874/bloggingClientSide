'use client';
import React from 'react';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { useLoginUserMutation } from '../../store';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const SignInModal = ({ showModel, setshowModel, Text }) => {
  const router = useRouter();
  const [LoginUser, status] = useLoginUserMutation();

  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { id: name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    // For a simple email format validation, you can use regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password, errors) => {
    // 1st character must be at least 8 characters long
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      return;
    }
    // 2nd character must contain at least one lowercase letter
    if (!password.match(/[a-z]/)) {
      errors.password = 'Password must contain at least one lowercase letter';
      return;
    }
    // 3rd character must contain at least one uppercase letter
    if (!password.match(/[A-Z]/)) {
      errors.password = 'Password must contain at least one uppercase letter';
      return;
    }

    // 4th character must contain at least one numeric digit
    if (!password.match(/[0-9]/)) {
      errors.password = 'Password must contain at least one numeric digit';
      return;
    }

    // 5th character must contain at least one special character.
    if (!password.match(/[!@#$%^&*]/)) {
      errors.password = 'Password must contain at least one special character';
      return;
    }
    // If the password is valid, set the errors object to empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else {
      isValidPassword(formData.password, errors);
    }
    // If there are validation errors, set them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      // setFormData({
      //   email: '',
      //   password: '',
      // });
      // Submit the form data
      // You can add your API call or other submission logic here

      LoginUser({ formData, router });
    }
  };

  return (
    <Modal
      show={showModel}
      size={'md'}
      position={'center'}
      popup
      dismissible
      onClose={() => setshowModel(false)}
    >
      <Modal.Header className="border-b">
        <p className="m-2 text-lg font-normal text-gray-500 dark:text-gray-400">
          {Text}
        </p>
      </Modal.Header>

      <Modal.Body className="">
        <div className="text-center">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
          >
            <svg
              className="w-4 h-auto"
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Sign in with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            Or
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                    placeholder="
                  Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {validationErrors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {validationErrors.email}
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <Link
                    href="/Auth/Forgot-password"
                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {validationErrors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {validationErrors.password}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-4 w-full mt-4">
              {status.isLoading ? (
                <button className="btn btn-primary min-h-9 h-10 " disabled>
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Signing in...</span>
                  </div>
                </button>
              ) : (
                <button className="btn btn-primary min-h-9 h-10" type="submit">
                  Sign in
                </button>
              )}
              <button
                className="btn btn-outline min-h-9 h-10"
                onClick={() => setshowModel(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-t">
        <div className="flex justify-center gap-4 w-full">
          <p className="text-sm text-gray-400">
            Don't have an account yet?
            <Link
              href="/Auth/Register"
              className="text-blue-600 decoration-2 hover:underline font-medium"
            >
              {' '}
              Register here
            </Link>
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
