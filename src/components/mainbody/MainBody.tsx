

import { Link } from 'react-router-dom'
import '../../pages/dashboard.scss'
export default function MainBody() {
  return (
    <div className=" mt-[65px] px-9 md:px-20 text-black h-screen ">
      <div>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-[32px] font-medium'>Transactions</h1>
                <p className='text-[14px] text-[#7F7D83]'>View all your transactions in the list of products</p>
            </div>
            <Link to={'/transactionform'} >
            <div className=' cursor-pointer flex justify-center items-center bg-[#7000F6] w-[56px] h-[56px] rounded-full'>
               <img src="./assets/add.png" alt="addTransactions" /> 
            </div>
            </Link>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
