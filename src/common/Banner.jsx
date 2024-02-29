import React from 'react';

const Banner = () => {
  const netflix_gif1 = require('../assets/gif/netflix_gif1.gif');
  const netflix_gif2 = require('../assets/gif/netflix_gif2.jpeg');
  const netflix_gif3 = require('../assets/gif/netflix_gif3.gif');
  const netflix_gif4 = require('../assets/gif/netflix_gif4.jpeg');
  return (
    <>
      <div className='p-9 flex justify-between gap-6'>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            <span className='text-red-600 font-semibold'>
              Enjoy on netflix,
            </span>
            <br />
            The best streaming platform, now with best UI design
          </h1>
        </div>
        <div className='w-[500px] p-4'>
          <img src={netflix_gif1} alt='Netflix Logo' />
        </div>
      </div>
      <hr className='h-2 bg-white' />
      <div className='p-9 flex justify-between gap-6'>
        <div className='w-[500px] p-4'>
          <img src={netflix_gif2} alt='Netflix Logo' />
        </div>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            <span className='text-red-600 font-semibold'>Enjoy on your Tv</span>
            <br />
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more
          </h1>
        </div>
      </div>
      <hr className='h-2 bg-white' />
      <div className='p-9 flex justify-between gap-6'>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            <span className='text-red-600 font-semibold'>
              Download your shows to watch offline
            </span>
            <br />
            Save your favourites easily and always have something to watch
          </h1>
        </div>
        <div className='w-[500px] p-4'>
          <img src={netflix_gif3} alt='Netflix Logo' />
        </div>
      </div>
      <hr className='h-2 bg-white' />
      <div className='p-9 flex justify-between gap-6'>
        <div className='w-[500px] p-4'>
          <img src={netflix_gif4} alt='Netflix Logo' />
        </div>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            <span className='text-red-600 font-semibold'>Watch everywhere</span>
            <br />
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h1>
        </div>
      </div>
      <hr className='h-2 bg-white' />

      {/* Footer Banner */}
      <div className='md:p-[150px] p-[20px]'>
        <h1 className='text-white font-bold text-sm sm:text-2xl md:text-3xl mb-3'>
          Netflix India
        </h1>
        <div className='flex justify-between'>
          <div className='text-gray-500 max-w-[500px] underline text-sm md:text-xl'>
            <ul className='type-none'>
              <li className='hover:cursor-pointer hover:text-red-600'>Faq</li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Investor Relations
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Privacy
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Speed Test
              </li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline text-sm md:text-xl'>
            <ul className='type-none'>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Help Center
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Job Center
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Cookie Preferences
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Legal Noitce
              </li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline text-sm md:text-xl'>
            <ul className='type-none'>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Accounts
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Ways to Watch
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Corporate Information
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Only on Netflix
              </li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline text-sm md:text-xl'>
            <ul className='type-none'>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Media Center
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Terms Of Use
              </li>
              <li className='hover:cursor-pointer hover:text-red-600'>
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
