import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/home/Hero";
import AboutUs from "@/components/corporation/home/AboutUs";
import OurPlatform from "@/components/corporation/home/OurPlatform";
import OurPartners from "@/components/corporation/home/OurPartners";
import CareerAndCulture from "@/components/corporation/home/CareerAndCulture";
import BottomBanner from "@/components/corporation/_shared/BottomBanner";
import Footer from "@/components/corporation/_shared/Footer";

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
