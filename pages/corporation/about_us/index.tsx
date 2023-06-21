import Navbar from "@/components/corporation/Navbar";
import Hero from "@/components/corporation/about_us/Hero";
import OurMission from "@/components/corporation/about_us/OurMission";
import BottomBanner from "@/components/corporation/BottomBanner";
import Footer from "@/components/corporation/Footer";
const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurMission />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default aboutUs;
