import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthenticated } from '../redux/userSlice';

const Navbar = () => {
  const isAuthenticated = useSelector(selectAuthenticated);
  const location = useLocation();
  return (
    <div className='flex justify-between items-center p-2 md:p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <div className='flex items-center'>
          <h1 className='md:text-3xl text-red-600 uppercase font-bold'>
            Netflix-Movies
          </h1>
        </div>
      </Link>
      <div className='flex gap-5'>
        {isAuthenticated && location.pathname === '/home-page' ? (
          <div className='flex items-center'>
            {/* Render profile image or other user information */}
            <img
              src='https://placeholder.com/600x400'
              alt='Profile'
              className='rounded-full h-8 w-8'
            />
          </div>
        ) : location.pathname === '/' ? (
          <Link to='/signin'>
            <button className='bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded'>
              Sign In
            </button>
          </Link>
        ) : location.pathname === '/signin' ? (
          <Link to='/'>
            <button className='bg-transparent border border-white text-white px-2 py-1 md:px-4 md:py-2 rounded'>
              Sign Up
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
