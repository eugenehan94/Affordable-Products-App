/* https://github.com/vercel/next.js/discussions/17008 - No way to pass data between pages.
Instead, use Next router query string, sessionStorage or state management options*/
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Context from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}
