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
    <footer className="bg-[#FFFFFF] max-w-[1920px] w-full flex items-center justify-center h-[27.5vw] max-h-[523px] px-[13.26vw] py-[6.3vw]">
      <div className="flex flex-col items-center justify-start gap-[1.89vw] max-w-[1413px] h-[14.89vw] max-h-[283px] w-[74.3vw]">
        <section className="w-full max-h-[76px] flex items-start justify-between flex-col h-[4vw]">
          <p className="text-[#787F88] text-[.84vw] leading-[.94vw]">
            2024 Bright Capital Inc.
          </p>
          <br />
          <p className="text-[#787F88] text-[.84vw] leading-[.94vw]">
            Revolving lines of credit are made by CBW Bank, Member FDIC, and
            Bright Capital Inc., NMLS (2410428), subject to state residency.
            Personal loans are made by our referral partners independent of
            Bright. Deposit accounts are provided by Evolve Bank & Trust or CBW
            Bank, Members FDIC.{" "}
            <span className="text-decoration-line: underline">
              Bright is a financial technology company and non-depository
              lender, not a bank.
            </span>
          </p>
        </section>

        <section className="w-full flex flex-col items-start justify-between max-h-[171px] h-[9vw] text-[#787F88] text-[.84vw] leading-[.94vw]">
          <ul>
            {data.map((item, index) => (
              <li key={index} className="text-[.84vw] leading-[.94vw]">
                {index + 1}. {item.subtitle}
              </li>
            ))}
          </ul>

          <p>The product images shown are for illustration purposes only.</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
