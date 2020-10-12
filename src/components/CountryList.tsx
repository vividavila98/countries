import React, {useState, useEffect, FormEvent} from 'react';
import '../styles/country-list.scss';
import Country from './Country';
//import moon from '../assets/moon.png';
import axios from 'axios';

export default function CountryList() {
    const [searchCountry, setSearchCountry] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [searchCountryNames, setSearchName] = useState([]);

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
                const call = await axios.get('https://restcountries.eu/rest/v2/all');
                if (call.data) {
                    setCountryList(call.data);
                }
            } catch(e) {
                console.error(e);
            }
        };
        callCountry();
    }, []);

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
          </section>
          <section className="countries">
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
