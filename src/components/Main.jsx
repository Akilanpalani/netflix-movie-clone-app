import React from 'react';

import banner from '../assets/images/movie-banner.jpg';
import SignUp from './SignUp';

const Main = () => {
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
        <SignUp />
      </div>
      <hr className='h-2 bg-white' />
      <div className='max-w-[600px] mx-auto p-9'>
        <h1 className='text-6xl font-bold'>
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <img
          // src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
          alt='Netflix Logo'
        />
      </div>
    </div>
  );
};

export default Main;
