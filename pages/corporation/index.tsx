import Navbar from "@/components/corporation/Navbar";
import Hero from "@/components/corporation/Hero";
import AboutUs from "@/components/corporation/AboutUs";
import OurPlatform from "@/components/corporation/OurPlatform";
import OurPartners from "@/components/corporation/OurPartners";
import CareerAndCulture from "@/components/corporation/CareerAndCulture";
import BottomBanner from "@/components/corporation/BottomBanner";
import Footer from "@/components/corporation/Footer";

const Corporation = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurPlatform />
      <OurPartners />
      <CareerAndCulture />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default Corporation;
