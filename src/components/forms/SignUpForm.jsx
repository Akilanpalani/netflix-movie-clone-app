import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { setUserDetails } from '../../redux/userSlice';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data) => {
      dispatch(setUserDetails(data));
      navigate('/signup', {
        state: { email: data.email },
      }); // sending the email to store in db
    },
    [dispatch, navigate]
  );
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='sm:my-4 w-[100%]'>
          <input
            type='email'
            placeholder='Email Address'
            className='p-2 sm:p-3 opacity-[0.7] bg-black outline-none'
            {...register('email', {
              required: 'Enter a valid email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && (
            <span className='text-red-600 flex flex-row justify-center'>
              {errors.email.message}
            </span>
          )}
          <button
            type='submit'
            className={`mt-2 sm:mt-0 p-2 sm:p-3 bg-red-600 rounded-sm ml-4 hover:cursor-pointer ${
              errors.email ? 'opacity-50' : 'cursor-auto'
            }`}
            disabled={!!errors.email}
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
