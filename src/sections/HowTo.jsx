import phone from "../assets/images/phone.png";
import visa from "../assets/images/visa.png";
import debt from "../assets/images/debt.png";
import coins from "../assets/images/coins.png";
import ApplyButton from "../components/ApplyButton";
import GetStarted from "../components/GetStarted";

function HowTo() {
  return (
    <section className="w-full bg-[#F6FEF7]  h-[1592px]   px-[32px] py-[60px]">
      <div className="h-[1472px]  w-full ">
        <h2 className="text-[#030303] font-bold text-center tracking-[-1px] text-[32px] leading-[38px]">
          How to pay off cards{" "}
          <span className=" font-normal">with Bright?</span>
        </h2>
        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] my-[31px]" />

        <section className="w-full   h-[368px] flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full  h-[192px] gap-[10px]  relative flex flex-col items-start  justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px]  top-[-6px] w-[16px] h-[24px] left-0">
              01
            </div>
            <p className="h-[56px] w-fit leading-[28px] text[#161414] font-bold text-[18px] ">
              Download the App and check the rates.
            </p>
            <p className="h-[38px] w-fit leading-[26.66px] text[#787F88] font-normal text-[16px] tracking-[-2%] ">
              Get the best rates and credit limit with a quick soft credit
              inquiry.
            </p>

            <ApplyButton />
          </div>
          <div className="w-full h-[152px] flex items-center justify-center bg-white rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={phone}
              alt="phone"
              className="w-auto object-cover h-[152px]"
            />
          </div>
        </section>
        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] my-[31px]" />
        <section className="w-full  h-[368px] flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full h-[192px] gap-[10px] relative flex flex-col items-start justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px]  top-[-6px] w-[16px] h-[24px] left-0">
              02
            </div>
            <p className="h-[56px] w-fit leading-[28px] text-[#161414] font-bold text-[18px]">
              Get the credit line and choose which cards to pay.
            </p>
            <p className="h-[38px] w-fit leading-[26.66px] text-[#787F88] font-normal text-[16px] tracking-[-2%]">
              Refinance multiple cards up to your credit limit pay down and
              choose more.
            </p>
            <ApplyButton />
          </div>
          <div className="w-full h-[152px] flex items-center justify-center bg-white rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={visa}
              alt="visa"
              className="w-auto object-cover h-[152px]"
            />
          </div>
        </section>
        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] my-[31px]" />
        <section className="w-full h-[368px] flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full  h-[192px] gap-[10px] relative flex flex-col items-start justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px]  top-[-6px] w-[16px] h-[24px] left-0">
              03
            </div>
            <p className="h-[56px] w-fit leading-[28px] text-[#161414] font-bold text-[18px]">
              Make on-time payments and defeat debt.
            </p>
            <p className="h-[38px] w-fit leading-[26.66px] text-[#787F88] font-normal text-[16px] tracking-[-2%]">
              Choose how much to pay each month above your monthly minimum
              payment.
            </p>
            <ApplyButton />
          </div>
          <div className="w-full h-[152px] flex items-center justify-center bg-white rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={debt}
              alt="debt"
              className="w-auto object-cover h-[152px]"
            />
          </div>
        </section>

        <div className="mt-[32px] flex items-center justify-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default HowTo;
