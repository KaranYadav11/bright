function Footer() {
  const data = [
    {
      subtitle:
        "Revolving line of credit ranging from $500-$8,000 to help repay credit cards. Variable APR range from 9% –29.99%. Subject to Credit Approval. Final terms may vary depending on credit review, not all applicants will qualify for full loan amount. Not all applicants qualify for the lowest rate. Bright may also offer Personal Loans made by our referral partners. Bright Credit is line of credit and not a credit or debit card.",
    },
    {
      subtitle:
        "When you check your rates for Bright Credit we initiate a “soft pull” of your credit. This will NOT impact your credit score. If you’re approved and activate Bright Credit we may do a hard inquiry which may affect you credit score.",
    },
    {
      subtitle:
        "Bright uses standard industry practices to determine our customer satisfaction score. It's a metric used in all kinds of businesses to measure customer service and product quality. Businesses calculate their score by taking the number of satisfied customers (those who rated them 4 or higher) and dividing it by the total number of responses.",
    },
  ];

  return (
    <footer className="bg-white max-w-[1920px] w-full py-[60px] px-[32px] inline-flex items-center justify-center lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] ">
      <div className="flex flex-col  items-center justify-start gap-4 lg:gap-6 w-full">
        <section className="w-full h-fit leading-[100%] tracking-[0%] align-middle text-[12px] lg:text-[14px] flex items-start justify-between flex-col ">
          <p className="text-[#787F88] ">2024 Bright Capital Inc.</p>
          <br />
          <p className="text-[#787F88] ">
            Revolving lines of credit are made by CBW Bank, Member FDIC, and
            Bright Capital Inc., NMLS (2410428), subject to state residency.
            Personal loans are made by our referral partners independent of
            Bright. Deposit accounts are provided by Evolve Bank & Trust or CBW
            Bank, Members FDIC.{" "}
            <span className="underline">
              Bright is a financial technology company and non-depository
              lender, not a bank.
            </span>
          </p>
        </section>
        <section className="w-full h-fit flex flex-col items-start justify-between text-[#787F88] text-[12px] lg:text-[14px] leading-[100%] tracking-[0%] align-middle ">
          <ul className="space-y-2">
            {data.map((item, index) => (
              <li
                key={index}
                className="
               "
              >
                {index + 1}. {item.subtitle}
              </li>
            ))}
          </ul>

          <p className="mt-4">
            The product images shown are for illustration purposes only.
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
