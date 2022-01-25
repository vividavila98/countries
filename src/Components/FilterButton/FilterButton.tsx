import React, { useState } from "react";

interface RegionResults {
  handleRegionChange: (value: string) => void;
}

export default function FilterButton(props: RegionResults) {
  const { handleRegionChange } = props;
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const toggler = () => setToggle(!toggle);

  const selectRegion = (value: string) => {
    setSelected(value);
    handleRegionChange(value);
    toggler();
  };

  return (
    <div>
      <button className="list" onClick={toggler}>
        Filter by Region
      </button>
      {toggle && (
        <div className="region-container">
          {options.map((option, i) => (
            <div
              className="region"
              key={i}
              onClick={() => selectRegion(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
