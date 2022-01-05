import React from 'react';

export default function Search() {
    return (
        <section className="search light">
          <div>
            {/* <input type="text"  value={searchCountry} onChange={handleSearch} placeholder="Search for a country..." /> */}
            <input type="text" placeholder="Search for a country..." />
          </div>
          <div>
            <button className="list" /*onClick={() => setViewRegion(!viewRegion)}*/>Filter by Region</button>
            {/* {viewRegion &&  
            <div className="region-container">
                <div className="region" onClick={() => searchRegion("Africa")}>Africa</div>
                <div className="region" onClick={() => searchRegion("Americas")}>America</div>
                <div className="region" onClick={() => searchRegion("Asia")}>Asia</div>
                <div className="region" onClick={() => searchRegion("Europe")}>Europe</div>
                <div className="region" onClick={() => searchRegion("Oceania")}>Oceania</div>
            </div>
            */}
        </div>
    </section>
    )
}
