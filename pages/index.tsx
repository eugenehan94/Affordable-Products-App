// import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeeklyAds from "@/components/WeeklyAds";
import Coupons from "@/components/Coupons";

export default function Home() {
  // const [downloads, setDownloads] = useState<string>("");
  // const [input, setInput] = useState<string>("");
  // const getTest = async () => {
  //   const res = await fetch("http://localhost:3000/api/getFlippItems", {
  //     method: "POST",
  //     body: JSON.stringify({ input }),
  //   });
  //   const { downloads } = await res.json();
  //   console.log("in app downloads: ", downloads);
  //   setDownloads(downloads);
  // };
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WeeklyAds />
      <Coupons />
      {/* <Navbar></Navbar> */}
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      {/* <button onClick={getTest} className="cursor-pointer hover:text-red-500">
        GET
      </button>
      {downloads && (
        <p className="text-lg">This package has {downloads} downloads</p>
      )} */}
    </main>
  );
}
