import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/culture/Hero";
import CultureDescription from "@/components/corporation/culture/CultureDescription";
import CulturalValues from "@/components/corporation/culture/CulturalValues";
import CulturalPrinciples from "@/components/corporation/culture/CulturalPrinciples";
import LearnMore from "@/components/corporation/culture/LearnMore";
import TrustedPartners from "@/components/corporation/culture/TrustedPartners";
import PerksAndBenefits from "@/components/corporation/culture/PerksAndBenefits";
import ALookInside from "@/components/corporation/culture/ALookInside";
import SocialMedia from "@/components/corporation/culture/SocialMedia";
import JoinTeamBanner from "@/components/corporation/_shared/JoinTeamBanner";
import Footer from "@/components/corporation/_shared/Footer";
const Culture = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CultureDescription />
      <CulturalValues />
      <CulturalPrinciples />
      <LearnMore />
      <TrustedPartners />
      <PerksAndBenefits />
      <ALookInside />
      <SocialMedia />
      <JoinTeamBanner />
      <Footer />
    </>
  );
};

export default Culture;
