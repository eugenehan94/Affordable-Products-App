import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/platforms/Hero";
import ForRetailers from "@/components/corporation/platforms/ForRetailers";
import ForBrands from "@/components/corporation/platforms/ForBrands";
import ForPublishers from "@/components/corporation/platforms/ForPublishers";
import BottomBanner from "@/components/corporation/_shared/BottomBanner";
import Footer from "@/components/corporation/_shared/Footer";
const Platforms = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ForRetailers />
      <ForBrands />
      <ForPublishers />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default Platforms;
