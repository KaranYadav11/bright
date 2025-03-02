import card from "./../assets/card.png";

function CrushDebt() {
  return (
    <section className=" h-[480px] md:max-w-[1920px] overflow-hidden relative  max-h-[480px] sm:h-[25.26vw]  bg-gradient-to-r from-[#E5F1E3] to-[#BAE8CB]">
      {/* Text */}
      <div className="max-h-[169px]   max-w-[617px] absolute top-[60px] left-1/2 gap-[12px] inline-flex flex-col transform -translate-x-1/2">
        <p className="text-[#0E1E14] text-[32px] leading-[38px] w-[296px] h-[77px] tracking-tight text-center md:text-left md:text-[3.3vw]">
          <span className="font-bold tracking-[-2px] leading-[4.4vw]">
            Crush Debt today<sup>1</sup>&nbsp;
          </span>
          <br />
          <span className="font-normal tracking-[-2px] leading-[4.4vw]">
            with Bright
          </span>
        </p>
        <button className="h-[40px] w-[296px] rounded-[11px] bg-[#0E1E14] flex items-center justify-center gap-[10px] cursor-pointer">
          <h4 className="text-white text-[14px] font-semibold leading-[24px] inline-block">
            Get Started
          </h4>
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.8516" r="12" fill="white" />
            <path
              d="M16.5693 12.5915C16.5366 12.5071 16.4875 12.43 16.4249 12.3646L12.9871 8.92682C12.923 8.86271 12.8469 8.81186 12.7631 8.77716C12.6794 8.74247 12.5896 8.72461 12.4989 8.72461C12.3158 8.72461 12.1402 8.79735 12.0107 8.92682C11.9466 8.99092 11.8958 9.06703 11.8611 9.15079C11.8264 9.23455 11.8085 9.32432 11.8085 9.41499C11.8085 9.59809 11.8813 9.77369 12.0107 9.90316L14.2797 12.1652H9.0611C8.87875 12.1652 8.70386 12.2377 8.57492 12.3666C8.44597 12.4956 8.37354 12.6705 8.37354 12.8528C8.37354 13.0352 8.44597 13.21 8.57492 13.339C8.70386 13.4679 8.87875 13.5404 9.0611 13.5404H14.2797L12.0107 15.8025C11.9463 15.8664 11.8952 15.9424 11.8602 16.0262C11.8253 16.11 11.8074 16.1999 11.8074 16.2906C11.8074 16.3814 11.8253 16.4713 11.8602 16.555C11.8952 16.6388 11.9463 16.7149 12.0107 16.7788C12.0747 16.8432 12.1507 16.8944 12.2345 16.9293C12.3183 16.9642 12.4082 16.9822 12.4989 16.9822C12.5897 16.9822 12.6796 16.9642 12.7633 16.9293C12.8471 16.8944 12.9232 16.8432 12.9871 16.7788L16.4249 13.341C16.4875 13.2756 16.5366 13.1985 16.5693 13.1141C16.6381 12.9467 16.6381 12.7589 16.5693 12.5915Z"
              fill="#0E1E14"
            />
          </svg>
        </button>
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
