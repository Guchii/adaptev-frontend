/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="nice"
          />
          <div>
            <h1 className="text-5xl font-bold">Electrix</h1>
            <p className="py-6">
              Very epic funny fortnite battlepass level shit. Funny epic nice.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium, quod doloremque nesciunt minima expedita recusandae
              dolorum aliquam quisquam libero ducimus?
            </p>
            <button
              className="btn btn-warning rounded-full w-96"
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
