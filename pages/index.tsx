import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeeklyAds from "@/components/WeeklyAds";
import Coupons from "@/components/Coupons";
import ShoppingList from "@/components/ShoppingList";
import Search from "@/components/Search";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WeeklyAds />
      <Coupons />
      <ShoppingList />
      <Search />
      <DownloadApp />
      <Footer />
    </main>
  );
}
