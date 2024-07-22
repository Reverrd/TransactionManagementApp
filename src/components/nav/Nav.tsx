import { useNavigate } from "react-router-dom"
export default function Nav() {
const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="bg-white fixed top-0 left-0 w-screen z-[50] border">
    <div className="w-full px-10  h-[63px] flex justify-between items-center">
      <div>
        <div className="w-[48px] h-[48px] bg-[#F7F0FF] sm:hidden">
            
        </div>
        <img className="hidden  sm:block" src="./assets/logo.png" alt="logo" />
      </div>
      <div className="flex items-center">
        <div>
        <img src="./assets/helpIcon.png" alt="help" />
        </div>
        <div className="ml-7 mr-3">
            <img src="./assets/Avatar.png" alt="" />
        </div>
        <div className="mr-3">
            {"Tee"}
        </div>
        <button className="text-black mr-2" onClick={handlelogout}>
          logout
        </button>
        <div>
            <img src="./assets/arrowDown.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
