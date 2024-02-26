import React from 'react';

import banner from '../assets/images/movie-banner.jpg';
import SignUp from './SignUp';
import Banner from '../common/Banner';

const Main = () => {
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full'>
        <div className='absolute w-full sm:h-[480px] md:h-[550px] lg:h-[800px] first-letter: bg-gradient-to-r from-black'></div>
        <div className='w-full h-[400px] sm:h-full'>
          <img
            src={banner}
            alt='Netflix Logo'
            border='0'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='absolute w-full top-[20%] sm:top-[30%] text-center p-4 md:p-8'>
        <SignUp />
      </div>
      <hr className='h-2 bg-white' />
      <Banner />
    </div>
  );
};

export default Main;
