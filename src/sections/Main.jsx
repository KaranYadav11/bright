import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["Get Your CreditLine", "With 0 Fees", "Apply Now"];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" max-w-[1412px] overflow-hidden max-h-[800px] w-[74.3vw] h-[18.10vw] bg-transparent rounded-[4.2vw] mx-auto absolute top-[29.4vw] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      {/* Slide Text */}
      <h2 className="text-[4.8vw] font-bold text-[#0E1E14] transition-all duration-500">
        {slides[currentIndex]}
      </h2>

      {/* Previous Button */}
      <button onClick={prevSlide} className="absolute cursor-pointer left-4 ">
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button onClick={nextSlide} className="absolute cursor-pointer right-4  ">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default Main;
