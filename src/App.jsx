import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import FaqSection from "./sections/FaqSection";
import ChangingLives from "./sections/ChangingLives";
import FeaturedBy from "./sections/FeaturedBy";
import WhyPay from "./sections/WhyPay";
import HowTo from "./sections/HowTo";
import CrushDebt from "./sections/CrushDebt";

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <WhyPay />
      <FeaturedBy />
      <HowTo />
      <ChangingLives />
      <FaqSection />
      <CrushDebt />
      <Footer />
    </div>
  );
}

export default App;
