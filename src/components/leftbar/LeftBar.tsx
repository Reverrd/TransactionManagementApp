import '../../pages/dashboard.scss'
export default function LeftBar() {
  return (
    <div className=" bg-[#7000F6] h-screen mt-[62px] text-white  ">
      <div className='px-10 pt-5'>
        <div className='flex items-center mb-10'>
          <div className='mr-3 bg-[#872df5] rounded-full w-[48px] h-[48px] flex justify-center items-center'>
            <span>{"TU"}</span>
          </div>
          <div>
            <h1 className='font-semibold text-[14px] '>{"Test User"}</h1>
            <p className='text-[12px]' >{"test@user.com"}</p>

          </div>
        </div>
        <div className='flex items-center  h-[44px] pl-2 cursor-pointer hover:bg-[#8a37f0] rounded-lg'>
          <span className='mr-3'>
            <img src="./assets/rocket/Parts/Vector.png" alt="" />
          </span>
          <span>Overview</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/users/Parts/Vector.png" alt="" />
          </span>
          <span>Users</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/transfer/Parts/Vector.png" alt="" />
          </span>
          <span>Transfers</span>
        </div>
        <div className='flex items-center h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/deposit/Parts/Vector.png" alt="" />
          </span>
          <span>Deposits</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/saving/Parts/Vector.png" alt="" />
          </span>
          <span>Savings</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/billPayment/Parts/Vector.png" alt="" />
          </span>
          <span>Bill Payment</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/report/Parts/Vector.png" alt="" />
          </span>
          <span>Reports</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/compliance/Parts/Vector.png" alt="" />
          </span>
          <span>Compliance</span>
        </div>
        <div className='flex items-center  h-[44px] cursor-pointer hover:bg-[#8a37f0] rounded-lg pl-2'>
          <span className='mr-3'>
            <img src="./assets/settings/Parts/Vector.png" alt="" />
          </span>
          <span>Settings</span>
        </div>
        
        
      </div>
    </div>
  )
}
