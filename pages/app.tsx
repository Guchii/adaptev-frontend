import { useState } from "react";
import type { FC } from "react";
import states from "../data/states.json";
import Map from "../components/Map";

enum Colors {
  error = "error",
  success = "success",
  accent = "accent",
  warning = "warning",
}

const Predictions = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState(0);
  const [radialProgres, setRadialProgress] = useState(90);
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
      <div className="h-[400px] w-full bg-orange-300 rounded-3xl overflow-hidden">
        <Map />
      </div>
      <div>
        <h2 className="my-8 text-4xl">Statistics</h2>
        <div className="flex items-center gap-32">
          <div className="flex flex-col gap-4">
            <ProgressBar color={Colors.accent} title={"Price"} />
            <ProgressBar color={Colors.success} title={"Efficiency"} />
            <ProgressBar color={Colors.error} title={"Power"} />
          </div>
          <div
            className="scale-150 radial-progress"
            // @ts-ignore
            style={{ "--value": radialProgres }}
            onClick={() => {
              setRadialProgress(Math.floor(Math.random() * 100));
            }}
          >
            {radialProgres}%
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgressBar: FC<{ color?: Colors; title?: string }> = ({
  color = Colors.warning,
  title = "FieldName",
}) => {
  const returnRandom = () => Math.floor(Math.random() * 100);
  const [value, setValue] = useState(returnRandom());
  return (
    <div
      onClick={() => {
        setValue(returnRandom());
      }}
    >
      <span className="block">{title}</span>
      <progress
        className={`progress w-96 progress-${color}`}
        value={value}
        max="100"
      ></progress>
    </div>
  );
};

export default Predictions;
