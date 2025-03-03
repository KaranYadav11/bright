import AppleLogo from "../assets/AppleLogo";
import Logo from "../assets/Logo";
import PlaystoreLogo from "../assets/PlaystoreLogo";

function Navbar() {
  return (
    <div className="absolute bg-gradient-to-br from-[#FFFFFFCC] to-[#ECECEC33] rounded-md top-[21px] left-1/2 transform -translate-x-1/2 flex items-center justify-center custom-border w-[337px] h-[30px] max-w-[1462px] z-50 shadow-md">
      <div className="w-[296px] h-[16px] flex items-center mx-auto justify-between">
        <Logo />

        <div className="flex flex-row justify-end items-center  gap-[2.875px] w-[154.5px] h-[15.39px] flex-none order-1 flex-grow-0">
          <span className="text-[#787F88] tracking-[.48px] leading-[4.78px] h-[5px] w-[118px] text-[4.78px]">
            AVAILABLE ON APPSTORE AND PLAYSTORE
          </span>
          <div className="flex items-center justify-center gap-[2.43px]">
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
