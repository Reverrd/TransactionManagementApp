import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/Auth/authSlice';
import { Link } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login(token));
    }
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('')
    setPassword('')
    
    
      const token = 'Stored-token'
      
      
      localStorage.setItem('token',token);
      dispatch(login(token));
    
  };
  return (
    <>
    <div className='login bg-white w-screen h-screen flex flex-col  md:flex-row  '>
    <div className='md:flex-[1] md:bg-[#F0EEFF] '>
      <img className='md:ml-[50px] md:mt-[50px]' src="./assets/logo.png" alt="logo" />
    </div>
    <div className='flex-[4.5]  flex sm:items-center justify-center  md:flex'>
      <div className='w-[90%] sm:w-full flex flex-col sm:items-center justify-center  '>
    <h1 className='mb-7 text-[40px] text-left text-[#0A090B] font-medium'>
      Sign In
    </h1>
    <div>
      <form onSubmit={handleSubmit}>
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
              className="text-[#09090B] bg-white border-[#E4E4E7] input input-bordered w-full sm:w-[500px] " />
           </label>
           <div className='flex justify-center'>
           <button className="btn bg-[#7000F6] mt-[90px] font-normal   w-full sm:max-w-xs text-white  rounded-md">Sign In</button>
           </div>
      </form>
      <p className='mt-2 text-center text-sm text-[#09090B]'>Don't have an Account? click to <Link to={'/register'}><span className='text-[blue] cursor-pointer underline'>Create Account</span></Link></p>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;
