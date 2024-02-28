import React from 'react';
// import steps from '../constants/Stepper/StepperDetails';
import Stepper from '../components/stepper/Stepper';

const SignupStepper = () => {
  return (
    <div className='max-w-full mx-auto absolute top-[25%] left-0 right-0'>
      <div className='mx-auto rounded-lg bg-white bg-opacity-[0.7] text-white md:w-[500px] p-8'>
        <Stepper />
      </div>
    </div>
  );
};

export default SignupStepper;
