import Check from "../assets/Check";
import Navbar from "../components/Navbar";
import Main from "./Main";

function Hero() {
  const data = [
    {
      subtitle: "Credit line upto $8000",
    },
    {
      subtitle: "No impact on the score to check rates",
    },
    {
      subtitle: "Sign up in 2 mins",
    },
  ];
  return (
    <header className="w-full max-w-[1920px] max-h-[1230px] min-h-screen bg-gradient-to-br from-[#E3F1E7] to-[#FEEFC7]  ">
      <Navbar />
      <div className="max-w-[1330px] w-[70vw] flex flex-col  gap-[3.7vw] mx-auto absolute top-[10vw] left-1/2 transform -translate-x-1/2 h-[15.2vw] max-h-[289px]">
        {/* <div className="flex  max-h-[193px] h-[10vw] items-center justify-center leading-[5vw] flex-col ">
          <h1 className="text-[4.8vw] font-bold text-[#0E1E14]">
            Pay off Credit Cards
          </h1>
          <h1 className="text-[#0E1E14] text-[4.8vw] font-light">
            with a single monthly payment
          </h1>
        </div> */}
        {/* <div className=" max-w-[1200px] w-[63vw] h-[1.26vw] max-h-[24px] mx-auto flex items-center  justify-between space-x-[4.2vw]">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-fit max-w-[339px] max-h-[24px] h-[1.26vw] flex items-center justify-cemter space-x-[1.47vw] "
            >
              <Check />
              <h3 className="text-[#0E1E14]  text-[1.2vw] tracking-tighter max-w-[283px] max-h-[24px] w-fit h-[1.2vw] leading-[1.2vw]">
                {item?.subtitle}
              </h3>
            </div>
          ))}
        </div> */}
      </div>
      <Main />
    </header>
  );
}

export default Hero;
