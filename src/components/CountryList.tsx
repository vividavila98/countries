import React, {useState, useEffect, FormEvent} from 'react';
import '../styles/country-list.scss';
import Country from './Country';
//import moon from '../assets/moon.png';
import axios from 'axios';

export default function CountryList() {
    const [searchCountry, setSearchCountry] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [searchCountryNames, setSearchName] = useState([]);
    const [viewRegion, setViewRegion] = useState(false);
    const [regionList, setRegionList] = useState([]);
    //const [darkMode, setDarkMode] = useState();

    // search for country based on input in search field 
    const searchName = async (name: string) => {
        try {
            const search = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
            console.log(search.data);
            setSearchName(search.data);
        } catch(e) {
            console.error(e);
        }
    };

    // while inputting in search field 
    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setSearchCountry(e.currentTarget.value);
        searchName(e.currentTarget.value);
    };
 
    // get all info on countries
    useEffect(() => {
        const callCountry = async () => {
            try {
                const call = await axios.get('https://restcountries.com/v3.1/all');
                if (call.data) {
                    // setCountryList(call.data);
                    console.log(call.data);
                }
            } catch(e) {
                console.error(e);
            }
        };
        callCountry();
    }, []);

    // search by region
    const searchRegion = async (region: string) => {
        try {
            const search = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
            setRegionList(search.data);
            setViewRegion(false);
        } catch(e) {
            console.error(e);
        }
    }

    console.log(regionList);

  return (
    <div className="country-list">
      <header className="light-header">
          <div className="title"><a href="/">Where in the world?</a></div>
          <div>Dark Mode</div>
      </header>
      <section className="list light">
          <section className="fields">
              <div>
                  <input type="text"  value={searchCountry} onChange={handleSearch} placeholder="Search for a country..." />
              </div>
              <div>
                  <button className="list" onClick={() => setViewRegion(!viewRegion)}>Filter by Region</button>
                  {viewRegion && 
                  <div className="region-container">
                      <div className="region" onClick={() => searchRegion("Africa")}>Africa</div>
                      <div className="region" onClick={() => searchRegion("Americas")}>America</div>
                      <div className="region" onClick={() => searchRegion("Asia")}>Asia</div>
                      <div className="region" onClick={() => searchRegion("Europe")}>Europe</div>
                      <div className="region" onClick={() => searchRegion("Oceania")}>Oceania</div>
                  </div>
                  }
              </div>
          </section>
          <section className="countries">
          { regionList.length > 0 && 
                  regionList.map(region => {
                    return <Country key ={regionList.indexOf(region)} info={region}/>
                  })
              }
              { searchCountryNames.length === 0 && 
                  countryList.map(country => {
                    return <Country key ={countryList.indexOf(country)} info={country}/>
                  })
              }
              {
               searchCountryNames.length > 0 &&   
               searchCountryNames.map(country => {
                return <Country key ={searchCountryNames.indexOf(country)} info={country}/>
              })
              }
          </section>
      </section>
    </div>
  );
}
