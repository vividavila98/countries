import React, { useState } from "react";

interface RegionResults {
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterButton(props: RegionResults) {
  const { setRegion } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="list" onClick={() => setToggle(!toggle)}>
        Filter by Region
      </button>
      {toggle && (
        <div className="region-container">
          <div
            className="region"
            onClick={() => {
              setRegion("Africa");
              setToggle(!toggle);
            }}
          >
            Africa
          </div>
          <div
            className="region"
            onClick={() => {
              setRegion("Americas");
              setToggle(!toggle);
            }}
          >
            America
          </div>
          <div
            className="region"
            onClick={() => {
              setRegion("Asia");
              setToggle(!toggle);
            }}
          >
            Asia
          </div>
          <div
            className="region"
            onClick={() => {
              setRegion("Europe");
              setToggle(!toggle);
            }}
          >
            Europe
          </div>
          <div
            className="region"
            onClick={() => {
              setRegion("Oceania");
              setToggle(!toggle);
            }}
          >
            Oceania
          </div>
        </div>
      )}
    </div>
  );
}
