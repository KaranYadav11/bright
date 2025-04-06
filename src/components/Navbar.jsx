import AppleLogo from "../assets/AppleLogo";
import Logo from "../assets/Logo";
import PlaystoreLogo from "../assets/PlaystoreLogo";

function Navbar() {
  return (
    <div className="absolute lg:w-[76vw] bg-gradient-to-br from-[#FFFFFFCC] to-[#ECECEC33] rounded-md top-[21px] left-1/2 transform -translate-x-1/2 flex items-center justify-center custom-border w-[337px] h-[30px] lg:h-[3.125vw] max-w-[1462px] z-50 shadow-md">
      <div className="w-[296px] h-[16px] lg:w-[66.4vw] flex items-center mx-auto justify-between">
        <Logo />

        <div className="flex flex-row  justify-end items-center  gap-[2.875px] lg:gap-[5px] w-[154.5px] lg:h-fit lg:w-fit h-[15.39px] flex-none order-1 flex-grow-0">
          <div className="text-[#787F88] tracking-[.48px] lg:tracking-[1px] leading-[100%] h-[5px] w-[118px] lg:w-fit text-[4.78px] lg:text-[0.5vw]">
            AVAILABLE ON APPSTORE AND PLAYSTORE
          </div>
          <div className="flex w-fit items-center justify-center gap-[2.43px] lg:gap-[5px] ">
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
