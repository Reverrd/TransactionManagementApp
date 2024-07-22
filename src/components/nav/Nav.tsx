import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { AuthState } from "../../features/Auth/authSlice"
export default function Nav() {
  const {user}: AuthState = useSelector((state: RootState)=> state.auth)
const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="bg-white fixed top-0 left-0 w-screen z-[50] border">
    <div className="w-full px-10  h-[63px] flex justify-between items-center">
      <div>
        <div className="flex justify-center items-center w-[48px] h-[48px] bg-[#F7F0FF] sm:hidden">
            <img src="./assets/hamburger.png" alt="" />
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
        <div className="mr-3 text-[#7000F6] font-medium ">
            {user && user.first_name}
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
