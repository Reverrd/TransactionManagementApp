import { Link } from 'react-router-dom';
import '../../pages/dashboard.scss';
import { useState, useEffect } from 'react';
import { Transaction } from '../../interface/typeInterface';
import { getTransactions } from '../../services/api';
import MainTable from '../transactions/TransactionTable';
import './mainbody.scss'
import FilterButton from './FilterBtn';
import TransactionSummary from '../transactions/TransactionSummary';
export default function MainBody() {
  const [transactionTable, setTransactionTable] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        //@ts-expect-error response is any type
        const response: { data: { transactions: Transaction[] } } = await getTransactions();
        const data = response.data.transactions;
        setTransactionTable(data);
        setLoading(false);
        console.log(`this is${JSON.stringify(data)}`);
        // Save transactions to local storage
        localStorage.setItem('transactions', JSON.stringify(data));
      } catch (err) {
        setError('Failed to fetch transactionTable');
        setLoading(true);
      }
    };
    
    fetchTransactions();
    
  }, []);

  const handleDeleteTransaction = async (id: number) => {
    // Filter out the transaction to be deleted
    const updatedTransactions = transactionTable.filter((transaction) => transaction.id !== id);
    setTransactionTable(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleEditTransaction = async (updatedTransaction: Transaction) => {
    const index = transactionTable.findIndex((transaction) => transaction.id === updatedTransaction.id);
    if (index !== -1) {
      const updatedTransactions = [...transactionTable];
      updatedTransactions[index] = updatedTransaction;
      setTransactionTable(updatedTransactions);
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
    <div className="mt-[65px] px-9 md:px-20 text-black h-screen overflow-y-auto w-screen md:w-full  ">
      {loading?(
                        <div className=' h-screen flex justify-center items-center'>
                        <span className="loading loading-dots w-[10vw] "></span>
                        </div>
                    ): (
      <div>
        <div className=" flex justify-between  items-center">
          <div>
            <h1 className="text-[5.5vw] md:text-[3vw] font-medium ">Transactions</h1>
            <p className="sm:text-[14px] text-[2.7vw] text-[#7F7D83] mb-5 ">
              View all your transactionTable in the list of products
            </p>
          </div>
          <Link to={'/transactionform'}>
            <div className=" addTransactionBtn  cursor-pointer flex justify-center items-center bg-[#7000F6] md:w-[56px] md:h-[56px] w-[8vw] h-[8vw] rounded-full">
              <img src="./assets/add.png" alt="addTransactions" />
            </div>
          </Link>
        </div>
        <TransactionSummary totalDebit={totalDebit} totalCredit={totalCredit} />
        <div className='py-3 flex justify-between'>
          <input
            type="text"
            placeholder="Search Transactions"
            className="input input-bordered bg-white w-[40%] "
          />
          <div className='flex'>
            <div>
            <FilterButton />
            </div>
            
            <div className="join border pagination hidden md:flex ">
                <button className="w-[5vw] h-2 bg-white text-black join-item btn border-none ">1-10</button>
                <button className=" flex justify-center items-center w-[5vw] text-black join-item bg-white btn-disabled "><span>of</span></button>
                <button className="w-[5vw] h-2 text-black bg-white join-item btn border-none ">240</button>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <MainTable transactionTable={transactionTable} handleEditTransaction={handleEditTransaction} handleDeleteTransaction={handleDeleteTransaction}  />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}