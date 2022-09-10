import "../styles/globals.css";
import "@fontsource/space-grotesk";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [parent] = useAutoAnimate({ duration: 200 });
  return (
    <>
      <Nav />
      {/* @ts-ignore */}
      <main className="z-10 min-h-screen bg-dark text-light" ref={parent}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
