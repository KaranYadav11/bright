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
      check: true,
    },
    {
      question: "Do I need to pay interest fees?",
      answer: "No, there are no interest fees associated with your account.",
      isOpen: false,
      check: false,
    },
    {
      question: "Is there a hard pull on the credit report?",
      answer:
        "No, we only do a soft pull which does not impact your credit score.",
      isOpen: false,
      check: false,
    },
    {
      question: "Do you report to Equifax and TransUnion?",
      answer:
        "Yes, we report to major credit bureaus including Equifax and TransUnion.",
      isOpen: false,
      check: true,
    },
  ];
  return (
    <section className="max-w-[1918px] h-full bg-white w-full max-h-[840px]  md:h-[44.2vw] px-[13.26vw] py-[6.3vw] ">
      <div className="max-w-[1415px] max-h-[600px] h-[31.57vw]  mx-auto">
        <h2 className="text-[3.36vw] w-full max-h-[72px] tracking-[-4%] text-[#0E1E14] text-center">
          <span className="font-bold leading-[3.75vw] w-[">
            Frequently asked{" "}
          </span>
          <span className=" font-normal leading-[3.75vw] ">questions</span>
        </h2>
        <div className="h-[2px] max-w-[1415px] bg-[#D5D7DB] w-full my-[3.75vw]"></div>
        <div className="max-w-[1414px] space-y-[0vw] flex items-center justify-start flex-col max-h-[384px] w-full h-[20vw] ">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full select-none">
              {/* FAQ Item */}
              <div className="font-medium max-w-[1413px] flex flex-col items-center justify-start leading-[2.5vw] text-[#030303] text-[1.25vw] max-h-[48px] h-[2.5vw] w-full">
                <div className="flex justify-between items-center max-w-[1413px]  max-h-[48px] h-[2.5vw] w-full ">
                  <p
                    onClick={() => toggleFAQ(index)}
                    className="max-w-[1066px] leading-[2.5vw] cursor-pointer text-[#030303] text-[1.25vw] font-medium"
                  >
                    {faq.question}
                  </p>
                  {openIndex === index ? (
                    <ChevronDown size={24} />
                  ) : faq.check !== true ? (
                    <X size={24} />
                  ) : (
                    <Check size={24} />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <p
                  onClick={() => toggleFAQ(index)}
                  className="max-w-[1066px] leading-[2.5vw]  cursor-pointer text-[#03030380] text-[1.25vw] font-medium "
                >
                  {faq.answer}
                </p>
              )}
              {index !== faqs.length - 1 && (
                <div className="h-[1.4px] max-w-[1414px] bg-[#D5D7DB] w-full my-[1.25vw]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
