import phone from "../assets/images/phone.png";
import visa from "../assets/images/visa.png";
import debt from "../assets/images/debt.png";
import coins from "../assets/images/coins.png";
import ApplyButton from "../components/ApplyButton";

function HowTo() {
  return (
    <section className="max-w-[1917px] bg-[#F6FEF7]  w-full flex items-center justify-center h-[111.8vw] max-h-[2148px] px-[13.26vw] py-[6.3vw]">
      <div className="max-w-[1413px] max-h-[1908px] w-full h-full">
        <div className="w-full max-h-[72px] h-[3.75vw]">
          <h2 className="text-[#0E1E14] font-bold text-center tracking-[-4%] text-[3.33vw] leading-[3.75vw]">
            How to pay off cards{" "}
            <span className="leading-[3.75vw] font-normal">with Bright?</span>
          </h2>
        </div>
        <div className="h-[2.6px] max-w-[1213px] w-[63.1vw] mx-auto bg-[#BAE8CB] my-[3.75vw] "></div>
        <section className="w-full max-h-[468px] h-[24.3vw]  flex items-center justify-center gap-[8.3vw]">
          <div className="max-w-[441px] max-h-[468px] h-[24.3vw] w-[23vw] bg-white rounded-[1.38vw] flex items-center justify-center">
            <img src={phone} alt="phone" />
          </div>
          <div className="max-w-[645px] max-h-[366px]  relative h-[19vw] w-[33.5vw]  flex flex-col items-center justify-between">
            <div className="relative h-[19vw] w-[33.5vw]  flex items-center justify-center ">
              <div className="text-[#17C95F] font-bold text-[1.25vw] absolute top-[-8px] left-0">
                01
              </div>
              <div className="absolute top-[3vw] w-full h-full flex flex-col items-start justify-start space-y-[1.6vw] ">
                <p className="max-h-[91vw] leading-[3.17vw] tracking-[-2%] text-[#383C43] font-bold text-[2.18vw] h-[4.7vw]">
                  Download the App and check the rates.
                </p>
                <p className="max-h-[68vw] w-full leading-[2.39vw] tracking-[-2%] text-[##787F88]  text-[1.6vw] h-[3.5vw]">
                  Get the best rates and credit limit with a quick soft credit
                  inquiry.
                </p>
              </div>
            </div>
            <ApplyButton />
          </div>
        </section>
        <div className="h-[2.6px] max-w-[1213px] w-[63.1vw] mx-auto bg-[#BAE8CB] my-[3.73vw]"></div>
        <section className="w-full max-h-[468px] h-[24.3vw]  flex items-center justify-center gap-[8.3vw]">
          <div className="max-w-[645px] max-h-[366px]  relative h-[19vw] w-[33.5vw]  flex flex-col items-center justify-between">
            <div className="relative h-[19vw] w-[33.5vw]  flex items-center justify-center ">
              <div className="text-[#17C95F] font-bold text-[1.25vw] absolute top-[-8px] left-0">
                02
              </div>
              <div className="absolute top-[3vw] w-full h-full flex flex-col items-start justify-start space-y-[1.6vw] ">
                <p className="max-h-[91vw] leading-[3.17vw] tracking-[-2%] text-[#383C43] font-bold text-[2.18vw] h-[4.7vw]">
                  Get the credit line and choose which cards to pay.
                </p>
                <p className="max-h-[68vw] w-full leading-[2.39vw] tracking-[-2%] text-[##787F88]  text-[1.6vw] h-[3.5vw]">
                  Refinance multiple cards up to your credit limit pay down and
                  choose more.
                </p>
              </div>
            </div>
            <ApplyButton />
          </div>
          <div className="max-w-[441px] max-h-[468px] h-[24.3vw] w-[23vw] bg-white rounded-[1.38vw] flex items-center justify-center">
            <img src={visa} alt="visa" />
          </div>
        </section>
        <div className="h-[2.6px] max-w-[1213px] w-[63.1vw] mx-auto bg-[#BAE8CB] my-[3.75vw]"></div>

        <section className="w-full max-h-[468px] h-[24.3vw]  flex items-center justify-center gap-[8.3vw]">
          <div className="max-w-[441px] relative max-h-[468px] h-[24.3vw] w-[23vw] bg-white rounded-[1.38vw] flex items-center justify-center">
            <img
              src={debt}
              alt="debt"
              className="max-w-[242px] h-auto w-[12.6vw]"
            />
            <img
              src={coins}
              alt="coins"
              className="max-w-[164px] absolute top-[11.5vw] left-[11.9vw] h-auto w-[8.54vw]"
            />
          </div>
          <div className="max-w-[645px] max-h-[366px]  relative h-[19vw] w-[33.5vw]  flex flex-col items-center justify-between">
            <div className="relative h-[19vw] w-[33.5vw]  flex items-center justify-center ">
              <div className="text-[#17C95F] font-bold text-[1.25vw] absolute top-[-8px] left-0">
                03
              </div>
              <div className="absolute top-[3vw] w-full h-full flex flex-col items-start justify-start space-y-[1.6vw] ">
                <p className="max-h-[91vw] leading-[3.17vw] tracking-[-2%] text-[#383C43] font-bold text-[2.18vw] h-[4.7vw]">
                  Make on-time payments and defeat debt.
                </p>
                <p className="max-h-[68vw] w-full leading-[2.39vw] tracking-[-2%] text-[##787F88]  text-[1.6vw] h-[3.5vw]">
                  Choose how much to pay each month above your monthly minimum
                  payment.
                </p>
              </div>
            </div>
            <ApplyButton />
          </div>
        </section>
      </div>
    </section>
  );
}

export default HowTo;
