import WhatPeopleSay from "../components/WhatPeopleSay";
const reviews = [
  {
    name: "Anmol Singh",
    text: "To pay off my credit card debt I’m using Bright money App. It’s really easy to use and their customer service is excellent. They are helpful.",
  },
  {
    name: "Lance Nelson",
    text: "Bright money is willing to invest their time and get you a financial plan. Increase your score and reduce your debt in all in one App.",
  },
  {
    name: "Sergio Lopez",
    text: "If you’re looking to get your score better - this is the App that will help and guide you. You’ll be with better score in few months. Get it.",
  },
  {
    name: "Todd Curry",
    text: "I recommend the Bright App to everybody. It helped me cut down on my credit card debt, help me save for car, vacation. Next we’re saving for house.",
  },
  {
    name: "Tom",
    text: "Thank you to Bright for helping me improve my credit and eliminating my debt. The customer service is super helpful. Appreciate the journey.",
  },
];

function ChangingLives() {
  return (
    <div className="max-w-[1920px]  w-full max-h-[675px] h-[35.5vw] px-[13.26vw] py-[6.3vw] bg-white">
      <div className="max-w-[1476px] flex flex-col items-center justify-between max-h-[435px] h-[22.6vw] w-full">
        <div className="max-w-[1468px] text-[#0E1E14] flex items-center justify-center space-y-2 flex-col max-h-[144px] h-[7.5vw] w-full">
          <h2 className="text-[3.3vw] tracking-[-4%]  font-bold leading-[2.6vw] text-center">
            Changing lives every day.
          </h2>
          <p className="text-[1.25vw] font-normal leading-[2.6vw] tracking-[-4%] text-center">
            See how Bright users<sup>3</sup> reached financial well-being.
          </p>{" "}
        </div>
        <div className=" flex items-center justify-between max-h-[219px] max-w-[1476px] w-full h-[11.4vw]">
          {reviews.map((review, index) => (
            <WhatPeopleSay key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChangingLives;
