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
      <main
        className="z-10 min-h-screen text-white select-none bg-dark"
        // @ts-ignore
        ref={parent}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
