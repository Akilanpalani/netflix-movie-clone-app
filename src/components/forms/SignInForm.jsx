import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { setUserDetails } from '../../redux/userSlice';
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (data) => {
      console.log('data', data);
      try {
        const response = await fetch(
          'https://netflix-nucleus.netlify.app/api/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            mode: 'cors',
          }
        );
        console.log('data', data);
        console.log(data);
        if (response.status === 200) {
          const userData = await response.json();
          dispatch(setUserDetails(userData.data));
          Swal.fire({
            icon: 'success',
            title: 'Sign In Successful',
            text: 'You have successfully signed in',
          });
          navigate('/home-page');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Sign In Failed',
            text: 'Please check your email and password and try again',
          });
          console.error('Failed to sign in');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Sign In Failed',
          text: 'An unexpected error occurred. Please try again later.',
        });
        console.error('Error:', error);
      }
    },
    [dispatch, navigate]
  );

  return (
    <div className='mx-auto rounded-lg bg-black bg-opacity-[0.7] text-white md:w-[500px] p-8'>
      <h1 className='text-3xl font-bold text-start'>Sign In</h1>
      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='my-3'>
          <input
            type='email'
            className='p-3 rounded-lg outline-none text-black w-full'
            placeholder='Email'
            {...register('email', {
              required: 'Enter a valid email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && (
            <span className='text-red-600'>{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type='password'
            className='p-3 rounded-lg outline-none text-black w-full'
            placeholder='Password'
            {...register('password', {
              required: 'Enter a valid password',
            })}
          />
          {errors.password && (
            <span className='text-red-600'>{errors.password.message}</span>
          )}
        </div>
        <div className='my-3'>
          <button
            type='submit'
            placeholder='Password'
            className={`p-3 rounded-lg outline-none text-white bg-red-600 w-full my-3 hover:cursor-pointer ${
              errors.email || errors.password ? 'opacity-50' : 'cursor-auto'
            }`}
            disabled={errors.email || errors.password}
          >
            Sign In
          </button>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <input type='checkbox' onChange={() => {}} checked />
            <label className='ml-2'>Remember Me</label>
          </div>
          <div className='text-red-600'>
            <a href='/'>Need Help?</a>
          </div>
        </div>
      </form>
      <div className='flex flex-col items-start ml-4 mt-16'>
        <div className='flex items-start'>
          <p>
            New to Netflix?{' '}
            <a href='/' className='text-red-600 hover:text-white underline'>
              Sign Up Now
            </a>
          </p>
        </div>
        <div className='flex items-start'>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href='/' className='text-blue-600 hover:text-white underline'>
              {' '}
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
