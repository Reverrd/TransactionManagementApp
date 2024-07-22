import PropTypes from 'prop-types';
export default function TransactionSummary({totalDebit, totalCredit}:{
    totalDebit: number;
    totalCredit: number;
}) {
  return (
   <>
    <div className='grid grid-rows-1 grid-cols-3 gap-3 overflow-x-scroll'>
          <div className='bg-[#F9F9F9] rounded-[8px] py-3 pl-3'>
            <h5 className='text-[#223E3B] text-[12px] mb-4'>Total Balance</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium'>N{totalDebit - totalCredit} <span className='text-[#7F7D83] text-sm'>+1 today</span></h2>
            <h3 className='text-[#7000F6] text-sm'>View details</h3>
          </div>
          <div className='bg-[#F9F9F9] rounded-[8px] py-3 pl-3' >
            <h5 className='text-[#0C296A] text-[12px] mb-4' >Total Credit</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium' >N{totalCredit}</h2>
            <h3 className='text-[#008000] text-sm' >View details</h3>
          </div>
          <div className='bg-[#F9F9F9] rounded-[8px] py-3 pl-3'>
            <h5 className='text-[#223E3B] text-[12px] mb-4' >Total Debit</h5>
            <h2 className='text-[#0A090B] text-2xl font-medium'>N{totalDebit} <span className='text-[#7F7D83] text-sm' >+5% today</span></h2>
            <h3 className='text-[#FF0000] text-sm'>View details</h3>
          </div>
          
        </div>
   </>
  )
}
TransactionSummary.propTypes = {
    totalDebit: PropTypes.number,
    totalCredit: PropTypes.number,
 
}
