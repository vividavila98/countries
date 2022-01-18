import React from 'react';
import "./country-list.scss";
import Country from "../Country/Country";
//import moon from '../assets/moon.png';
// import axios from 'axios';
import useFetch from '../../Hooks/useFetch';

export default function CountryList() {
  // const [searchCountry, setSearchCountry] = useState('');
  // const [countryList, setCountryList] = useState<any[]>([]);
  // const [searchCountryNames, setSearchName] = useState([]);
  // const [viewRegion, setViewRegion] = useState(false);
  // const [regionList, setRegionList] = useState([]);

  const { data } = useFetch("https://restcountries.com/v3.1/all"); // fetch all countries

  // search for country based on input in search field 
  // const searchName = async (name: string) => {
  //       try {
  //           const search = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  //           console.log(search.data);
  //           setSearchName(search.data);
  //       } catch(e) {
  //           console.error(e);
  //       }
  // };

  // while inputting in search field 
  // const handleSearch = (e: FormEvent<HTMLInputElement>) => {
  //   setSearchCountry(e.currentTarget.value);
  //   searchName(e.currentTarget.value);
  // };

  // search by region
  // const searchRegion = async (region: string) => {
  //       try {
  //           const search = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
  //           setRegionList(search.data);
  //           setViewRegion(false);
  //       } catch(e) {
  //           console.error(e);
  //       }
  // }
  
  return (
    <section className="country-list light">
      {
        data.map((elem: any, index) => (
          <Country key={index} info={elem} />
        ))
      }
    </section>
  )
}
