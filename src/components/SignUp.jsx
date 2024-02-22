import React from 'react';
import Form from './forms/Form';

const SignUp = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-full sm:h-[5px]'>
        <div>
          <h1 className='sm:text-lg md:text-6xl font-bold'>
            Unlimited movies, TV shows and more
          </h1>
          <p className='sm:my-4 text-sm md:text-2xl'>
            Watch anywhere. Cancel anytime
          </p>
          <h3 className='text-sm sm:text-lg md:text-xl'>
            Ready to watch? Enter your email to watch a latest movies.
          </h3>
        </div>
        <div className='sm:my-4'>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
