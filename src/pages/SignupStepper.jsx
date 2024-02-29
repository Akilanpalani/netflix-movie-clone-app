import React from 'react';
import Stepper from '../components/stepper/Stepper';

const SignupStepper = () => {
  return (
    <div className='max-w-full mx-auto absolute top-[20%] left-0 right-0'>
      <div className='mx-auto rounded-lg bg-white bg-opacity-[0.7] text-white w-[350px] sm:w-[500px] md:w-[600px] p-8'>
        <Stepper />
      </div>
    </div>
  );
};

export default SignupStepper;
