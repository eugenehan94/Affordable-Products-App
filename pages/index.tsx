import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import WeeklyAds from "@/components/home/WeeklyAds";
import Coupons from "@/components/home/Coupons";
import ShoppingList from "@/components/home/ShoppingList";
import Search from "@/components/home/Search";
import DownloadApp from "@/components/home/DownloadApp";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="px-4">
        <Hero />
        <WeeklyAds />
        <Coupons />
        <ShoppingList />
        <Search />
      </div>
      <DownloadApp />
      <Footer />
    </main>
  );
}
