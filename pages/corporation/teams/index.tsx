import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/teams/Hero";
import Tiles from "@/components/corporation/teams/Tiles";
import JoinTeamBanner from "@/components/corporation/_shared/JoinTeamBanner";
import Footer from "@/components/corporation/_shared/Footer";
const Teams = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tiles />
      <JoinTeamBanner />
      <Footer />
    </>
  );
};

export default Teams;
