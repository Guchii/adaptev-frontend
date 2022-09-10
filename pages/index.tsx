/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img src="/battery.svg" className="max-w-sm rounded-lg" alt="nice" />
          {/* @ts-ignore */}
          <div>
            <h1 className="text-5xl font-bold uppercase">Electrix</h1>
            <p className="py-6">
              Very epic funny fortnite battlepass level shit. Funny epic nice.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, quod doloremque nesciunt minima expedita recusandae
              dolorum aliquam quisquam libero ducimus?
            </p>
            <button
              className="font-bold rounded-full btn btn-warning w-96"
              onClick={() => router.push("/app")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
