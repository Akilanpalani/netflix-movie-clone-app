import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthenticated } from '../redux/userSlice';

const Navbar = () => {
  const boy_profile = require('../assets/images/boy.png');
  const netflix_gif = require('../assets/gif/netflix_logo.gif');
  const isAuthenticated = useSelector(selectAuthenticated);
  const location = useLocation();
  return (
    <div className='flex justify-between items-center p-2 md:p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <div className='flex items-center'>
          {/* <h1 className='md:text-3xl text-red-600 uppercase font-bold'>
            Netflix-Movies
          </h1> */}
          <img
            src={netflix_gif}
            alt='Netflix Logo'
            className='w-[80px] h-[80px]'
          />
        </div>
      </Link>
      <div className='flex gap-5'>
        {isAuthenticated && location.pathname === '/home-page' ? (
          <div className='flex items-center'>
            {/* Render profile image or other user information */}
            <Link to='/profile'>
              <img
                src={boy_profile}
                alt='Profile'
                className='rounded-full h-8 w-8'
              />
            </Link>
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
