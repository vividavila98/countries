import React, {useState, FormEvent} from 'react';
import '../styles/country-list.scss';
//import moon from '../assets/moon.png';

export default function CountryList() {
    const [searchCountry, setSearchCountry] = useState('');

    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setSearchCountry(e.currentTarget.value);
    };

  return (
    <div className="country-list">
      <header>
          <div className="title">Where in the world?</div>
          <div>Dark Mode</div>
      </header>
      <section className="list light">
          <section className="fields">
              <div>
                  <input type="text"  value={searchCountry} onChange={handleSearch} placeholder="Search for a country..." />
              </div>
              <div>
                  <button>Filter by Region</button>
              </div>
              <section className="countries">
              </section>
          </section>
      </section>
    </div>
  );
}
