import "../styles/globals.css";
import "@fontsource/space-grotesk";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main className="bg-dark text-light min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
