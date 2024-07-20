import LeftBar from "../components/leftbar/LeftBar";
import MainBody from "../components/mainbody/MainBody";
import Nav from "../components/nav/Nav";


export default function Dashboard() {
  return (
    <div>
     <Nav />
     <div className="  flex">
        <div className="left hidden md:block">
        <LeftBar />
        </div>
        <div className="bg-white main">
        <MainBody />
        </div>
     </div>
    </div>
  )
}
