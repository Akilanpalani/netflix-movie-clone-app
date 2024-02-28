import React from 'react';

import banner from '../assets/images/movie-banner.jpg';
import SignInForm from './forms/SignInForm';

const SignIn = () => {
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full'>
        <div className='absolute w-full sm:h-[900px] bg-gradient-to-r from-black'></div>
        <div className='w-full h-[400px] sm:h-[900px]'>
          <img
            src={banner}
            alt='Netflix Logo'
            border='0'
            className='w-full h-[960px] sm:h-full object-cover'
          />
        </div>
      </div>
      <div className='absolute w-full h-[200px] sm:h-[300px] md:h-[300px] top-[20%] text-center p-4 md:p-8'>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
