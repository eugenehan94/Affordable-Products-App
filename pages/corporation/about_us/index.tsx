import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/about_us/Hero";
import OurMission from "@/components/corporation/about_us/OurMission";
import OurCulture from "@/components/corporation/about_us/OurCulture";
import TopEmployer from "@/components/corporation/about_us/TopEmployer";
import OurManagementTeam from "@/components/corporation/about_us/OurManagementTeam";
import OurPartners from "@/components/corporation/about_us/OurPartners";
import BottomBanner from "@/components/corporation/_shared/BottomBanner";
import Footer from "@/components/corporation/_shared/Footer";
const aboutUs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMission />
      <OurCulture />
      <TopEmployer />
      <OurManagementTeam />
      <OurPartners />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default aboutUs;
