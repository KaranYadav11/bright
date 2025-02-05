import { ArrowRight } from "lucide-react";
import { sendGTMEvent } from "../utils";

const ApplyButton = () => {
  const handleClick = () => {
    sendGTMEvent("button_click", { button_text: "Apply Now" });
  };

  return (
    <button
      onClick={handleClick}
      className="flex apply cursor-pointer absolute max-h-[67px] h-[3.4vw] items-center justify-center left-0 bottom-0  gap-2 text-[#0E1E14] text-[1vw] font-bold "
    >
      Apply Now
      <ArrowRight className="w-5 h-5 text-[#17C95F]" />
    </button>
  );
};

export default ApplyButton;
