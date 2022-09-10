import type { NextPage } from "next";
import { useState } from "react";
import type { FC } from "react";
import states from "../data/states.json";

enum Colors {
  error = "error",
  success = "success",
  accent = "accent",
  warning = "warning",
}

const Predictions = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState(0);
  return (
    <section className="p-8">
      <div className="flex gap-4 mb-4">
        <h2 className="text-4xl">Map</h2>
        <select
          className="select select-bordered"
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option disabled selected>
            Pick a city
          </option>
          {states.states.map((state, i) => {
            return <option key={i}>{state.name}</option>;
          })}
        </select>
      </div>
      <div className="flex w-full gap-4">
        <div className="h-96 w-full bg-light rounded-3xl grid place-items-center">
          <h2 className="text-black text-5xl">map will go here {state}</h2>
        </div>
        <div></div>
      </div>
      <div>
        <h2 className="text-4xl my-8">Statistics</h2>
        <div className="flex gap-32 items-center">
          <div className="flex flex-col gap-4">
            <ProgressBar color={Colors.accent} />
            <ProgressBar color={Colors.success} />
            <ProgressBar color={Colors.error} />
            <ProgressBar />
          </div>
          {/* @ts-ignore */}
          <div className="radial-progress scale-150" style={{ "--value": 90 }}>
            90%
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgressBar: FC<{ color?: Colors }> = ({ color = Colors.warning }) => {
  const returnRandom = () => Math.floor(Math.random() * 100);
  const [value, setValue] = useState(returnRandom());
  return (
    <div
      onClick={() => {
        setValue(returnRandom());
      }}
    >
      <span className="block">Price</span>
      <progress
        className={`progress w-96 progress-${color}`}
        value={value}
        max="100"
      ></progress>
    </div>
  );
};

export default Predictions;
