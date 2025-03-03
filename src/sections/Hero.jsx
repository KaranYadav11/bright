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
    <header className="w-full h-[594px] bg-gradient-to-br from-[#E3F1E7] to-[#FEEFC7]  ">
      <Navbar />
      <div className=" w-[296px]  h-[295.28px] flex flex-col  gap-[24px] mx-auto absolute top-[89px] left-1/2 transform -translate-x-1/2">
        <div className="w-full h-[115px] leading-[38px] text-[32px] text-center tracking-[-1px] ">
          <h1 className=" font-bold ">Pay off Credit Cards</h1>
          <h1 className=" font-normal">with a single monthly payment</h1>
        </div>

        <div className="w-full h-[92.28px] flex flex-col gap-[24px] items-start justify-center ">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="w-fit h-fit flex items-center justify-center gap-[17.94px]"
              >
                <Check />
                <h3 className="text-[#0E1E14] font-medium text-[14.35px] tracking-[-2%]">
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
