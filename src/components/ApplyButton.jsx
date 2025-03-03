import { ArrowRight } from "lucide-react";
import { sendGTMEvent } from "../utils";

const ApplyButton = () => {
  const handleClick = () => {
    sendGTMEvent("button_click", { button_text: "Apply Now" });
  };

  return (
    <button
      onClick={handleClick}
      className="flex apply cursor-pointer absolute h-[44px] items-center justify-center left-0 bottom-0  gap-[16px] text-[#0E1E14] text-[16px] font-bold "
    >
      Apply Now
      <ArrowRight className="size-[24px] text-[#17C95F]" />
    </button>
  );
};

export default ApplyButton;
