const StarIcon = () => (
  <svg
    className="w-[19.82px] h-[20.86px]" // Consistent size for all breakpoints
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3933 7.49602L14.1397 6.59161L11.3442 0.951908C11.2679 0.797497 11.1422 0.672497 10.9871 0.596516C10.5979 0.40534 10.125 0.564654 9.93045 0.951908L7.13494 6.59161L0.881364 7.49602C0.708954 7.52053 0.551321 7.60142 0.430634 7.72396C0.284729 7.8732 0.20433 8.07397 0.207101 8.28216C0.209872 8.49035 0.295587 8.68892 0.445412 8.83426L4.96995 13.224L3.90101 19.4225C3.87594 19.5667 3.89198 19.715 3.94729 19.8506C4.00261 19.9861 4.095 20.1036 4.21398 20.1896C4.33296 20.2756 4.47377 20.3267 4.62045 20.3371C4.76713 20.3475 4.91381 20.3168 5.04384 20.2485L10.6373 17.322L16.2308 20.2485C16.3835 20.3294 16.5609 20.3563 16.7308 20.3269C17.1594 20.2534 17.4475 19.849 17.3737 19.4225L16.3047 13.224L20.8293 8.83426C20.9524 8.71416 21.0337 8.5573 21.0583 8.38573C21.1248 7.95681 20.8243 7.55975 20.3933 7.49602Z"
      fill="url(#paint0_linear_128_585)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_128_585"
        x1="0.207031"
        y1="10.4273"
        x2="21.0675"
        y2="10.4273"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#17C95F" />
        <stop offset="1" stopColor="#138241" />
      </linearGradient>
    </defs>
  </svg>
);

function WhatPeopleSay({ review }) {
  return (
    <section
      className={`
        flex 
        flex-col 
        justify-start 
        items-start 
        p-7 
        gap-5 
        w-[260px] 
        h-[202.46px] 
        lg:p-4
        lg:gap-3
        lg:w-[200px]
        lg:h-[160px]
        bg-[#F4F5F8] 
        rounded-[17.7px] 
        flex-none 
        order-1 
        flex-grow-0
        ${review?.hidden ? "opacity-0" : ""}
      `}
    >
      <div className="h-[19.82px] w-[134px] flex items-center justify-start">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div
        className="
          flex 
          flex-col 
          justify-between 
          items-start 
          font-normal
          h-[107px] 
          w-[205.17px] 
          text-left 
          text-[12px] 
          leading-[17.69px]
          text-[#0E1E14]
          lg:h-[90px]
          lg:w-full
          lg:text-[11px]
          lg:leading-[16px]
        "
      >
        <p>{review?.text}</p>
        <p className="w-fit h-fit font-semibold">{review?.name}</p>
      </div>
    </section>
  );
}

export default WhatPeopleSay;
