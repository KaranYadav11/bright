import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    },
  ];
  return (
    <section className="max-w-[1920px] h-[549px] bg-white w-full max-h-[840px]  py-[60px] px-[32px] ">
      <div className="max-w-[296px] max-h-[429px]  mx-auto">
        <h2 className="text-[32px]  w-[296px0] h-[77px] tracking-[-4%] leading-[38px] text-[#030303] text-center">
          <span className="font-bold ">Frequently asked </span>
          <span className=" font-normal  ">questions</span>
        </h2>
        <hr className="h-[2px] max-w-[1415px] text-[#F4F5F8] w-[296px] my-[31px]"></hr>
        <div className="w-[296px] overflow-y-hidden h-[288px] flex items-center justify-start flex-col max-h-[384px]  ">
          {faqs.map((faq, index) => (
            <>
              <div
                key={index}
                className="w-[296px]   flex items-center justify-between select-none"
              >
                <p
                  className={` w-[234px] ${
                    faq.height ? "h-[24px]" : "h-[48px]"
                  }  leading-[24px]  cursor-pointer text-[#1E1F23] text-[16px] font-medium`}
                >
                  {faq.question}
                </p>
                {faq.check ? (
                  <Check className="size-[24px] " />
                ) : (
                  <X className="size-[24px] " />
                )}
              </div>
              <hr className="text-[#F4F5F8] w-[296px] h-[2px] my-[20px]"></hr>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
