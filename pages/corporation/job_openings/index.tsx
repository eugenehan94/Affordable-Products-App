import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/job_openings/Hero";
import Description from "@/components/corporation/job_openings/Description";
import JobBoard from "@/components/corporation/job_openings/JobBoard";
import JoinTeamBanner from "@/components/corporation/_shared/JoinTeamBanner";
import Footer from "@/components/corporation/_shared/Footer";
const JobOpening = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <JobBoard />
      <JoinTeamBanner />
      <Footer />
    </>
  );
};

export default JobOpening;
