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
          <div className="region" onClick={() => setRegion("Africa")}>
            Africa
          </div>
          <div className="region" onClick={() => setRegion("Americas")}>
            America
          </div>
          <div className="region" onClick={() => setRegion("Asia")}>
            Asia
          </div>
          <div className="region" onClick={() => setRegion("Europe")}>
            Europe
          </div>
          <div className="region" onClick={() => setRegion("Oceania")}>
            Oceania
          </div>
        </div>
      )}
    </div>
  );
}
