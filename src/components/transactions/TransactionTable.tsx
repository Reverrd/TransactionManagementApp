import PropTypes from 'prop-types';
import { Transaction } from '../../interface/typeInterface';
import './transactions.scss'
export default function MainTable({transactionTable, handleEditTransaction, handleDeleteTransaction}:{
    transactionTable: Transaction[];
    handleEditTransaction: (transaction: Transaction) => void;
    handleDeleteTransaction: (transactionId: number) => void;
  }) {
  return (
    <>
      <table className="table text-black">
              <thead className="bg-[#F9FAFB]">
                <tr className='text-black'>
                  <th>References</th>
                  <th>Amount</th>
                  <th>Transaction Date</th>
                  <th>Updated Last</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactionTable.length > 0 &&
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  transactionTable.map((transaction:any) => {
                    // console.log(`Rendering transaction: ${JSON.stringify(transaction)}`);
                    return (
                      <tr key={transaction.id}>
                        <td className='  flex items-center justify-evenly'>
                            <span className='pr-2'>{transaction.direction === 'credit'? (
                                <img src="./assets/credit.png" alt="credit" />
                            ):(
                                <img src="./assets/debit.png" alt="debit" />
                            )}</span>
                            <span className='ellipsis'>{transaction.reference}</span></td>
                        <td>NGN{transaction._value}</td>
                        <td className='ellipsis'>{transaction.created_at}</td>
                        <td className='ellipsis'>{transaction.updated_at}</td>
                        <td>{'success'}</td>
                        <td className='flex items-center justify-evenly'>
                          <button
                            onClick={() => handleEditTransaction({...transaction})}
                          >
                            <img src="./assets/pen.png" alt="" />
                          </button>
                          <button
                            onClick={() => handleDeleteTransaction(transaction.id)}
                          >
                            <img src="./assets/deleteBtn.png" alt="" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
    </>
  )
}

MainTable.propTypes = {
    transactionTable: PropTypes.array,
    handleEditTransaction: PropTypes.func,
    handleDeleteTransaction: PropTypes.func
}