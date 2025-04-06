import phone from "../assets/images/phone.png";
import visa from "../assets/images/visa.png";
import ApplyButton from "../components/ApplyButton";
import GetStarted from "../components/GetStarted";

function HowTo() {
  return (
    <section className="w-full max-w-[1920px] bg-[#F6FEF7]  h-fit   px-[32px] py-[60px] lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] ">
      <div className="max-h-[1472px] lg:h-fit   w-full ">
        <h2 className="text-[##0E1E14] font-bold  text-center tracking-[-1px] lg:tracking-[-2px] text-[32px] lg:text-[52px] leading-15">
          How to pay off cards <span className="font-normal">with Bright?</span>
        </h2>

        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] lg:w-[63vw]  my-[31px] lg:my-[3.75vw] " />

        <section className="w-full h-[368px] lg:h-fit lg:flex-row lg:justify-center lg:items-center lg:gap-[150px]  flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full h-[192px] lg:w-[33vw] gap-[10px]  relative flex flex-col items-start justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px] top-[-6px] w-[16px] h-[24px] left-0">
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
          <div className="w-full h-[152px] lg:size-[21vw] bg-white flex items-center justify-center rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={phone}
              alt="phone"
              className="w-auto object-cover object-center h-[152px] lg:size-[21vw]"
            />
          </div>
        </section>

        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] lg:w-[63vw]  my-[31px] lg:my-[3.75vw] " />
        <section className="w-full h-[368px] lg:h-fit lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-[150px]  flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full h-[192px] lg:w-[33vw] gap-[10px]  relative flex flex-col items-start justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px] top-[-6px] w-[16px] h-[24px] left-0">
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
          <div className="w-full h-[152px] lg:size-[21vw] bg-white flex items-center justify-center rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={visa}
              alt="visa"
              className="w-auto object-cover object-center h-[152px] lg:size-[21vw]"
            />
          </div>
        </section>

        <hr className="h-[2px] mx-auto text-[#F4F5F8] w-[296px] lg:w-[63vw]  my-[31px] lg:my-[3.75vw] " />

        <section className="w-full h-[368px] lg:h-fit lg:flex-row lg:justify-center lg:items-center lg:gap-[150px]  flex flex-col items-center justify-center gap-[24px]">
          <div className="w-full h-[192px] lg:w-[33vw] gap-[10px]  relative flex flex-col items-start justify-start">
            <div className="text-[#17C95F] font-bold leading-[24px] text-[16px] top-[-6px] w-[16px] h-[24px] left-0">
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
          <div className="w-full h-[152px] lg:size-[21vw] flex items-center justify-center rounded-[26.67px] shadow-[0px_16px_53.33px_0px_#00000014]">
            <img
              src={phone}
              alt="debt"
              className="w-auto object-cover  rounded-[26.67px] object-center h-[152px] lg:size-[21vw]"
            />
          </div>
        </section>

        <div className="mt-[32px] lg:hidden flex items-center justify-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default HowTo;
