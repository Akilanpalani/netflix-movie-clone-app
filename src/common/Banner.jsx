import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='p-9 flex justify-between gap-6'>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
        </div>
        <div className='w-[500px] p-4'>
          <img src='https://placeholder.com/600x400' alt='Netflix Logo' />
        </div>
      </div>
      <hr className='h-2 bg-white' />
      <div className='p-9 flex justify-between gap-6'>
        <div className='w-[500px] p-4'>
          <img src='https://placeholder.com/600x400' alt='Netflix Logo' />
        </div>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
        </div>
      </div>
      <hr className='h-2 bg-white' />
      <div className='p-9 flex justify-between gap-6'>
        <div className='text-white max-w-[500px] flex justify-center items-center'>
          <h1 className='text-sm sm:text-xl md:text-2xl font-bold'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
        </div>
        <div className='w-[500px] p-4'>
          <img src='https://placeholder.com/600x400' alt='Netflix Logo' />
        </div>
      </div>
      <hr className='h-2 bg-white' />
      {/* Footer Banner */}
      <div className='p-[150px] sm:invisible md:visible'>
        <h1 className='text-white font-bold text-2xl md:text-2xl mb-3'>
          Netflix India
        </h1>
        <div className='flex justify-between'>
          <div className='text-gray-500 max-w-[500px] underline'>
            <ul className='type-none'>
              <li>Faq</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline'>
            <ul className='type-none'>
              <li>Help Center</li>
              <li>Job Center</li>
              <li>Cookie Preferences</li>
              <li>Legal Noitce</li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline'>
            <ul className='type-none'>
              <li>Accounts</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div className='text-gray-500 max-w-[500px] underline'>
            <ul className='type-none'>
              <li>Media Center</li>
              <li>Terms Of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
