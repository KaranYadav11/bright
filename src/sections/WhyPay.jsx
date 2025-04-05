import coin from "../assets/images/coin.png";
import secure from "../assets/images/secure.png";
import bank from "../assets/images/bank.png";
import GetStarted from "../components/GetStarted";

function WhyPay() {
  return (
    <section className="w-full h-[555px] lg:h-fit bg-white  flex items-center justify-center  px-[32px] py-[60px] lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] ">
      <div
        className="  w-full
       flex flex-col items-center justify-center h-[435px] lg:h-fit "
      >
        <div className="w-full flex  items-center justify-center   ">
          <h2 className="text-[#030303] lg:text-[#0E1E14] w-[296.6px] lg:w-fit h-[77px] font-bold text-center tracking-[-1px] text-[32px] lg:text-[52px] lg:leading-[70px] leading-[38px]">
            Why pay off cards <span className="font-normal">with Bright?</span>
          </h2>
        </div>
        <hr className="h-[2px] text-[#D5D7DB] w-[296px] lg:w-full my-[31px] lg:my-[3.75vw]" />

        <div className="h-[222px] lg:h-fit  mb-[32px] lg:mb-0  w-[295.49px] lg:w-full gap-[24px] flex flex-col lg:flex-row  items-center  justify-between">
          <div className=" w-[295.49px] h-[58px] lg:h-fit lg:w-fit  flex items-center justify-center gap-[16px]">
            <img
              src={bank}
              className="w-auto h-[57.96px] lg:h-[4.8vw] object-contain"
              alt="bank"
            />
            <p className="text-[#787F88] lg:leading-[30px]  flex items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] text-left font-medium text-[16px] lg:text-[1.25vw]">
              Accepts all major bank cards
            </p>
          </div>
          <div className="w-[295.49px] h-[58px] lg:h-fit lg:w-fit  flex items-center justify-center gap-[16px]">
            <img
              src={coin}
              alt="coin"
              className="w-auto h-[57.96px] lg:h-[4.8vw] object-contain"
            />
            <p className="text-[#787F88] flex items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] lg:leading-[30px] text-left font-medium text-[16px]  lg:text-[1.25vw] ">
              Affordable monthly payments
            </p>
          </div>

          <div className="w-[295.49px] h-[58px] lg:h-fit lg:w-fit  flex items-center justify-center gap-[16px]">
            <img
              src={secure}
              alt="secure"
              className="w-auto h-[57.96px]  lg:h-[4.8vw] object-contain"
            />
            <p className="text-[#787F88] flex lg:leading-[30px]  items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] text-left font-medium text-[16px]  lg:text-[1.25vw]">
              100% data security - 256-bit encryption
            </p>
          </div>
        </div>
        <GetStarted />
      </div>
    </section>
  );
}

export default WhyPay;
