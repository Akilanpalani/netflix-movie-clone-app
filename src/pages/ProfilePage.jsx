import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserDetails, logout } from '../redux/userSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  const exractNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    return atIndex !== -1 ? email.substring(0, atIndex) : email;
  };

  const userName = exractNameFromEmail(userDetails?.email);

  return (
    <>
      <div className='absolute w-full h-[200px] sm:h-[300px] md:h-[300px] top-[20%] text-center p-4 md:p-8'>
        <div className='mx-auto rounded-lg bg-white bg-opacity-[0.7] text-black md:w-[500px] p-8'>
          <div>
            <h1 className='text-2xl md:text-5xl font-bold'>Profile</h1>
            <h1 className='text-xl md:text-2xl font-bold'>
              Welcome,{' '}
              <span className='text-red-600 uppercase'>{userName}</span>
            </h1>
            <p className='text-lg'>
              Your Email :{' '}
              <span className='text-red-600'>{userDetails?.email}</span>
            </p>
            <p className='text-lg'>
              You have selected a plan of{' '}
              <span className='text-red-600 uppercase'>
                {userDetails?.selectedPlan}
              </span>{' '}
              quality
            </p>
            <p className='text-lg'>
              You have selected a plan of{' '}
              <span className='text-red-600 uppercase'>
                {userDetails?.paymentMethod}
              </span>{' '}
              quality
            </p>
            <button
              className='border bg-gray-300 text-black border-gray-300 hover:bg-red-600 hover:text-white py-2 px-5'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
