import AppleLogo from "../assets/AppleLogo";
import Logo from "../assets/Logo";
import PlaystoreLogo from "../assets/PlaystoreLogo";

function Navbar() {
  return (
    <div className="absolute bg-gradient-to-br from-[#FFFFFFCC] to-[#ECECEC33] rounded-md  top-[2.2vw] left-1/2 transform -translate-x-1/2  flex items-center justify-center custom-border h-[3.2vw] max-h-[62px] w-[76vw] max-w-[1462px] z-50 shadow-md">
      <div className=" max-w-[1275px] w-[67vw]  h-[1.6vw] max-h-[32px] flex items-center mx-auto justify-between">
        <span>
          <Logo />
        </span>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-[#787F88] text-[10px] ">
            AVAILABLE ON APPSTORE AND PLAYSTORE
          </span>
          <div className="flex items-center justify-center gap-1">
            <span>
              <AppleLogo />
            </span>
            <span>
              <PlaystoreLogo />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
