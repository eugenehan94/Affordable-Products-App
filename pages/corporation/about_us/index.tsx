import Navbar from "@/components/corporation/Navbar";
import Hero from "@/components/corporation/about_us/Hero";
import BottomBanner from "@/components/corporation/BottomBanner";
import Footer from "@/components/corporation/Footer";
const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default aboutUs;
