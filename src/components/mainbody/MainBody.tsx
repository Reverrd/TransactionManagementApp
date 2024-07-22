import { Link } from 'react-router-dom';
import '../../pages/dashboard.scss';
import { useState, useEffect } from 'react';
import { Transaction } from '../../interface/Transaction';
import { getTransactions } from '../../services/api';
import MainTable from './MainTable';

export default function MainBody() {
  const [transactionTable, setTransactionTable] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response: { data: { transactions: Transaction[] } } = await getTransactions();
        const data = response.data.transactions;
        setTransactionTable(data);
        setLoading(false);
        console.log(`this is${JSON.stringify(data)}`);
        // Save transactions to local storage
        localStorage.setItem('transactions', JSON.stringify(data));
      } catch (err) {
        setError('Failed to fetch transactionTable');
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    console.log('Transactions state updated:', transactionTable); // Log state updates
  }, [transactionTable]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 

  const handleDeleteTransaction = async (id: number) => {
    // Filter out the transaction to be deleted
    const updatedTransactions = transactionTable.filter((transaction) => transaction.id !== id);
    setTransactionTable(updatedTransactions);
    // Save transactions to local storage
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleEditTransaction = async (updatedTransaction: Transaction) => {
    // Find the index of the transaction to be updated
    const index = transactionTable.findIndex((transaction) => transaction.id === updatedTransaction.id);
    if (index !== -1) {
      // Update the transaction in the state
      const updatedTransactions = [...transactionTable];
      updatedTransactions[index] = updatedTransaction;
      setTransactionTable(updatedTransactions);
      // Save transactions to local storage
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    }
  };
  const totalDebit = transactionTable.reduce((acc, current) => {
    if (current.direction === 'debit') {
      return acc + current._value;
    }
    return acc;
  }, 0);
  
  const totalCredit = transactionTable.reduce((acc, current) => {
    if (current.direction === 'credit') {
      return acc + current._value;
    }
    return acc;
  }, 0);
  return (
    <div className="mt-[65px] px-9 md:px-20 text-black h-screen overflow-y-auto">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[32px] font-medium">Transactions</h1>
            <p className="text-[14px] text-[#7F7D83] mb-5">
              View all your transactionTable in the list of products
            </p>
          </div>
          <Link to={'/transactionform'}>
            <div className="cursor-pointer flex justify-center items-center bg-[#7000F6] w-[56px] h-[56px] rounded-full">
              <img src="./assets/add.png" alt="addTransactions" />
            </div>
          </Link>
        </div>
        <div className='grid grid-rows-1 grid-cols-3 gap-3'>
          <div className='bg-[#F9F9F9] rounded-[8px]'>
            <h5 className='text-[#223E3B] text-[12px] mb-4'>Total Balance</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium'>N{totalDebit - totalCredit} <span className='text-[#7F7D83] text-sm'>+1 today</span></h2>
            <h3 className='text-[#7000F6] text-sm'>View details</h3>
          </div>
          <div className='bg-[#F9F9F9] rounded-[8px]' >
            <h5 className='text-[#0C296A] text-[12px] mb-4' >Total Credit</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium' >N{totalCredit}</h2>
            <h3 className='text-[#008000] text-sm' >View details</h3>
          </div>
          <div className='bg-[#F9F9F9] rounded-[8px]'>
            <h5 className='text-[#223E3B] text-[12px] mb-4' >Total Debit</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium'>N{totalDebit} <span className='text-[#7F7D83] text-sm' >+5% today</span></h2>
            <h3 className='text-[#FF0000] text-sm'>View details</h3>
          </div>
          
        </div>
        <div className='py-3'>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <div className="overflow-x-auto">
            <MainTable transactionTable={transactionTable} handleEditTransaction={handleEditTransaction} handleDeleteTransaction={handleDeleteTransaction}  />
          </div>
        </div>
      </div>
    </div>
  );
}