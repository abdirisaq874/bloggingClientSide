import React from 'react';
import axios from 'axios';

export const metadata = {
  title: 'Verify Email',
  description: 'Verify Email',
};

const FetchVerifyEmail = async (verificationToken, email) => {
  try {
    const data = await axios.post(
      'https://bloggingbackend.azurewebsites.net/api/v1/auth/verify-email',
      { verificationToken, email }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

const page = async ({ searchParams }) => {
  const { token, email } = searchParams;
  const { data } = await FetchVerifyEmail(token, email);
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default page;
