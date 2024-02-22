import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div>
      <form>
        <div className='sm:my-4 w-[100%]'>
          <input
            type='email'
            placeholder='Email Address'
            className='sm:p-3 opacity-[0.7] bg-black outline-none'
          />
          <Link to='/home-page'>
            <button className='sm:p-3 bg-red-600 rounded-sm ml-4'>
              Get Started
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
