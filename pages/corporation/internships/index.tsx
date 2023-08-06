import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/internships/Hero";
import LookInside from "@/components/corporation/internships/LookInside";
import WeAreHiring from "@/components/corporation/internships/WeAreHiring";
import NotConvincedYet from "@/components/corporation/internships/NotConvincedYet";
import Timeline from "@/components/corporation/internships/Timeline";
import HiringProcess from "@/components/corporation/internships/HiringProcess";
import FAQ from "@/components/corporation/internships/FAQ";
import JoinTeamBanner from "@/components/corporation/_shared/JoinTeamBanner";
import Footer from "@/components/corporation/_shared/Footer";

const Internships = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LookInside />
      <WeAreHiring />
      <NotConvincedYet />
      <Timeline />
      <HiringProcess />
      <FAQ />
      <JoinTeamBanner />
      <Footer />
    </>
  );
};

export default Internships;
