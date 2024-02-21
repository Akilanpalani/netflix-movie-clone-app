import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-3xl text-red-600 uppercase font-bold'>
          Netflix-Movies
        </h1>
      </Link>
      <div className='flex gap-5'>
        <Link to='/'>
          <button className='bg-red-600 text-white px-4 py-2 rounded'>
            Sign Up
          </button>
        </Link>
        <Link to='/signin'>
          <button className='bg-red-600 text-white px-4 py-2 rounded'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
