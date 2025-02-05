import coin from "../assets/images/coin.png";
import secure from "../assets/images/secure.png";
import bank from "../assets/images/bank.png";

function WhyPay() {
  return (
    <section className="max-w-[1920px] bg-white w-full  flex items-center justify-center h-[28.5vw] max-h-[547.8px] px-[13.26vw] py-[6.3vw]">
      <div
        className="max-w-[1416px] w-full 
       flex flex-col items-start justify-between h-[16vw] max-h-[308px] "
      >
        <div className="w-full max-h-[72px] h-[3.75vw] ">
          <h2 className="text-[#0E1E14] font-bold text-center tracking-[-4%] text-[3.33vw] leading-[3.75vw]">
            Why pay off cards{" "}
            <span className="leading-[3.75vw] font-normal">with Bright?</span>
          </h2>
        </div>

        <div className="h-[2.6px] max-w-[1414px]  bg-[#D5D7DB] w-full my-[3.75vw] "></div>
        <div className="max-h-[91.8px] flex items-center  justify-between h-[4.7vw]  w-full">
          <div className="max-w-[450px] w-[23.4vw] flex items-center justify-start  h-full">
            <img
              src={bank}
              className="w-auto h-full object-contain"
              alt="bank"
            />
            <p className="text-[#787F88] tracking-[-2%] leading-[1.5vw]  max-w-[266px] w-[13.85vw] text-left font-medium text-[1.25vw]">
              Accepts all major bank cards
            </p>
          </div>
          <div className="max-w-[450px] w-[23.4vw] flex items-center justify-start h-full">
            <img
              src={coin}
              alt="coin"
              className="w-auto h-full object-contain"
            />
            <p className="text-[#787F88] tracking-[-2%] max-w-[266px] leading-[1.5vw]  w-[13.85vw] text-left font-medium text-[1.25vw]">
              Affordable monthly payments
            </p>
          </div>
          <div className="max-w-[450px] w-[23.4vw] flex items-center justify-start h-full">
            <img
              src={secure}
              alt="secure"
              className="w-auto h-full object-contain"
            />
            <p className="text-[#787F88] tracking-[-2%] leading-[1.5vw] max-w-[266px] w-[13.85vw] text-left font-medium text-[1.25vw]">
              100% data security - 256-bit encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPay;
