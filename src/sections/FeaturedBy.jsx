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
    <div className=" bg-[#F4F5F8] flex items-center justify-center py-[2.7vw] max-w-[1920px] w-full max-h-[155.95px] h-[8vw]">
      <div className="flex items-center justify-between max-w-[1158.11px] w-full max-h-[52px] h-[2.7vw]">
        <p className="text-[#959AA5] tracking-[2%] text-[.9vw] font-bold">
          AS FEATURED BY
        </p>
        {featuredLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-6 md:h-8 lg:h-10 object-contain opacity-80 "
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedBy;
