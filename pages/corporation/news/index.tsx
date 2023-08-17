import Navbar from "@/components/corporation/_shared/Navbar";
import Hero from "@/components/corporation/news/Hero";
import NewsTiles from "@/components/corporation/news/NewsTiles";
import VisitOurBlog from "@/components/corporation/_shared/VisitOurBlog";
import BottomBanner from "@/components/corporation/_shared/BottomBanner";
import Footer from "@/components/corporation/_shared/Footer";

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
