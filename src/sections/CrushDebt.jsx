import card from "./../assets/card.png";

function CrushDebt() {
  return (
    <section className="max-w-[1920px] overflow-hidden  h-[480px] relative  max-h-[480px] sm:h-[25.26vw] w-full bg-gradient-to-r from-[#E5F1E3] to-[#BAE8CB]">
      {/* Text */}
      <div className="max-h-[169px] max-w-[617px]  w-[296px] h-[129px] sm:w-auto sm:h-auto absolute top-[8.19vw] left-[13.33vw]">
        <p className="text-[#0E1E14] text-3xl leading-10  text-center md:text-left md:text-[3.3vw]">
          <span className="font-bold tracking-[-2px] leading-[4.4vw]">
            Crush Debt today<sup>1</sup>&nbsp;
          </span>
          <br />
          <span className="font-normal tracking-[-2px] leading-[4.4vw]">
            with Bright
          </span>
        </p>
      </div>

      {/* Circle 1 */}
      <div className="absolute hidden xl:block size-[22.7vw] top-[1.21vw] left-[62.26vw] max-w-[433.9px] max-h-[433.9px] border-[0.054vw] border-[#17C95F] rounded-full"></div>

      {/* Circle 2 */}
      <div className="absolute hidden xl:block size-[33.1vw] opacity-60 top-[-4.06vw] left-[57vw] max-w-[635.74px] max-h-[635.74px] border-[0.0278vw] border-[#17C95F] rounded-full"></div>

      {/* Circle 3 */}
      <div className="absolute hidden xl:block size-[45.6vw] opacity-45 top-[-10.38vw] left-[50.68vw] max-w-[875.21px] max-h-[875.21px] border-[0.0142vw] border-[#17C95F] rounded-full"></div>

      {/* Card Image */}
      <div className="max-h-[480px]  flex items-center justify-center max-w-[894px] md:h-[25.26vw] md:w-[47.05vw] w-full h-[237px] absolute  left-1/2  transform -translate-x-1/2   bottom-0 md:top-0 md:left-[50.15vw]">
        <img
          src={card}
          alt="card"
          className="md:w-[27vw] w-[300px] h-auto max-w-[517.55px] max-h-[479.91px]"
        />
      </div>
    </section>
  );
}

export default CrushDebt;
