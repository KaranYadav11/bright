// import { useState } from "react";
import { Check, X } from "lucide-react";

function FaqSection() {
  // const [openIndex, setOpenIndex] = useState(null);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const faqs = [
    {
      question: "Can I pay off or close my account anytime?",
      answer:
        "Yes, you can pay off or close your account at any time without penalty.",
      isOpen: true,
      height: false,
      check: true,
    },
    {
      question: "Do I need to pay interest fees?",
      answer: "No, there are no interest fees associated with your account.",
      isOpen: false,
      height: true,
      check: false,
    },
    {
      question: "Is there a hard pull on the credit report?",
      answer:
        "No, we only do a soft pull which does not impact your credit score.",
      isOpen: false,
      height: false,
      check: false,
    },
    {
      question: "Do you report to Equifax and TransUnion?",
      answer:
        "Yes, we report to major credit bureaus including Equifax and TransUnion.",
      isOpen: false,
      check: true,
      height: false,
      last: true,
    },
  ];
  return (
    <section className="max-w-[1920px] bg-white w-full px-[32px] py-[60px] lg:py-[calc(3.85vw+46px)] lg:px-[calc(14.1vw-19px)] ">
      <div className="max-w-full h-fit bg-pink-600   mx-auto">
        <h2 className="text-[32px] lg:text-[52px] tracking-[-4%] leading-[38px] lg:leading-15 lg:text-[#0E1E14] text-[#030303] text-center">
          <span className="font-bold ">Frequently asked </span>
          <span className=" font-normal  ">questions</span>
        </h2>
        <hr className="h-[2px] max-w-[1414.67px] w-full text-[#F4F5F8] mx-auto my-[31px] lg:my-12"></hr>
        <div className="w-full overflow-y-hidden  flex items-center justify-start flex-col  ">
          {faqs.map((faq, index) => (
            <>
              <div
                key={index}
                className=" w-full flex items-center justify-between select-none"
              >
                <p
                  className={` w-fit h-fit  leading-[24px] lg:leading-9 cursor-pointer text-[#1E1F23] text-[16px] lg:text-xl font-medium`}
                >
                  {faq.question}
                </p>
                {faq.check ? (
                  <Check className="h-auto w-[17.22px] lg:w-[28px]" />
                ) : (
                  <X className="h-auto w-[17.22px] lg:w-[28px]" />
                )}
              </div>
              {!faq?.last && (
                <hr className="text-[#F4F5F8] w-full h-[2px] my-[20px] lg:my-6"></hr>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
