import coin from "../assets/images/coin.png";
import secure from "../assets/images/secure.png";
import bank from "../assets/images/bank.png";
import GetStarted from "../components/GetStarted";

function WhyPay() {
  return (
    <section className="w-full h-[555px] bg-white  flex items-center justify-center  px-[32px] py-[60px]">
      <div
        className=" w-full
       flex flex-col items-center justify-center h-[435px] "
      >
        <div className="w-full flex items-center justify-center   ">
          <h2 className="text-[#030303] w-[296.6px] h-[77px] font-bold text-center tracking-[-1px] text-[32px] leading-[38px]">
            Why pay off cards <span className="font-normal">with Bright?</span>
          </h2>
        </div>
        <hr className="h-[2px] text-[#D5D7DB] w-[296px] my-[31px]" />

        <div className="h-[222px] mb-[32px] w-[295.49px] gap-[24px] flex flex-col items-center  justify-between">
          <div className=" w-[295.49px] h-[58px]  flex items-center justify-center gap-[16px]">
            <img
              src={bank}
              className="w-auto h-[57.96px] object-contain"
              alt="bank"
            />
            <p className="text-[#787F88] flex items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] text-left font-medium text-[16px]">
              Accepts all major bank cards
            </p>
          </div>
          <div className="w-[295.49px] h-[58px]  flex items-center justify-center gap-[16px]">
            <img
              src={coin}
              alt="coin"
              className="w-auto h-[57.96px] object-contain"
            />
            <p className="text-[#787F88] flex items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] text-left font-medium text-[16px]">
              Affordable monthly payments
            </p>
          </div>

          <div className="w-[295.49px] h-[58px]  flex items-center justify-center gap-[16px]">
            <img
              src={secure}
              alt="secure"
              className="w-auto h-[57.96px] object-contain"
            />
            <p className="text-[#787F88] flex items-center justify-center h-[58px] w-[191px] tracking-[-2%] leading-[20px] text-left font-medium text-[16px]">
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
