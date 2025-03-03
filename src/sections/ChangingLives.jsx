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
        bg-white 
        items-center 
        justify-center 
        w-full 
        h-[522.46px] 
        px-8 
        py-[60px] 
        overflow-x-hidden
      "
    >
      <div
        className="
          w-[296px] 
          flex 
          flex-col 
          items-center 
          justify-start 
          h-[402.46px]
        "
      >
        <div
          className="
            h-[136px] 
            gap-3 
            text-[#030303] 
            flex 
            flex-col 
            items-center 
            justify-center 
            w-full
          "
        >
          <h2
            className="
              text-[32px] 
              h-[76px] 
              leading-[38px] 
              tracking-[-1px] 
              font-bold 
              text-center
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
            "
          >
            See how Bright users<sup>3</sup> reached financial well-being.
          </h3>
        </div>
        <hr className="h-[2px] text-[#D5D7DB] w-[296px] my-[31px]" />
        <div
          className="
            w-[552px] 
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
