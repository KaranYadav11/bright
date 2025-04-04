import GetStarted from "../components/GetStarted";
import card from "./../assets/card.png";

function CrushDebt() {
  return (
    <section className="max-w-[1920px] w-full overflow-hidden relative max-h-[480px] h-[480px] lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] bg-gradient-to-r from-[#E5F1E3] to-[#BAE8CB]">
      {/* Amber Background */}
      <div className="w-full h-full relative  flex items-center lg:justify-between justify-center">
        {/* Pink Text Container */}
        <div className="h-fit left-1/2 w-fit  max-w-[617px] gap-[12px] inline-flex flex-col absolute lg:static lg:translate-x-0 lg:translate-y-0 transform -translate-x-1/2 top-[60px] lg:top-auto lg:left-auto lg:order-1">
          <p className="text-[#0E1E14] text-[32px]  lg:text-[52px] leading-[38px] lg:leading-[72px] w-[296px] h-[77px] lg:h-fit lg:w-fit tracking-tight text-center lg:text-left">
            <span className="font-bold tracking-[-1px]">
              Crush Debt today<sup>1</sup>
            </span>
            <br />
            <span className="font-normal tracking-[-1px]">with Bright</span>
          </p>
          <GetStarted />
        </div>

        {/* Circle 1 */}
        <div className="absolute top-[392.22px] lg:hidden size-[238px] transform left-1/2 -translate-x-1/2 max-w-[433.9px] max-h-[433.9px] border-[1.07px] border-[#17C95F] rounded-full"></div>

        {/* Circle 2 */}
        <div className="absolute top-[336px] lg:hidden size-[349px] transform left-1/2 -translate-x-1/2 opacity-60 max-w-[635.74px] max-h-[635.74px] border-[0.53px] border-[#17C95F] rounded-full"></div>

        {/* Circle 3 */}
        <div className="absolute top-[271px] lg:hidden size-[480px] transform left-1/2 -translate-x-1/2 opacity-45 max-w-[875.21px] max-h-[875.21px] border-[0.27px] border-[#17C95F] rounded-full"></div>

        {/* Parent Container */}
        <div className="max-h-[480px] flex items-center justify-center max-w-[894px] w-fit h-[237px] lg:h-fit absolute left-1/2 bottom-0 -translate-x-1/2  lg:static lg:translate-x-0 lg:translate-y-0 lg:top-auto lg:left-auto lg:order-1">
          {/* New Circle 1 - Innermost */}
          <div className="absolute size-[238px] hidden xl:block md:size-[22.7vw] transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[433.9px] max-h-[433.9px] border-[1.07px] border-[#17C95F] rounded-full opacity-100"></div>

          {/* New Circle 2 - Middle */}
          <div className="absolute size-[349px] hidden xl:block md:size-[33.1vw] transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[635.74px] max-h-[635.74px] border-[0.53px] border-[#17C95F] rounded-full opacity-60"></div>

          {/* New Circle 3 - Outermost */}
          <div className="absolute size-[480px] hidden xl:block md:size-[45.6vw] transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[875.21px] max-h-[875.21px] border-[0.27px] border-[#17C95F] rounded-full opacity-45"></div>

          {/* Card Image */}
          <img
            src={card}
            alt="card"
            className="relative w-[360px] lg:w-[430px]  h-auto max-w-[517.55px] max-h-[479.91px]"
          />
        </div>
      </div>
    </section>
  );
}

export default CrushDebt;
