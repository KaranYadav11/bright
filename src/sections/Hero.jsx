import Check from "../assets/Check";
import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";

function Hero() {
  const data = [
    {
      subtitle: "Credit line upto $8000",
    },
    {
      subtitle: "No impact on the score to check rates²",
    },
    {
      subtitle: "Sign up in 2 mins",
    },
  ];
  return (
    <header className="w-full h-[594px]   lg:h-[40vw] bg-gradient-to-br from-[#E3F1E7] to-[#FEEFC7] px-[32px] py-[60px] lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] ">
      <Navbar />
      <div className=" w-full mt-10  h-fit lg:h-fit flex flex-col items-center gap-[50px] lg:gap-[3.75vw] mx-auto ">
        <div className=" w-[296px] lg:w-fit h-[115px] lg:h-fit leading-[38px] lg:leading-[5vw] lg:text-[#0E1E14]  text-[32px] lg:text-[80px]  text-center tracking-[-1px] ">
          <h1 className="font-bold ">Pay off Credit Cards</h1>
          <h1 className="font-normal">with a single monthly payment</h1>
        </div>

        <div className=" w-[296px] lg:w-fit h-[92.28px] lg:h-fit flex flex-col  lg:flex-row lg:items-center lg:gap-[4.16vw] gap-[24px] items-start justify-center ">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="w-fit h-fit flex items-center justify-center  gap-[17.94px]"
              >
                <Check />
                <h3 className="text-[#0E1E14] font-medium text-[14.35px] lg:text-[1.25vw] tracking-[-2%]">
                  {data.subtitle}
                </h3>
              </div>
            );
          })}
        </div>
        <GetStarted />
      </div>
    </header>
  );
}

export default Hero;
