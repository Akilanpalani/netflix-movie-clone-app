import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
        {location.pathname !== '/signin' && (
          <>
            <Link to='/'>
              <button className='bg-transparent border border-white text-white px-2 py-1 md:px-4 md:py-2 rounded'>
                language
              </button>
            </Link>
            <Link to='/signin'>
              <button className='bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded'>
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
