import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div>
      <div>
        <h1 className='text-6xl font-bold'>
          Unlimited movies, TV shows and more
        </h1>
        <p className='my-4 text-2xl'>Watch anywhere. Cancel anytime</p>
        <div className='my-4'>
          <form>
            <h3 className='text-xl'>
              Ready to watch? Enter your email to watch a latest movies.
            </h3>
            <div className='my-4 w-[100%]'>
              <input
                type='email'
                placeholder='Email Address'
                className='p-3 opacity-[0.7] bg-black outline-none'
              />
              <Link to='/home-page'>
                <button className='p-3 bg-red-600 rounded-sm ml-4'>
                  Get Started
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
