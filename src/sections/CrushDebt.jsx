import GetStarted from "../components/GetStarted";
import card from "./../assets/card.png";

function CrushDebt() {
  return (
    <section className=" h-[480px] font-montserrat md:max-w-[1920px] overflow-hidden relative  max-h-[480px] sm:h-[25.26vw]  bg-gradient-to-r from-[#E5F1E3] to-[#BAE8CB]">
      {/* Text */}
      <div className="max-h-[169px]   max-w-[617px] absolute top-[60px] left-1/2 gap-[12px] inline-flex flex-col transform -translate-x-1/2">
        <p className="text-[#0E1E14] text-[32px] leading-[38px] w-[296px] h-[77px] tracking-tight text-center md:text-left md:text-[3.3vw]">
          <span className="font-bold font-montserrat tracking-[-1px] leading-[38px]">
            Crush Debt today<sup>1</sup>&nbsp;
          </span>
          <br />
          <span className="font-normal tracking-[-1px] leading-[38px]">
            with Bright
          </span>
        </p>
        <GetStarted />
      </div>

      {/* Circle 1 */}
      <div className="absolute top-[392.22px] size-[238px] xl:block md:size-[22.7vw] transform left-1/2 -translate-x-1/2  md:top-[1.21vw] md:left-[62.26vw] max-w-[433.9px] max-h-[433.9px] border-[1.07px] border-[#17C95F] rounded-full"></div>

      {/* Circle 2 */}
      <div className="absolute transform left-1/2 -translate-x-1/2 size-[349px] xl:block md:size-[33.1vw] opacity-60 top-[336px] md:top-[-4.06vw] md:left-[57vw] max-w-[635.74px] max-h-[635.74px] border-[0.53px] border-[#17C95F] rounded-full"></div>

      {/* Circle 3 */}
      <div className="absolute size-[480px] border-[0.27px] top-[271px] transform left-1/2 -translate-x-1/2 xl:block md:size-[45.6vw] opacity-45 md:top-[-10.38vw] md:left-[50.68vw] max-w-[875.21px] max-h-[875.21px] border-[#17C95F] rounded-full"></div>

      {/* Card Image */}
      <div className="max-h-[480px]  flex items-center justify-center max-w-[894px] md:h-[25.26vw] md:w-[47.05vw] w-full h-[237px] absolute  left-1/2  transform -translate-x-1/2   bottom-0 md:top-0 md:left-[50.15vw]">
        <img
          src={card}
          alt="card"
          className="md:w-[27vw] w-[360px] h-auto max-w-[517.55px] max-h-[479.91px]"
        />
      </div>
    </section>
  );
}

export default CrushDebt;
