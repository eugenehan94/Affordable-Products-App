import Navbar from "@/components/corporation/Navbar";
import Hero from "@/components/corporation/news/Hero";
import NewsTiles from "@/components/corporation/news/NewsTiles";
import VisitOurBlog from "@/components/corporation/partners/VisitOurBlog";
import BottomBanner from "@/components/corporation/BottomBanner";
import Footer from "@/components/corporation/Footer";

const News = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsTiles />
      <VisitOurBlog />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default News;
