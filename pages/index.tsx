import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [downloads, setDownloads] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const getTest = async () => {
    const res = await fetch("http://localhost:3000/api/getFlippItems", {
      method: "POST",
      body: JSON.stringify({ input }),
    });
    const { downloads } = await res.json();
    console.log("in app downloads: ", downloads);
    setDownloads(downloads);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={getTest} className="cursor-pointer hover:text-red-500">
        GET
      </button>
      {downloads && (
        <p className="text-lg">This package has {downloads} downloads</p>
      )}
    </main>
  );
}
