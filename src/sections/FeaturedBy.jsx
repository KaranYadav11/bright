import bloomberg from "../assets/images/bloomberg.png";
import cheddar from "../assets/images/cheddar.png";
import yahoo from "../assets/images/yahoo.png";
import fortune from "../assets/images/fortune.png";
import cnbc from "../assets/images/cnbc.png";

const featuredLogos = [
  { src: bloomberg, alt: "Bloomberg" },
  { src: yahoo, alt: "Yahoo! Finance" },
  { src: fortune, alt: "Fortune" },
  { src: cheddar, alt: "Cheddar" },
  { src: cnbc, alt: "CNBC" },
];

function FeaturedBy() {
  return (
    <div
      className="
        flex 
        flex-col 
        justify-center 
        items-center 
        px-8 
        py-3 
        lg:h-[8.125vw]
        gap-[2px] 
        w-full
        h-[38.35px] 
        bg-[#F4F5F8] 
        flex-none 
        order-1 
        flex-grow-0
      "
    >
      <div
        className="

          flex 
          flex-row 
          justify-between 
          items-center 
          w-[324px] 
          lg:w-fit
          h-[14.35px]
          lg:h-[2.7vw]
          lg:gap-16
        "
      >
        <p
          className="
            text-[#959AA5] 
            tracking-[0.02em] 
            leading-[6.78px] 
            text-[5.61px] 
            font-bold 
            w-[46.89px] 
            lg:w-[8.125vw]
            h-[6.41px] 
            lg:text-[0.9vw]
            lg:h-fit
            lg:tracking-wide
          "
        >
          AS FEATURED BY
        </p>
        {featuredLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="
              h-[14.35px] 
              lg:h-[35px]
              w-[auto]
              lg:mr-6
              object-contain 
              opacity-80
            "
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedBy;
