/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen hero">
        <div className="flex items-center justify-center w-full gap-16 px-8">
          {/* @ts-ignore */}
          <div>
            <h1 className="text-5xl font-bold uppercase">ADAPTEV</h1>
            <p className="py-6 ">
              a <span className="font-bold">B2B</span> solution for adapting EV
              in a new market
            </p>
            <button
              className="font-bold rounded-full btn btn-warning w-96"
              onClick={() => router.push("/app")}
            >
              Get Started
            </button>
          </div>
          <img src="/battery.svg" className="max-w-sm rounded-lg" alt="nice" />
        </div>
      </div>
    </>
  );
};

export default Home;
