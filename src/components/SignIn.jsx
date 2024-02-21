import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../assets/images/movie-banner.jpg';

const SignIn = () => {
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full'>
        <div className='absolute w-full h-[760px] bg-gradient-to-r from-black'></div>
        <img
          src={banner}
          alt='Netflix Logo'
          border='0'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute w-full top-[20%] text-center p-4 md:p-8'>
        <div className='max-w-[600px] max-h-[800px] mx-auto rounded-lg bg-black bg-opacity-[0.7] text-white w-[500px] p-8'>
          <h1 className='text-3xl font-bold text-start'>Sign In</h1>
          <form className='p-4'>
            <div className='my-3'>
              <input
                type='email'
                className='p-3 rounded-lg outline-none text-black w-full'
                placeholder='Email'
              />
            </div>
            <div>
              <input
                type='password'
                className='p-3 rounded-lg outline-none text-black w-full'
                placeholder='Password'
              />
            </div>
            <div className='my-3'>
              <Link to='/'>
                <button
                  type='password'
                  className='p-3 rounded-lg outline-none text-white bg-red-600 w-full my-3'
                  placeholder='Password'
                >
                  Sign In
                </button>
              </Link>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <input type='checkbox' checked />
                <label className='ml-2'>Remember Me</label>
              </div>
              <div className='text-red-600'>
                <a href='/'>Need Help?</a>
              </div>
            </div>
          </form>
          <div className='flex flex-col items-start ml-4 mt-16'>
            <div>
              <p>
                New to Netflix?{' '}
                <a href='/' className='text-red-600'>
                  Sign Up Now
                </a>
              </p>
            </div>
            <div className='flex items-start'>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href='/'> Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
