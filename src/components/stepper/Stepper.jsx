import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';

const Stepper = () => {
  const apiUrl =
    process.env.REACT_APP_SIGN_UP_API_URL ||
    'http://localhost:5000/api/users/register';

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email; // get the email from the previous page

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ criteriaMode: 'all' });

  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    password: '',
    selectedPlan: '',
    paymentMethod: '',
    cardPayment: '',
    upiPayment: '',
  });
  const [planForm, setPlanForm] = useState({
    selectedPlan: '',
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (activeStep === 2 && planForm.selectedPlan === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select a plan',
        });
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'paymentMethod') {
      setFormData((prevData) => ({
        ...prevData,
        paymentMethod: value,
      }));
      Swal.fire({
        icon: 'success',
        title: 'Payment Method Selected',
        text: 'You have successfully selected payment method',
      });
      setSelectedPaymentMethod(value);
    } else if (name === 'password') {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    }
  };

  const onSubmit = async () => {
    try {
      const dataToSend = {
        ...formData,
        selectedPlan: planForm.selectedPlan,
        email,
      };

      const resposne = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (resposne.status === 201) {
        console.log('Data Sent Successful', dataToSend);
        navigate('/home-page');
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          text: 'You have successfully signed up',
        });
      } else {
        const errorData = await resposne.json();
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: errorData || 'Please enter a valid details',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong',
      });
    }
  };

  // Stepper Content
  const renderStepperContent = () => {
    const totalSteps = 4;
    switch (activeStep) {
      case 1:
        return (
          <div className='text-black'>
            <p className='text-md mb-0'>
              Step {activeStep} of {totalSteps}
            </p>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <div className='text-start'>
              <h2>Create a password to start your membership</h2>
              <h2>
                Just few more steps and you are done. We hate paperwork, too.
              </h2>
            </div>
            {/* Password input and other relevant UI */}
            <form
              className='p-3 text-start'
              onSubmit={handleSubmit(handleNext)}
            >
              <p className='text-lg text-black font-medium'>{email}</p>
              <div className='my-3 flex flex-col'>
                <label className='text-lg font-semibold'>Password</label>
                <Controller
                  className='p-2 sm:p-3 opacity-[0.7] bg-white outline-none'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <div>
                      <input
                        type='password'
                        className='p-2 sm:p-3 opacity-[0.7] bg-white outline-none'
                        onChange={(e) => {
                          field.onChange(e);
                          handleChange('password', e.target.value);
                        }}
                        required
                      />
                      {errors.password && (
                        <p className='text-red-500'>
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  )}
                  rules={{
                    required: 'Enter a valid password',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long',
                    },
                  }}
                />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <p className='text-md mb-0'>
              Step {activeStep} of {totalSteps}
            </p>
            <h1 className='text-3xl font-bold'>Choose Your Plan</h1>
            <div className='my-3 flex flex-col sm:flex-row items-center gap-5 text-white text-center'>
              {/* Card 1 */}
              <div
                className={`rounded bg-black h-[200px] w-[250px] p-5 hover:drop-shadow-2xl hover:cursor-pointer ${
                  planForm.selectedPlan === 'premium'
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500'
                    : ''
                }`}
                onClick={() => {
                  setPlanForm((prevForm) => ({
                    ...prevForm,
                    selectedPlan: 'premium',
                  }));
                }}
              >
                <div className='flex flex-col'>
                  <div className='text-sm rounded-sm p-2 bg-gradient-to-r from-pink-500 to-violet-500 mb-5'>
                    <p>Premium</p>
                    <p>4k+ HDR</p>
                  </div>
                  <p>₹649</p>
                  <p>2 months</p>
                  <p>Excellent</p>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className={`rounded bg-black h-[200px] w-[250px] p-5 hover:drop-shadow-2xl hover:cursor-pointer ${
                  planForm.selectedPlan === 'standard'
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500'
                    : ''
                }`}
                onClick={() => {
                  setPlanForm((prevForm) => ({
                    ...prevForm,
                    selectedPlan: 'standard',
                  }));
                }}
              >
                <div className='flex flex-col'>
                  <div className='text-sm rounded-sm p-2 bg-gradient-to-r from-pink-500 to-violet-500 mb-5'>
                    <p>Standard</p>
                    <p>1080p</p>
                  </div>
                  <p>₹249</p>
                  <p>2 months</p>
                  <p>Best</p>
                </div>
              </div>
            </div>
            {errors.selectedPlan && (
              <p className='text-red-500'>{errors.selectedPlan.message}</p>
            )}
          </div>
        );
      case 3:
        return (
          <div className='mb-5'>
            <p className='text-md mb-0'>
              Step {activeStep} of {totalSteps}
            </p>
            <h1 className='text-3xl font-bold mb-3'>Payment</h1>
            {/* Payment method selection and other relevant UI */}
            <div className='flex justify-center'>
              <button
                onClick={() => handleChange('paymentMethod', 'Card')}
                className={`bg-transparent border border-white text-black px-5 py-2 ${
                  selectedPaymentMethod === 'Card' ? 'bg-green-600' : ''
                }`}
              >
                Card
              </button>
              <button
                onClick={() => handleChange('paymentMethod', 'UPI')}
                className={`bg-transparent border border-white text-black px-5 py-2 ml-5 ${
                  selectedPaymentMethod === 'UPI' ? 'bg-green-600' : ''
                }`}
              >
                UPI
              </button>
              {errors.paymentMethod && (
                <p className='text-red-500'>{errors.paymentMethod.message}</p>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <p className='text-md mb-0'>
              Step {activeStep} of {totalSteps}
            </p>
            <h2 className='text-3xl font-bold mb-3'>
              Enter {formData.paymentMethod} Number
            </h2>
            {/* Display information based on the selected payment method */}
            <form className='p-3 text-start'>
              <div className='my-3 flex flex-col'>
                {formData.paymentMethod === 'Card' && (
                  <input
                    type='text'
                    placeholder='Card Payment'
                    value={formData.cardPayment}
                    onChange={(e) =>
                      handleChange('cardPayment', e.target.value)
                    }
                    name='cardPayment'
                    className='p-2 sm:p-3 opacity-[0.7] bg-black outline-none'
                  />
                )}
              </div>
            </form>
            <form className='p-3 text-start'>
              <div className='my-3 flex flex-col'>
                {formData.paymentMethod === 'UPI' && (
                  <input
                    type='text'
                    placeholder='UPI Payment'
                    value={formData.upiPayment}
                    onChange={(e) => handleChange('upiPayment', e.target.value)}
                    name='upiPayment'
                    className='p-2 sm:p-3 opacity-[0.7] bg-black outline-none'
                  />
                )}
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepperContent()}
      <div className='ml-4'>
        {activeStep > 1 && (
          <button
            onClick={handlePrev}
            className='mt-2 sm:mt-0 p-2 sm:p-3 bg-red-600 rounded-sm hover:cursor-pointer'
          >
            Previous
          </button>
        )}
        {activeStep < 4 && (
          <button
            onClick={handleNext}
            className='mt-2 sm:mt-0 p-2 sm:p-3 bg-red-600 rounded-sm hover:cursor-pointer ml-3'
          >
            Next
          </button>
        )}
        {activeStep === 4 && (
          <button
            onClick={onSubmit}
            className='mt-2 sm:mt-0 p-2 sm:p-3 bg-red-600 rounded-sm hover:cursor-pointer ml-3'
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
