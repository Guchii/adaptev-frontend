import type { FC } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/virengajera/india-topojson/main/mapdata/india.json";

const Map: FC<{ position?: Array<number> }> = ({ position }) => {
  return (
    <ComposableMap projection={"geoAlbers"}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
