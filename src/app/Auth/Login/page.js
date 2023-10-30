import React from 'react';
import Login from './Login';
import { cookies } from 'next/headers';
import axios from 'axios';
import { redirect } from 'next/navigation';

const FechtCurrentUser = async () => {
  try {
    const currentUser = await axios.get(
      'http://localhost:4000/api/v1/users/showMe',
      {
        headers: { Cookie: cookies().toString() },
      }
    );
    return currentUser.data;
  } catch (error) {
    console.log(error);
  }
};

const Page = async () => {
  const currentUser = await FechtCurrentUser();

  return currentUser ? redirect('/') : <Login />;
};

export default Page;
