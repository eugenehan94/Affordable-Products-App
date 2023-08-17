import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/partners/Hero";
import OurRetailPartners from "@/components/corporation/partners/OurRetailPartners";
import OurCpgPartners from "@/components/corporation/partners/OurCpgPartners";
import TestimonialSlider from "@/components/corporation/partners/TestimonialSlider";
import VisitOurBlog from "@/components/corporation/_shared/VisitOurBlog";
import BottomBanner from "@/components/corporation/_shared/BottomBanner";
import Footer from "@/components/corporation/_shared/Footer";

const OurPartners = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurRetailPartners />
      <OurCpgPartners />
      <TestimonialSlider />
      <VisitOurBlog />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default OurPartners;
