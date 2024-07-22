import React, { useState } from 'react';
import { registerUser } from '../../services/api';
import { Link } from 'react-router-dom';
import { register } from '../../features/Auth/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('')
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [success, setSuccess] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError('');
    // setSuccess('');
    try {
      const userData= await registerUser({ first_name, last_name, email, password });
      const response = userData
      dispatch(register(response.data.token));
      console.log(response)
      // setSuccess('Account created successfully! Redirecting to login...');
    } catch (error) {
      console.error(error);
      // setError('Failed to create account. Please try again.');
    }
  };

  return (
    <>
    <div className='login pb-4 bg-white w-full h-auto flex flex-col  md:flex-row  '>
    <div className='md:flex-[1] md:bg-[#F0EEFF] '>
      <img className='md:ml-[50px] md:mt-[50px]' src="./assets/logo.png" alt="logo" />
    </div>
    <div className='flex-[4.5]  flex sm:items-center justify-center  md:flex'>
      <div className='w-[90%] sm:w-full flex flex-col sm:items-center justify-center  '>
    <h1 className='mb-7 text-[40px] text-left text-[#0A090B] font-medium'>
      Create Account
    </h1>
    <div>
      <form onSubmit={handleSubmit}>
          <label className="form-control w-full  mb-3">
              <div className="label">
                  <span className="label-text text-[#09090B]">First Name<sup className='text-red-600'>*</sup></span>
              </div>
              <input type="text" 
              value={first_name} 
              onChange={(e) => setFirstname(e.target.value)} 
              placeholder="Enter first name" 
              className="bg-white text-[#09090B] border-[#E4E4E7] input input-bordered w-full " />
           </label>
          <label className="form-control w-full  mb-3">
              <div className="label">
                  <span className="label-text text-[#09090B]">Last Name<sup className='text-red-600'>*</sup></span>
              </div>
              <input type="text" 
              value={last_name} 
              onChange={(e) => setLastname(e.target.value)} 
              placeholder="Enter first name" 
              className="bg-white text-[#09090B] border-[#E4E4E7] input sm:w-[500px] input-bordered w-ful " />
           </label>
          <label className="form-control w-full  mb-3">
              <div className="label">
                  <span className="label-text text-[#09090B]">Email Address<sup className='text-red-600'>*</sup></span>
              </div>
              <input type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter email address" 
              className="bg-white text-[#09090B] border-[#E4E4E7] input input-bordered w-full " />
           </label>
          <label className="form-control w-full ">
              <div className="label">
                  <span className="label-text text-[#09090B]">Password<sup className='text-red-600'>*</sup></span>
              </div>
              <input type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password" 
              className="text-[#09090B] bg-white border-[#E4E4E7] input input-bordered w-full " />
           </label>
           <div className=' flex justify-center'>
           <button className="btn bg-[#7000F6] mt-[90px] font-normal   w-full sm:max-w-xs text-white  rounded-md">Create Account</button>
           </div>
      </form>
      <p className='mt-2 text-center text-sm text-[#09090B]'>Already have an Account? click to <Link to={'/'}><span className='text-[blue] cursor-pointer underline'>Sign in</span></Link></p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Register;
{/* <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>         */}