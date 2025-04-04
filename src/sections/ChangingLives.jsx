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
  {
    name: "Tom",
    hidden: true,
    text: "Thank you to Bright for helping me improve my credit and eliminating my debt. The customer service is super helpful. Appreciate the journey.",
  },
];

function ChangingLives() {
  return (
    <section
      className="
        max-w-[1920px] 
        flex 
        bg-red-700
        items-center 
        justify-center 
        w-full 
       
        px-[32px]
        py-[60px] 
        overflow-x-hidden
lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] 
      "
    >
      <div
        className="
        bg-pink-500
          w-full 
          flex 
          flex-col 
          items-center 
          justify-start 
          h-fit
        "
      >
        <div className="h-[136px bg-yellow-600 gap-3 text-[##0E1E14] flex  flex-col items-center justify-center w-full  mb-[31px]  lg:mb-12">
          <h2
            className="
              text-[32px] 
              h-[76px] 
              leading-[38px] 
              tracking-[-1px] 
              font-bold 
              text-center
              lg:text-[52px]
              lg:leading-[40px]
            "
          >
            Changing lives <span className="inline-block">every day.</span>
          </h2>
          <h3
            className="
              text-[16px] 
              w-full 
              leading-6 
              h-[48px] 
              font-normal 
              text-center
              tracking-tight
              lg:text-[20px]
              lg:leading-[40px]
            "
          >
            See how Bright users<sup>3</sup> reached financial well-being.
          </h3>
        </div>
        <hr className="h-[2px] text-[#D5D7DB] max-w-[1414.67px] w-full my-[31px] md:hidden" />
        <div
          className="
          bg-purple-500
            w-full
            overflow-x-scroll 
            snap-x 
            snap-proximity 
            scrollbar-hide 
            h-[202.46px] 
            flex 
            flex-row 
            items-center 
            justify-start 
            gap-8 
            self-start
          "
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <WhatPeopleSay review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChangingLives;
