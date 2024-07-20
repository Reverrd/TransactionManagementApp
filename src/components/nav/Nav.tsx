
export default function Nav() {
  return (
    <div className="bg-white fixed top-0 left-0 w-screen z-[50]">
    <div className="w-full px-10  h-[63px] flex justify-between items-center">
      <div>
        <img src="./assets/logo.png" alt="logo" />
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
        <div>
            <img src="./assets/arrowDown.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}
