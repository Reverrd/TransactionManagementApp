import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../features/transactions/transactionsSlice';
import { addTransaction as apiAddTransaction } from '../../services/api';
import Dashboard from '../../pages/Dashboard';
import { Link } from 'react-router-dom';
import "./transactions.scss"
const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  
  const [transactionDirection, setTransactionDirection] = useState<'credit' | 'debit'>('debit');
  const[status, setStatus] = useState<'success' | 'pending' | 'failed'>('success')
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAmount('')
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const newTransaction = {  amount, transactionDirection, status };
        const response = await apiAddTransaction(token, newTransaction);
        console.log(response)
        dispatch(addTransaction(response.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Dashboard />
    <div className='transaction flex justify-center sm:justify-end  fixed top-0 bg-[#0000007c] z-[500] w-screen h-screen'>
        <div className='px-4 py-5 bg-white w-full sm:w-[362px]'>
            <Link to={'/dashboard'}>
            <div className='mb-9 cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-[#E4E4E7]'>
                <img src="./assets/close.png" alt="" />
            </div>
            </Link>
            <div className='mb-10'>
                <h1 className='font-medium text-[24px] text-[#0A090B]'>Add new Transaction</h1>
                <p className='font-normal text-[#7F7D83]'>Add a new transaction to the table</p>
            </div>
            <div className='flex flex-col justify-center'>
                <form className=' ' onSubmit={handleSubmit}>
                    <div>
                        <label className="form-control w-full sm:max-w-xs mb-3">
                            <div className=' label text-[#09090B] '>
                                <span>Transaction Direction<sup className='text-red-600'>*</sup></span> 
                            </div>
                            <select value={transactionDirection} 
                            onChange={(e) => setTransactionDirection(e.target.value as 'credit' | 'debit')} 
                            className="select select-bordered bg-white border-[#E4E4E7]">
                                <option selected disabled >--</option>
                                <option value="debit" className='text-[#09090B]'>Debit</option>
                                <option value="credit" className='text-[#09090B]'>Credit</option>

                            </select>
                        </label>
                        <label className="form-control w-full sm:max-w-xs mb-3">
                            <div className=' label text-[#09090B] '>
                                <span>Status<sup className='text-red-600'>*</sup></span>
                                
                            </div>
                            <select value={status}
                            onChange={(e) => setStatus(e.target.value as 'success' | 'pending' | 'failed')} className="select select-bordered bg-white border-[#E4E4E7]">
                                <option disabled  >--</option>
                                <option value='success' className='text-[#09090B]'>Success</option>
                                <option value='pending' className='text-[#09090B]'>Pending</option>
                                <option value='failed' className='text-[#09090B]'>Failed</option>

                            </select>
                        </label>
                        <label className="form-control w-full sm:max-w-xs">
                            <div className="label">
                                <span className="label-text text-[#09090B]">Amount<sup className='text-red-600'>*</sup></span>
                            </div>
                            <input type="text" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder="Enter an amount" 
                            className="bg-white border-[#E4E4E7] input input-bordered w-full sm:max-w-xs" />
                        </label>
                    </div>
                    <button className="btn bg-[#7000F6] mt-[90px] font-normal   w-full sm:max-w-xs text-white  rounded-md">Add Transaction</button>
                </form>
            </div>
        </div>
    </div>
    </>
  );
};

export default TransactionForm;


